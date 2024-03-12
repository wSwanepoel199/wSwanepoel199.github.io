import Color from 'color';
import plugin from 'tailwindcss/plugin';
import flatten from 'flat';

const SCHEME = Symbol('color-scheme');
const emptyConfig = {};

// type NestedColors = { [SCHEME]?: 'light' | 'dark' } & MaybeNested<string, string>;
// type FlatColors = { [SCHEME]?: 'light' | 'dark' } & Record<string, string>;
// type TwcObjectConfig<ThemeName extends string> = Record<ThemeName, NestedColors>;
// type TwcFunctionConfig<ThemeName extends string> = (scheme: {
//    light: typeof light;
//    dark: typeof dark;
// }) => TwcObjectConfig<ThemeName>;

// type DefaultThemeObject<ThemeName = any> = {
//    light: NoInfer<ThemeName> | (string & {});
//    dark: NoInfer<ThemeName> | (string & {});
// };

// type ResolvedVariants = Array<{ name: string; definition: string[] }>;
// type ResolvedUtilities = { [selector: string]: Record<string, any> };
// type ResolvedColors = {
//    [colorName: string]: ({
//       opacityValue,
//       opacityVariable,
//    }: {
//       opacityValue: string;
//       opacityVariable: string;
//    }) => string;
// };
// type Resolved = {
//    variants: ResolvedVariants;
//    utilities: ResolvedUtilities;
//    colors: ResolvedColors;
// };

// export type TwcConfig<ThemeName extends string = string> =
//    | TwcObjectConfig<ThemeName>
//    | TwcFunctionConfig<ThemeName>;

// export interface TwcOptions<ThemeName extends string = string> {
//    produceCssVariable?: (colorName: string) => string;
//    produceThemeClass?: (themeName: ThemeName) => string;
//    produceThemeVariant?: (themeName: ThemeName) => string;
//    defaultTheme?: NoInfer<ThemeName> | (string & {}) | DefaultThemeObject<ThemeName>;
//    strict?: boolean;
// }

/**
 * Resolves the variants, base and colors to inject in the plugin
 * Library authors might use this function instead of the createThemes function
 */
export const resolveTwcConfig = (
  config = emptyConfig,
  {
    produceCssVariable = defaultProduceCssVariable,
    produceThemeClass = defaultProduceThemeClass,
    produceThemeVariant = produceThemeClass,
    defaultTheme,
    strict = false,
  } = {},
) => {
  const resolved = {
    variants: [],
    utilities: {},
    colors: {},
  };
  const configObject = typeof config === 'function' ? config({ dark, light }) : config;

  // @ts-ignore forEach types fail to assign themeName
  Object.entries(configObject).forEach(([themeName, colors]) => {
    const themeClassName = produceThemeClass(themeName);
    const themeVariant = produceThemeVariant(themeName);

    const flatColors = flattenColors(colors);
    // set the resolved.variants
    resolved.variants.push({
      name: themeVariant,
      // tailwind will generate only the first matched definition
      definition: [
        generateVariantDefinitions(`.${themeClassName}`),
        generateVariantDefinitions(`[data-theme='${themeName}']`),
        generateRootVariantDefinitions(themeName, defaultTheme),
      ].flat(),
    });

    const cssSelector = `.${themeClassName},[data-theme="${themeName}"]`;
    // set the color-scheme css property
    resolved.utilities[cssSelector] = colors[SCHEME] ? { 'color-scheme': colors[SCHEME] } : {};

    Object.entries(flatColors).forEach(([colorName, colorValue]) => {
      // this case was handled above
      if ((colorName) === SCHEME) return;
      const safeColorName = escapeChars(colorName, '/');
      let [h, s, l, defaultAlphaValue] = [0, 0, 0, 1];
      try {
        [h, s, l, defaultAlphaValue] = toHslaArray(colorValue);
      } catch (error) {
        const message = `\r\nWarning - In theme "${themeName}" color "${colorName}". ${error.message}`;

        if (strict) {
          throw new Error(message);
        }
        return console.error(message);
      }
      const twcColorVariable = produceCssVariable(safeColorName);
      const twcOpacityVariable = `${produceCssVariable(safeColorName)}-opacity`;
      // add the css variables in "@layer utilities" for the hsl values
      const hslValues = `${h} ${s}% ${l}%`;
      resolved.utilities[cssSelector][twcColorVariable] = hslValues;
      addRootUtilities(resolved.utilities, {
        key: twcColorVariable,
        value: hslValues,
        defaultTheme,
        themeName,
      });
      if (typeof defaultAlphaValue === 'number') {
        // add the css variables in "@layer utilities" for the alpha
        const alphaValue = defaultAlphaValue.toFixed(2);
        resolved.utilities[cssSelector][twcOpacityVariable] = alphaValue;
        addRootUtilities(resolved.utilities, {
          key: twcOpacityVariable,
          value: alphaValue,
          defaultTheme,
          themeName,
        });
      }
      // set the dynamic color in tailwind config theme.colors
      resolved.colors[colorName] = ({ opacityVariable, opacityValue }) => {
        // if the opacity is set  with a slash (e.g. bg-primary/90), use the provided value
        if (!isNaN(+opacityValue)) {
          return `hsl(var(${twcColorVariable}) / ${opacityValue})`;
        }
        // if no opacityValue was provided (=it is not parsable to a number),
        // the twcOpacityVariable (opacity defined in the color definition rgb(0, 0, 0, 0.5))
        // should have the priority over the tw class based opacity(e.g. "bg-opacity-90")
        // This is how tailwind behaves as for v3.2.4
        if (opacityVariable) {
          return `hsl(var(${twcColorVariable}) / var(${twcOpacityVariable}, var(${opacityVariable})))`;
        }
        return `hsl(var(${twcColorVariable}) / var(${twcOpacityVariable}, 1))`;
      };
    });
  });

  return resolved;
};

export const createThemes = (
  config = emptyConfig,
  options = {},
) => {
  const resolved = resolveTwcConfig(config, options);
  return plugin(
    ({ addUtilities, addVariant }) => {
      // add the css variables to "@layer utilities" because:
      // - The Base layer does not provide intellisense
      // - The Components layer might get overriden by tailwind default colors in case of name clash
      addUtilities(resolved.utilities);
      // add the theme as variant e.g. "theme-[name]:text-2xl"
      resolved.variants.forEach(({ name, definition }) => addVariant(name, definition));
    },
    // extend the colors config
    {
      theme: {
        extend: {
          // @ts-ignore tailwind types are broken
          colors: resolved.colors,
        },
      },
    },
  );
};

function escapeChars(str, ...chars) {
  let result = str;
  for (let char of chars) {
    const regexp = new RegExp(char, 'g');
    result = str.replace(regexp, '\\' + char);
  }
  return result;
}

function flattenColors(colors) {
  const flatColorsWithDEFAULT = flatten(colors, {
    safe: true,
    delimiter: '-',
  });

  return Object.entries(flatColorsWithDEFAULT).reduce((acc, [key, value]) => {
    acc[key.replace(/\-DEFAULT$/, '')] = value;
    return acc;
  }, {});
}

function toHslaArray(colorValue) {
  return Color(colorValue).hsl().round(1).array();
}

function defaultProduceCssVariable(themeName) {
  return `--twc-${themeName}`;
}

function defaultProduceThemeClass(themeName) {
  return themeName;
}

function dark(colors) {
  return {
    ...colors,
    [SCHEME]: 'dark',
  };
}

function light(colors) {
  return {
    ...colors,
    [SCHEME]: 'light',
  };
}

function generateVariantDefinitions(selector) {
  return [
    `${selector}&`,
    `:is(${selector} > &:not([data-theme]))`,
    `:is(${selector} &:not(${selector} [data-theme]:not(${selector}) * ))`,
    `:is(${selector}:not(:has([data-theme])) &:not([data-theme]))`,
  ];
}

function generateRootVariantDefinitions(
  themeName,
  defaultTheme = ['defaultTheme'],
) {
  const baseDefinitions = [
    `:root&`,
    `:is(:root > &:not([data-theme]))`,
    `:is(:root &:not([data-theme] *):not([data-theme]))`,
  ];

  if (typeof defaultTheme === 'string' && themeName === defaultTheme) {
    return baseDefinitions;
  }

  if (typeof defaultTheme === 'object' && themeName === defaultTheme.light) {
    return baseDefinitions.map(
      (definition) => `@media (prefers-color-scheme: light){${definition}}`,
    );
  }

  if (typeof defaultTheme === 'object' && themeName === defaultTheme.dark) {
    return baseDefinitions.map(
      (definition) => `@media (prefers-color-scheme: dark){${definition}}`,
    );
  }
  return [];
}

// hande the defaultTheme utils
function addRootUtilities(
  utilities,
  {
    key,
    value,
    defaultTheme,
    themeName,
  },
) {
  if (!defaultTheme) return;
  if (typeof defaultTheme === 'string') {
    if (themeName === defaultTheme) {
      // initialize
      if (!utilities[':root']) {
        utilities[':root'] = {};
      }
      // set
      utilities[':root'][key] = value;
    }
  } else if (themeName === defaultTheme.light) {
    // initialize
    if (!utilities['@media (prefers-color-scheme: light)']) {
      utilities['@media (prefers-color-scheme: light)'] = {
        ':root': {},
      };
    }
    // set
    utilities['@media (prefers-color-scheme: light)'][':root'][key] = value;
  } else if (themeName === defaultTheme.dark) {
    // initialize
    if (!utilities['@media (prefers-color-scheme: dark)']) {
      utilities['@media (prefers-color-scheme: dark)'] = {
        ':root': {},
      };
    }
    // set
    utilities['@media (prefers-color-scheme: dark)'][':root'][key] = value;
  }
}
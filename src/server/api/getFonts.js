import fs from 'node:fs/promises';
import path from 'node:path';
import figlet from 'figlet';


// const importString = (spec, encoding = 'utf8') => {
//   const caller = stack()[1];
//   console.log(caller);
// };

export default defineEventHandler(async (e) => {
  if (e.method === 'GET') {
    // const font = await import(`figlet/importable-fonts/DOS Rebel`).then(({ default: font }) => console.log(font));
    // console.log(font);

    return figlet.fonts(function (err, fonts) {
      if (err) {
        console.log("something went wrong...");
        console.dir(err);
        return;
      }
      console.dir(fonts);
      return fonts;
    });

    // const fonts = await fs.readdir('./node_modules/figlet/fonts', { withFileTypes: false }).then((fonts) => fonts.map((name) => name.replace('.flf', '')));
    return fonts;
  }
  const options = await readBody(e);
  if (options.font) {
    console.log(options.font);
    // const font = await fs.readFile(path.join(__dirname, `${options.font}.flf`), 'utf8');

    figlet.loadFont(options.font, (err, font) => {
      if (err) {
        console.log("something went wrong...");
        console.dir(err);
        return;
      }
      console.dir(font);
      return font;
    });
    // const font = import('figlet/importable-fonts/' + options.font + ".js").then(font => console.log(font));

    return "ok";
  }

  return 'No font';
});
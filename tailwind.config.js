/** @type {import('tailwindcss').Config} */

// const plugin = require('tailwindcss/plugin');
// const createThemes = require('tw-colors');

import { createThemes } from "./src/utils/tailwindThemes";
import themes from "./theme.js";

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,vue}',
    './src/components/**/*.{js,ts,jsx,tsx,vue}',
    './src/layouts/**/*.{js,ts,jsx,tsx,vue}',
    './src/utils/**/*.{js,ts,jsx,tsx,vue}',
    './app.vue',
  ],
  darkMode: "media",
  theme: {
    extend: {},
  },
  plugins: [
    // plugin(({ matchUtilities, theme, prefix, important }) => {
    //   prefix: 'twc-',
    //     important: true,

    // })
    createThemes(
      themes, {
      defaultTheme: 'default'
    })
  ],
}


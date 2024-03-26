// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src/",
  rootDir: "./",
  runtimeConfig: {
    app: {
      baseURL: "",
      cdnURL: "",
    },
  },
  css: ["~/assets/css/main.css", "~/assets/css/fonts.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ["renderOutput"].includes(tag),
    },
  },
  nitro: {
    preset: "github-pages",
  },
  webpack: {
    optimizeCSS: true,
  },
  modules: ["@nuxtjs/tailwindcss"],
});

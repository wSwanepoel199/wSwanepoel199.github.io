// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src/",
  rootDir: "./",
  runtimeConfig: {
    app: {
      baseURL: "/",
      buildAssetsDir: "/_nuxt/",
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
  modules: ["@nuxtjs/tailwindcss"],
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
});

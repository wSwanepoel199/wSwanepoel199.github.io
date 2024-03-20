// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src/",
  rootDir: "./",
  // runtimeConfig: {
  //   readmeUrl:
  //     "https://raw.githubusercontent.com/cveinnt/cveinnt/master/README.md",
  //   title: "LiveTerm",
  //   name: "Will",
  //   social: {
  //     github: "wSwanepoel199",
  //     linkedin: "wswanepoel",
  //   },
  //   email: "contact@email.com",
  //   repo: "https://github.com/Cveinnt/LiveTerm",
  //   resume_url:
  //     "https://upload.wikimedia.org/wikipedia/commons/c/cc/Resume.pdf",
  //   donate_urls: {
  //     paypal: "https://paypal.me/cveinnt",
  //   },
  // },
  css: ["~/assets/css/main.css"],
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
});

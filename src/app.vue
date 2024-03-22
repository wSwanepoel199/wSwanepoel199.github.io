<script setup>
useHead({
  title: "Will Portfolio Terminal",
  description:
    "A portfolio website designed around the look of a terminal, build using nuxt and vue",
  viewport: "width=device-width,initial-scale=1.0",
  charset: "utf-8",
  link: [
    { rel: "icon", type: "image/png", href: "favicon.png" },
    {
      rel: "preload",
      href: "_nuxt/fonts/HackNerdFont/HackNerdFontMono-Regular.ttf",
      as: "font",
      type: "font/ttf",
      crossorigin: true,
    },
  ],
});
</script>

<template>
  <div>
    <NuxtLoadingIndicator class="text-light-green dark:text-dark-green" />
    <div
      class="max-w-full h-dvh text-light-foreground dark:text-dark-foreground text-sm md:min-w-full md:text-base"
    >
      <NuxtPage />
    </div>
  </div>
</template>

<style>
@import url("~/assets/css/fonts.css");
</style>

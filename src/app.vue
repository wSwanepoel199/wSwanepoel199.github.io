<script setup>
const origin = window?.location
  ? window.location.host + window.location.pathname
  : "/";
useHead({
  title: "Willem's Portfolio Terminal",
  description:
    "A portfolio website designed around the look of a terminal, build using nuxt and vue",
  viewport: "width=device-width,initial-scale=1.0",
  charset: "utf-8",
  link: [
    { rel: "icon", type: "image/png", href: "favicon.png" },
    { rel: "canonical", href: origin },
    // {
    //   rel: "preload",
    //   href: "/fonts/HackNerdFont/HackNerdFontMono-Regular.ttf",
    //   as: "font",
    //   type: "font/ttf",
    //   crossorigin: true,
    // },
  ],
});
// const { progress, isLoading, start, finish, clear } = useLoadingIndicator({
//   duration: 2000,
//   throttle: 200,
// });
// const loading = ref(false);
// const triggerLoading = () => {
//   if (!loading.value) {
//     console.log(loading.value, "loading");
//     start();
//     loading.value = true;
//   } else {
//     console.log(loading.value, "loading");
//     finish();
//     loading.value = false;
//   }
//   console.log(progress, isLoading);
// };
// onUpdated(() => {
//   console.log(progress, isLoading);
// });
</script>

<template>
  <div
    class="w-dvw h-dvh text-light-foreground dark:text-dark-foreground text-sm md:min-w-full md:text-base"
  >
    <NuxtPage />
  </div>
</template>

<script setup>
const title = "Nuxt Terminal App";
const viewport = "width=device-width,initial-scale=1.0";
useSeoMeta({
  resume_will: "/resume_will.pdf",
});
</script>

<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" content="Nuxt Terminal App" />
      <Meta name="viewport" :content="viewport" />
    </Head>

    <NuxtPage />
  </div>
</template>

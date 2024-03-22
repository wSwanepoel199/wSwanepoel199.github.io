<script setup>
const user = ["guest", "nuxt"];
const endRef = ref();
const wrapperRef = ref();

defineExpose({
  endRef,
  wrapperRef,
});
</script>

<template>
  <div class="inline-flex flex-row flex-wrap" ref="wrapperRef">
    <p class="text-light-yellow dark:text-dark-yellow">{{ user[0] }}</p>
    <p class="text-light-gray dark:text-dark-gray">@</p>
    <p class="text-light-green dark:text-dark-green">{{ user[1] }}</p>
    <p ref="endRef" class="text-light-gray dark:text-dark-gray">:~$</p>
  </div>
</template>

<script setup>
const user = ["guest", "nuxt"];
</script>

<template>
  <div>
    <span class="text-light-yellow dark:text-dark-yellow">{{ user[0] }}</span>
    <span class="text-light-gray dark:text-dark-gray">@</span>
    <span class="text-light-green dark:text-dark-green">{{ user[1] }}</span>
    <span class="text-light-gray dark:text-dark-gray">:~$ </span>
  </div>
</template>

<script setup>
const user = ["guest", "nuxt"];
</script>

<template>
  <div>
    <span>{{ user[0] }}</span>
    <span>@</span>
    <span>{{ user[1] }}</span>
    <span>:~$</span>
  </div>
</template>

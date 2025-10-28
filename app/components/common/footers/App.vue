<template>
  <UFooter class="">
    <p class="text-muted text-sm">Copyright © {{ Year }}</p>
  </UFooter>
</template>

<script setup lang="ts">
  const Year = new Date().getFullYear();
</script>

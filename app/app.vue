<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
    <ui-loader v-if="globalStore.loadings" fixed/>
  </UApp>
</template>

<script setup lang="ts">
  const globalStore = useGlobalStore()
</script>

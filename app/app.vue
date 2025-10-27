<template>
  <div class="flex flex-col min-h-screen">
    <NuxtLayout>
      <NuxtPage />
      <ui-loader
        v-if="globalStore.loadings"
        fixed
      />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  const globalStore = useGlobalStore();
</script>

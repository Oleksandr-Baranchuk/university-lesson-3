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
  const { locale } = useI18n();
  const onApplyYupLocal = useYupValidationMessage();
  const globalStore = useGlobalStore();
  const dayjs = useDayjs();
  watch(
    locale,
    lng => {
      onApplyYupLocal();
      dayjs.locale(lng);
    },
    { immediate: true }
  );
</script>

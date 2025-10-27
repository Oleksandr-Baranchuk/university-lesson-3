<template>
  <UApp :locale="locales[locale]">
    <common-headers-app />
    <main class="flex-1 flex flex-col">
      <slot />
    </main>
    <common-footers-app />
  </UApp>
</template>

<script lang="ts" setup>
  import { en, uk } from '@nuxt/ui/locale';

  const locales = { en, uk };
  const { locale } = useI18n();
</script>

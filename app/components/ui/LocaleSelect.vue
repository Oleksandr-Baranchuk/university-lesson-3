<template>
  <ULocaleSelect :model-value="locale" class="w-36" :locales="[en, uk]" @update:model-value="onSetLocale($event as TLocales)"/>
</template>

<script setup lang="ts">
  import { uk, en } from '@nuxt/ui/locale';

  type TLocales = 'en' | 'uk';

  const { locale, setLocale, loadLocaleMessages } = useI18n();
  const globalStore = useGlobalStore();

  const onSetLocale = async (locale: TLocales) => {
    globalStore.setLoadings(true);
    await loadLocaleMessages(locale)
    setLocale(locale)
    globalStore.setLoadings(false);
  }
</script>

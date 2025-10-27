<template>
  <UHeader>
    <template #left>
      <ui-logo />
    </template>
    <UNavigationMenu :items="menuItems" />
    <template #body>
      <UNavigationMenu
        :items="menuItems"
        orientation="vertical"
        class="-mx-2.5"
      />
    </template>
    <template #right>
      <ui-locale-select class="mr-2" />
      <ui-switch-theme />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
  import type { NavigationMenuItem } from '@nuxt/ui';

  const route = useRoute();
  const { t } = useI18n();
  const localePath = useLocalePath();

  const menuItems = computed<NavigationMenuItem[]>(() => {
    return [
      {
        label: t('header.navigation.home'),
        to: localePath('/'),
        active: route.path === '/'
      },
      {
        label: t('header.navigation.news'),
        to: localePath('/news'),
        active: route.path.startsWith('/news')
      },
      {
        label: t('header.navigation.education'),
        to: localePath('/education'),
        active: route.path.startsWith('/education')
      },
      {
        label: t('header.navigation.contacts'),
        to: localePath('/contacts'),
        active: route.path.startsWith('/contacts')
      }
    ];
  });
</script>

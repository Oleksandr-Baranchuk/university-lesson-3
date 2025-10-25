<template>
  <UHeader mode="drawer">
    <template #left>
      <ui-logo/>
    </template>
    <UNavigationMenu :items="menuItems"/>
    <template #right>
      <ui-locale-select class="mr-2"/>
      <UColorModeSwitch />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
  import type { NavigationMenuItem } from '@nuxt/ui';

  const route = useRoute();
  const { t }= useI18n();

  const menuItems = computed<NavigationMenuItem[]>(() => {
    return [
      {
        label: t('header.navigation.home'),
        to: '/',
        active: route.path === '/'
      },
      {
        label: t('header.navigation.about'),
        to: '/about',
        active: route.path.startsWith('/about')
      },
      {
        label: t('header.navigation.education'),
        to: '/education',
        active: route.path.startsWith('/education')
      },
      {
        label: t('header.navigation.contacts'),
        to: '/contacts',
        active: route.path.startsWith('/contacts')
      }
    ]
  });
</script>

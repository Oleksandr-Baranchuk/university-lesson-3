<template>
  <UPage>
    <UPageHeader
      as="h1"
      :ui="{ title: 'mx-auto' }"
      :title="$t('schedule.title')"
    />
    <UPageBody class="max-w-full mx-auto mt-0">
      <CommonEducationSchedule />
    </UPageBody>
  </UPage>
</template>

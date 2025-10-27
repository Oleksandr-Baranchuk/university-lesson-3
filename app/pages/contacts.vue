<template>
  <div class="flex flex-col flex-1 items-center justify-center py-6 px-4">
    <UCard
      variant="soft"
      class="max-w-xl w-full"
    >
      <h1 class="text-3xl mb-5 text-center">
        {{ $t('forms.contacts.title') }}
      </h1>
      <CommonContactsForm />
    </UCard>
  </div>
</template>

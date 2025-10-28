<template>
  <UForm
    :schema="schema"
    :state="state"
    class="space-y-4"
    @submit="onSubmit"
  >
    <UFormField
      name="name"
      :label="$t('forms.contacts.fields.name.label')"
    >
      <UInput
        v-model.trim="state.name"
        class="w-full"
        :placeholder="$t('forms.contacts.fields.name.placeholder')"
      />
    </UFormField>
    <UFormField
      required
      name="email"
      :label="$t('forms.contacts.fields.email.label')"
    >
      <UInput
        v-model.trim="state.email"
        type="email"
        class="w-full"
        :placeholder="$t('forms.contacts.fields.email.placeholder')"
      />
    </UFormField>
    <UFormField
      required
      name="message"
      :label="$t('forms.contacts.fields.message.label')"
    >
      <UTextarea
        v-model.trim="state.message"
        autoresize
        :maxrows="8"
        class="w-full"
        :placeholder="$t('forms.contacts.fields.message.placeholder')"
      />
    </UFormField>
    <div class="text-center">
      <UButton
        type="submit"
        :loading="loading"
      >
        {{ $t('actions.submit') }}
      </UButton>
    </div>
  </UForm>
</template>

<script setup lang="ts">
  import { object, string } from 'yup';
  const showSuccessToast = useSuccessToast();
  const loading = ref(false);
  const schema = object({
    name: string().label('forms.contacts.fields.name.label').max(140),
    email: string().label('forms.contacts.fields.email.label').email().required(),
    message: string().label('forms.contacts.fields.message.label').max(2000).required()
  });

  const state = reactive({
    email: '',
    name: '',
    message: ''
  });

  const onSubmit = async () => {
    loading.value = true;
    await new Promise(resolve => setTimeout(resolve, 1500));
    loading.value = false;
    showSuccessToast();
  };
</script>

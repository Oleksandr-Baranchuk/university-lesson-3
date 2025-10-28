<template>
  <UButton
    v-if="isSupported"
    :icon="copied ? 'material-symbols-light:check-circle-outline' : 'material-symbols-light:content-copy-outline'"
    v-bind="props"
    @click="onCopy"
  />
</template>

<script setup lang="ts">
  import type { ButtonProps } from '@nuxt/ui';

  type Props = { copyText: string } & Omit<ButtonProps, 'icon'>;

  const props = defineProps<Props>();

  const { copy, copied, isSupported } = useClipboard();

  const onCopy = () => {
    copy(props.copyText);
  };
</script>

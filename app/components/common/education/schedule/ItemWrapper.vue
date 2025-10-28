<template>
  <td
    class="border border-neutral-200 dark:border-neutral-800 px-3 py-2 align-center"
    :class="[classes]"
  >
    <slot />
  </td>
</template>

<script setup lang="ts">
  type Props = {
    indexRow: number;
    hideBg?: boolean;
  };

  const props = defineProps<Props>();

  const classes = computed(() => {
    if (props.hideBg) return;
    return [
      unref(props.indexRow) % 2 === 0 ? 'bg-neutral-50 dark:bg-neutral-900' : 'bg-white dark:bg-neutral-900',
      'dark:text-white text-neutral-900'
    ];
  });
</script>

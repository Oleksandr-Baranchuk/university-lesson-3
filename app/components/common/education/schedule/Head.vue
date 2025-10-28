<template>
  <td
    class="sticky left-0 z-10 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 px-3 py-2 text-md font-semibold shadow-sm"
    :class="classes"
  >
    <span
      v-if="isHead(cell)"
      class="text-center block min-w-[100px]"
    >
      {{ $t(`schedule.days.${cell.title}`) }}
    </span>
    <span
      v-else-if="isTime(cell)"
      class="flex flex-col items-center gap-1"
    >
      <span class="">{{ cell.time }} {{ $t('schedule.pair') }}</span>
      <span
        v-if="LessonTimes[cell.time - 1]"
        class="text-neutral-500 dark:text-neutral-400"
      >
        {{ LessonTimes[cell.time - 1]?.start }}
        <br />
        {{ LessonTimes[cell.time - 1]?.end }}
      </span>
    </span>
  </td>
</template>

<script setup lang="ts">
  import { type Cell, isHead, isTime } from '~/utils/schedule';
  import LessonTimes from '~/globals/schedule/LessonTimes';

  type Props = {
    cell: Cell;
    index: number;
  };

  const props = defineProps<Props>();

  const classes = computed(() => {
    return props.index % 2 === 0 ? 'border-t bg-neutral-50 dark:bg-neutral-900' : 'border-b';
  });
</script>

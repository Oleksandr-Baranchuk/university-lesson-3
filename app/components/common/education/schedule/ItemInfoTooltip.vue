<template>
  <div class="text-base relative py-1 max-w-[280px]">
    <div class="flex items-center gap-2 justify-between px-2">
      <p>
        <b>{{ cell.date }} {{ cell.time }} {{ $t('schedule.pair') }}</b>
      </p>

      <UButton
        color="neutral"
        size="xs"
        variant="ghost"
        icon="i-lucide-x"
        @click="$emit('close')"
      />
    </div>

    <USeparator class="my-1" />

    <div class="px-2">
      <div class="font-medium">
        {{ cell.name }}
        <template v-if="lessonTypeLabel">
          <b>[{{ lessonTypeLabel }}]</b>
        </template>
      </div>
      <div v-if="cell.teachers?.length">
        {{ formatTeacherName }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { ScheduleInfoHelpersProps } from '~/composables/schedule';

  const props = defineProps<ScheduleInfoHelpersProps>();
  defineEmits(['close']);

  const { lessonTypeLabel, formatTeacherName } = useScheduleInfoHelpers(props, true);
</script>

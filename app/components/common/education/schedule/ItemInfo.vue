<template>
  <UPopover
    :open="open"
    arrow
    :content="{ side: isMobile ? 'bottom' : 'right', sideOffset: 0 }"
    @update:open="onSetOpenPopover"
  >
    <template #default>
      <CommonEducationScheduleItemWrapper
        :class="[classes]"
        hide-bg
        :index-row="indexRow"
      >
        <div class="flex text-sm flex-col gap-1 text-center">
          <div class="font-medium">
            {{ formatName }}
            <template v-if="lessonTypeLabel">
              <b>[{{ lessonTypeLabel }}]</b>
            </template>
          </div>
          <div v-if="cell.teachers?.length">
            {{ formatTeacherName }}
          </div>
          <div v-if="contacts.length">
            <UButton
              :disabled="cell.isDisabled"
              icon="material-symbols-light:info-outline"
              color="neutral"
              variant="soft"
              @click.stop="onOpenContactModal"
            />
          </div>
        </div>
      </CommonEducationScheduleItemWrapper>
    </template>
    <template #content>
      <CommonEducationScheduleItemInfoTooltip
        :cell="cell"
        @close="onSetOpenPopover(false)"
      />
    </template>
  </UPopover>
</template>

<script setup lang="ts">
  import type { CellInfo } from '~/utils/schedule';
  import { LazyCommonEducationModalScheduleContactInfo } from '#components';

  type Props = {
    cell: CellInfo;
    indexRow: number;
  };

  const props = defineProps<Props>();
  const isMobile = breakpoints.smaller('lg');

  const { lessonTypeLabel, formatTeacherName } = useScheduleInfoHelpers(props);
  const overlay = useOverlay();
  const modalInfo = overlay.create(LazyCommonEducationModalScheduleContactInfo);

  const open = ref(false);

  const classes = computed(() => {
    if (props.cell.isDisabled) {
      return 'dark:bg-slate-100 dark:text-gray-400 bg-slate-300 text-gray-500 cursor-not-allowed';
    }
    return [
      {
        [LessonsType.laboratory]: 'dark:bg-sky-500 bg-sky-300',
        [LessonsType.lecture]: 'dark:bg-purple-400 bg-purple-200',
        [LessonsType.practical]: 'dark:bg-pink-400 bg-pink-200'
      }[props.cell.lessonType],
      'text-neutral-800'
    ];
  });
  const formatName = computed(() => props.cell.name.split(' ')[0]);

  const contacts = computed(() => props.cell.teachers.flatMap(t => t.contacts));

  const onSetOpenPopover = (v: boolean) => {
    if (props.cell.isDisabled && v) return;
    open.value = v;
  };

  const onOpenContactModal = () => {
    onSetOpenPopover(false);
    modalInfo.open({
      cell: props.cell
    });
  };
</script>

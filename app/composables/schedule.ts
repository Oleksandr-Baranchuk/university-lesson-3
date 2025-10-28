import type { CellInfo } from '@/utils/schedule';
export type ScheduleInfoHelpersProps = {
  cell: CellInfo;
};

export const useScheduleInfoHelpers = (props: ScheduleInfoHelpersProps, isFullName = false) => {
  const { t } = useI18n();

  const lessonTypeLabel = computed(() => {
    return props.cell.lessonType ? t(`schedule.lessonType.${props.cell.lessonType}`) : '';
  });

  const formatTeacherName = computed(() => {
    return props.cell.teachers
      .map(teacher => {
        let f = teacher.firstName;
        let m = teacher.middleName;
        if (!isFullName) {
          f = f.at(0) + '.';
          m = m.at(0) + '.';
        }
        return `${teacher.lastname} ${f} ${m}`;
      })
      .join(', ');
  });

  return {
    lessonTypeLabel,
    formatTeacherName
  };
};

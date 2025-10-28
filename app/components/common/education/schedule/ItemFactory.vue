<script lang="ts">
  import { type PropType, h } from 'vue';
  import {
    CommonEducationScheduleItemHead,
    CommonEducationScheduleItemInfo,
    CommonEducationScheduleItemEmpty
  } from '#components';
  import { type Cell, isHead, isInfo } from '@/utils/schedule';
  export default defineComponent({
    name: 'CommonEducationScheduleItemFactory',
    props: {
      indexRow: Number,
      cell: Object as PropType<Cell>
    },
    setup: props => {
      return () => {
        const componentProps = {
          indexRow: props.indexRow,
          cell: props.cell
        } as any;
        if (isHead(props.cell)) {
          return h(CommonEducationScheduleItemHead, componentProps);
        }
        if (isInfo(props.cell)) {
          return h(CommonEducationScheduleItemInfo, componentProps);
        }
        return h(CommonEducationScheduleItemEmpty, componentProps);
      };
    }
  });
</script>

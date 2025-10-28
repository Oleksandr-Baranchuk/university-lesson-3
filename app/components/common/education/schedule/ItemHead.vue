<template>
  <CommonEducationScheduleItemWrapper :index-row="indexRow">
    <div class="text-center text-sm font-semibold">
      {{ cell.title }}
    </div>
  </CommonEducationScheduleItemWrapper>
</template>

<script setup lang="ts">
  defineProps<{ cell: CellHead; indexRow: number }>();
</script>

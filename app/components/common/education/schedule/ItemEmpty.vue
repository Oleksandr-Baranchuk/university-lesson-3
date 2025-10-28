<template>
  <CommonEducationScheduleItemWrapper :index-row="indexRow">
    <div class="h-6 text-center text-xs italic select-none">—</div>
  </CommonEducationScheduleItemWrapper>
</template>

<script setup lang="ts">
  defineProps<{ indexRow: number }>();
</script>

<template>
  <div class="overflow-x-auto">
    <table
      v-if="table"
      class="min-w-full border-collapse border-spacing-0"
    >
      <tbody>
        <tr
          v-for="(row, ri) in table"
          :key="ri"
        >
          <CommonEducationScheduleHead
            v-if="row[0]"
            :cell="row[0]"
            :index="ri"
          />
          <CommonEducationScheduleItemFactory
            v-for="(cell, ci) in row.slice(1)"
            :key="ri + '-' + ci"
            :cell="cell"
            :index-row="ri"
          />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
  import { schedules1, schedules2 } from '@/mock/schedules';
  import type { Table } from '@/utils/schedule';

  const Puling_Time = 1000 * 60; // 1m;

  const table = ref<Table>();

  const onUpdateTable = () => {
    table.value = buildScheduleTable({
      schedules1,
      schedules2,
      startMonday: getMonday('2025-09-01')
    });
  };

  useIntervalFn(onUpdateTable, Puling_Time, {
    immediate: true
  });
  onUpdateTable();
</script>

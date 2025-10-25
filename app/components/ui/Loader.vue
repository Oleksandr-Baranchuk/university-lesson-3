<template>
  <div :class="fixed ? 'fixed' : 'absolute'"
       class="inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
    <div class="w-64">
      <UProgress animation="carousel"/>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    fixed?: boolean;
  }>();
</script>

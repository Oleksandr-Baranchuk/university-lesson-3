<template>
  <NuxtParticles
    v-if="isShow"
    id="tsparticles"
    :options="options"
  />
</template>

<script setup lang="ts">
  import type { ISourceOptions as ParticlesOptions } from '@tsparticles/engine';

  const PAGE_TRANSITION_TIME = 500; // 500ms
  const colorMode = useColorMode();
  const options = computed<ParticlesOptions>(() => {
    const isDark = colorMode.value === 'dark';
    const color = isDark ? '#ebe6e7' : '#364153';
    return {
      autoPlay: true,
      smooth: true,
      fullScreen: {
        enable: true,
        zIndex: -1
      },
      background: {
        color: {
          value: 'transparent'
        }
      },
      particles: {
        color: {
          value: color
        },
        links: {
          color: color,
          enable: true
        },
        move: {
          enable: true
        },
        number: {
          value: 100
        }
      }
    };
  });
  const isShow = ref(false);
  const timerId = ref<number>();

  onMounted(() => {
    timerId.value = setTimeout(() => {
      isShow.value = true;
    }, PAGE_TRANSITION_TIME);
  });

  onBeforeUnmount(() => {
    clearTimeout(timerId.value);
  });
</script>

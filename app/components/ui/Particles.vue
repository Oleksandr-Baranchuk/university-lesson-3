<template>
  <NuxtParticles
    v-if="isShow"
    id="tsparticles"
    :options="options"
  />
</template>

<script setup lang="ts">
  import type { ISourceOptions as ParticlesOptions } from '@tsparticles/engine';
  const isMobile = breakpoints.smaller('lg');

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
          value: isMobile ? 60 : 200
        }
      },
      interactivity: {
        detectsOn: 'window',
        events: {
          onClick: {
            enable: true,
            mode: 'repulse'
          },
          onHover: {
            enable: true,
            mode: 'grab'
          },
          resize: {
            delay: 0.5,
            enable: true
          }
        },
        modes: {
          grab: {
            distance: 300,
            links: {
              blink: false,
              consent: false,
              opacity: 1
            }
          },
          repulse: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
            easing: 'ease-out-quad',
            divs: {
              distance: 200,
              duration: 0.4,
              factor: 100,
              speed: 1,
              maxSpeed: 50,
              easing: 'ease-out-quad',
              selectors: {}
            }
          }
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

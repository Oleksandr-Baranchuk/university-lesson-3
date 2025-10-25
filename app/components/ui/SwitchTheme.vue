<template>
  <div ref="wrapElem">
    <USwitch
      v-model="isLight"
      unchecked-icon="material-symbols:dark-mode"
      checked-icon="material-symbols:light-mode"
    />
  </div>
</template>

<script setup lang="ts">
  const colorMode = useColorMode();
  const wrapElem = ref<HTMLDivElement>();

  const isLight = computed({
    get() {
      return colorMode.value === 'light';
    },
    set(val) {
      onSetTheme(val ? 'light' : 'dark');
    }
  });

  const onSetTheme = async (mode: 'light' | 'dark') => {
    if (
      !wrapElem.value ||
      !document.startViewTransition ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }
    await document.startViewTransition(() => {
      nextTick(() => {
        colorMode.preference = mode;
      });
    }).ready;
    if (wrapElem.value) {
      const { top, left, width, height } = wrapElem.value.getBoundingClientRect();
      const x = left + width / 2;
      const y = top + height / 2;
      const right = window.innerWidth - left;
      const bottom = window.innerHeight - top;
      const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom));

      document.documentElement.animate(
        {
          clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${maxRadius}px at ${x}px ${y}px)`]
        },
        {
          duration: 800,
          easing: 'ease-in-out',
          pseudoElement: '::view-transition-new(root)'
        }
      );
    }
  };
</script>

<style>
  ::view-transition-old(root),
  ::view-transition-new(root) {
    animation: none;
    mix-blend-mode: normal;
  }
</style>

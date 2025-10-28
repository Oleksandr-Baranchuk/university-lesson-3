<template>
  <svg class="w-full h-full">
    <text
      x="50%"
      y="70%"
      text-anchor="middle"
    >
      {{ $t('home.title') }}
    </text>
  </svg>
</template>

<script setup lang="ts"></script>
<style scoped>
  svg text {
    font-size: calc(6vw + 3rem);
    stroke-width: 2;
    animation: stroke 5s infinite alternate;

    --color-text: var(--ui-primary);
    --color-text-second: rgba(255, 255, 255, 0);
    stroke: var(--color-text);
  }

  .dark svg text {
    --color-text: var(--ui-secondary);
  }

  @keyframes stroke {
    0% {
      fill: var(--color-text-second);
      stroke: var(--color-text);
      stroke-dashoffset: 25%;
      stroke-dasharray: 0 50%;
      stroke-width: 2;
    }

    70% {
      fill: var(--color-text-second);
      stroke: var(--color-text);
    }

    80% {
      fill: var(--color-text-second);
      stroke: var(--color-text);
      stroke-width: 3;
    }

    100% {
      fill: var(--color-text);
      stroke: var(--color-text-second);
      stroke-dashoffset: -25%;
      stroke-dasharray: 50% 0;
      stroke-width: 0;
    }
  }
</style>

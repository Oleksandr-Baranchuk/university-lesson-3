<template>
  <svg
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
    class="w-screen h-[40vh] select-none"
  >
    <text
      x="50%"
      y="70%"
      text-anchor="middle"
    >
      {{ $t('home.title') }}
    </text>
  </svg>
</template>

<style scoped>
  svg {
    --color-text: var(--ui-primary);
    --color-text-second: transparent;
  }
  svg text {
    font-size: calc(6vw + 3rem);
    stroke-width: 2;
    animation: stroke 5s infinite alternate;
    stroke: var(--color-text);
    vector-effect: non-scaling-stroke;
  }

  :global(html.dark) svg {
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

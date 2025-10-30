<template>
  <UPageCard variant="subtle">
    <div class="flex items-start gap-4">
      <div class="w-[120px] h-[120px]">
        <ULink
          :to="item.link"
          target="_blank"
        >
          <img
            :src="item.img"
            :alt="item.title"
            class="object-cover w-[120px] h-[120px]"
          />
        </ULink>
      </div>
      <h4 class="lg:text-xl text-lg flex-1">
        <ULink
          :to="item.link"
          target="_blank"
        >
          {{ item.title }}
        </ULink>
      </h4>
    </div>
    <template #footer>
      <p class="text-sm text-right">{{ dateFormat }}</p>
    </template>
  </UPageCard>
</template>

<script setup lang="ts">
  type Props = {
    item: {
      title: string;
      link: string;
      img: string;
      date: string;
    };
  };

  const props = defineProps<Props>();

  const dateFormat = useDateFormat(() => props.item.date, DateFormats.base);
</script>

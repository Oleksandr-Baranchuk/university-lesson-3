<template>
  <UModal
    :close="{ onClick: onClose }"
    :title="$t('schedule.modals.contacts.title')"
  >
    <template #description>
      <span>
        <i>{{ cell.name }}</i>
        <br />
        {{ cell.date }} {{ cell.time }} {{ $t('schedule.pair') }}
      </span>
    </template>
    <template #body>
      <div class="text-base">
        <div
          v-for="(teacher, i) in cell.teachers"
          :key="i"
        >
          <p>
            <b class="pr-2">{{ $t('schedule.modals.contacts.teacher') }}:</b>
            <span>{{ teacher.lastname }} {{ teacher.firstName }} {{ teacher.middleName }}</span>
          </p>
          <div
            v-if="teacher.contacts.length"
            class="flex flex-col gap-2"
          >
            <p
              v-for="contact in teacher.contacts"
              :key="contact.type"
            >
              <b>{{ $t('schedule.contactsType.' + contact.type) }}</b>
              <br />
              <span
                v-if="contact.id"
                class="mr-2"
              >
                ID: {{ contact.id }}
                <UiButtonCopy
                  :copy-text="contact.id"
                  size="sm"
                />
              </span>
              <span
                v-if="contact.pass"
                class="mr-2"
              >
                Pass: {{ contact.pass }}
                <UiButtonCopy
                  :copy-text="contact.pass"
                  size="sm"
                />
              </span>
              <span
                v-if="contact.link"
                class="mr-2"
              >
                Link:
                <ULink
                  external
                  :href="contact.link"
                  target="_blank"
                >
                  {{ contact.link }}
                </ULink>

                <UiButtonCopy
                  :copy-text="contact.link"
                  class="ml-2"
                  size="sm"
                />
              </span>
            </p>
          </div>
        </div>
      </div>
    </template>
  </UModal>
</template>

<script setup lang="ts">
  import type { CellInfo } from '~/utils/schedule';

  type Props = {
    cell: CellInfo;
  };

  type Emits = {
    close: [];
  };

  defineProps<Props>();
  const emit = defineEmits<Emits>();

  const onClose = () => {
    emit('close');
  };
</script>

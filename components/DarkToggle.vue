<script setup lang="ts">
import { moonIcon, sunIcon } from '~~/assets/icons';

defineProps<{
  size?: string;
}>();

const color = useColorMode();

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark';
}

const icon = computed(() => {
  return color.value === 'light' ? moonIcon : sunIcon;
});
</script>

<template>
  <button class="!outline-none" type="button" @click="toggleDark">
    <ClientOnly>
      <VIcon v-bind="icon" :size="size" />
    </ClientOnly>
  </button>
</template>

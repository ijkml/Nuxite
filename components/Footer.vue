<script setup lang="ts">
import { campsiteIcon, githubIcon } from '~~/assets/icons';
</script>

<template>
  <div class="flex justify-center gap-4 text-gray-500 mt-8">
    <NuxtLink to="/">
      <VIcon v-bind="campsiteIcon" />
    </NuxtLink>
    <a href="https://github.com/ijkml/nuxite" target="_blank">
      <VIcon v-bind="githubIcon" />
    </a>
    <DarkToggle />
  </div>
</template>

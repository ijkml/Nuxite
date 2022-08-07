<script setup lang="ts">
</script>

<template>
  <div class="root">
    <div>
      <h1>Page Not Found</h1>
      <p>
        Looks like you've followed a broken link or entered a URL that doesn't
        exist on this site.
      </p>
      <div>
        <NuxtLink replace class="back-button" to="/">
          Back to our site
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.root {
  @apply text-zinc-600 dark:text-zinc-300 flex;

  > div {
    @apply px-5 py-16 max-w-screen-sm text-center mx-auto;
  }
}

h1 {
  @apply text-xl my-5 font-medium;

  + p {
    @apply max-w-50ch mb-8 md:text-lg;
  }
}

.back-button {
  @apply px-4 py-1 rounded inline-block bg-teal-600 text-white
    cursor-pointer hover:bg-teal-700 disabled:cursor-default
      disabled:bg-gray-600 disabled:opacity-50;
}
</style>

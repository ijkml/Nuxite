<script setup>
useHead({
  title: 'Nuxite',
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/nuxt.png',
    },
  ],
});

const prefersDark = usePreferredDark();
const color = useColorMode();

watch(prefersDark, (prefDark) => {
  color.preference = prefDark ? 'dark' : 'light';
});
</script>

<template>
  <NuxtLayout cl>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}
</style>

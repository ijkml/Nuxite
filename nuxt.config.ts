import { fileURLToPath } from 'url';
import { defineNuxtConfig } from 'nuxt';
import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', '@nuxtjs/color-mode', 'nuxt-windicss'],
  experimental: {
    reactivityTransform: true,
    viteNode: false,
  },
  colorMode: {
    classSuffix: '',
  },
  alias: {
    '@img': fileURLToPath(new URL('./assets/images', import.meta.url)),
  },
  // import global css/less styles
  css: ['@/assets/styles/root.less'],
  vite: {
    css: {
      preprocessorOptions: {
        // global import less variables
        less: {
          additionalData: '@import "@/assets/styles/variables.less";',
        },
      },
    },
    plugins: [
      svgLoader({
        defaultImport: 'url',
      }),
    ],
  },
  // https://github.com/nuxt/framework/issues/6204#issuecomment-1201398080
  hooks: {
    'vite:extendConfig': function (config: any, { isServer }: any) {
      if (isServer) {
        // Workaround for netlify issue
        // https://github.com/nuxt/framework/issues/6204
        config.build.rollupOptions.output.inlineDynamicImports = true;
      }
    },
  },
});

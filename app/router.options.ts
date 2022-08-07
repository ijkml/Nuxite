import type { RouterConfig } from '@nuxt/schema';

export default <RouterConfig>{
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 64,
      };
    } else if (savedPosition) {
      nextTick().then(() => {
        if (window) {
          setTimeout(() => {
            window.scrollTo({
              ...savedPosition,
              behavior: 'smooth',
            });
          }, 0);
        }
      });
    } else {
      return { top: 0 };
    }
  },
};

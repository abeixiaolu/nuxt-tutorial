// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/_colors.scss" as *;',
        },
      },
    },
  },
  css: ["~/assets/css/global.css"],
  app: {
    head: {
      // link: [
      //   {
      //     rel: "stylesheet",
      //     href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
      //   },
      // ],
    },
  },
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/index.scss";',
        },
      },
    },
  },
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxtjs/svg-sprite'],
  googleFonts: {
    families: {
      'Proxima Nova': [400, 600, 700, 800],
    },
  },
  svgSprite: {},
})

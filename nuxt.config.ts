// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: [
    './modules/nuxt-particles/module',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/eslint',
    '@nuxt/ui'
  ],
  nitro: {
    preset: 'static'
  },
  app: {
    baseURL: '/university-lesson-3/',
    head: {
      link: [
        { rel: 'shortcut icon', href: 'icons/favicon.ico' },
        { rel: 'icon', type: 'image/png', href: 'icons/favicon-96x96.png', sizes: '96x96' },
        { rel: 'apple-touch-icon', type: 'image/png', href: 'icons/apple-touch-icon.png', sizes: '180x180' },
        { rel: 'manifest', href: 'site.webmanifest' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: ['~/assets/styles/app.css'],
  imports: {
    dirs: ['globals/**', 'composables/**', 'utils/**']
  },
  i18n: {
    defaultLocale: 'uk',
    locales: [
      {
        code: 'en',
        label: 'English',
        file: 'en/index.ts'
      },
      {
        code: 'uk',
        label: 'Українська',
        file: 'uk/index.ts'
      }
    ]
  },
  pinia: {
    storesDirs: ['./app/stores/**']
  },
  eslint: {
    config: {
      stylistic: false
    }
  },
  colorMode: {
    preference: 'dark'
  },
  particles: {
    mode: 'full',
    lazy: true
  }
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  modules: ['@nuxt/ui', '@nuxt/fonts', '@nuxtjs/supabase'],
  supabase: {
    redirect: false,
  },
  fonts: {
    provider: 'google',
    families: [
      {
        name: 'Inter',
        weights: ['400..700'],
        subsets: [
          'cyrillic-ext',
          'cyrillic',
          'greek-ext',
          'greek',
          'vietnamese',
          'latin-ext',
          'latin',
        ],
      },
    ],
    experimental: {
      addPreloadLinks: true,
    },
  },
  colorMode: {
    preference: 'light',
    fallback: 'system',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode',
  },
})

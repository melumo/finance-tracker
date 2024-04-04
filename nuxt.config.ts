// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  modules: ['@nuxt/ui', '@nuxt/fonts'],
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
})

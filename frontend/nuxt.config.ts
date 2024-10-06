// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  pages: true,
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxt/eslint'
  ],
  tailwindcss: {
    configPath: 'tailwind.config',
  },
  googleFonts: {
    download: true,
    outputDir: 'assets',
    fontsDir: 'fonts',
    stylePath: 'theme/google-fonts.css',
    inject: true,

    families: {
      'Kumbh Sans': [400, 500],
      "Inter": [400, 500, 600, 700]
    }
  }
})
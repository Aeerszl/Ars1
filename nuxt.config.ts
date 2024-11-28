export default defineNuxtConfig({
  components: true,
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt'],

  shadcn: {
    prefix: '',
    componentDir: './components/ui', // Shadcn bileşenlerinin dizini
  },

  compatibilityDate: '2024-11-21',
});
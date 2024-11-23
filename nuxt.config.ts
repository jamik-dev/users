// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: ['@pinia/nuxt', '@nuxt/ui', '@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
		pageTransition: {
			name: 'fade',
			mode: 'out-in'
		},
    layoutTransition: {
      name: 'fade',
      mode: 'out-in'
    }
	},
  runtimeConfig: {
		public: {
			BASE_URL: process.env.BASE_URL ?? process.env.BASE_URL_BACKUP ?? 'https://jsonplaceholder.typicode.com'
		}
	},
  typescript: {
    typeCheck: true
  },
  colorMode: {
    preference: 'light'
  },
  devtools: { enabled: true }
})
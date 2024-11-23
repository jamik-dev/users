// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: ['@pinia/nuxt', '@nuxt/ui', '@nuxtjs/tailwindcss', ],
  runtimeConfig: {
		public: {
			BASE_URL: process.env.BASE_URL ?? process.env.BASE_URL_BACKUP
		}
	},
  devtools: { enabled: true }
})
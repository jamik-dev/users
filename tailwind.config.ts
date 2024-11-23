/** @type {import('tailwindcss').Config} */

export default {
	content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './app.vue', './error.vue'],
	theme: {
		extend: {
			colors: {
				purple: {
					DEFAULT: '#465a95',
					50: '#f3f6fb',
					100: '#e4ebf5',
					200: '#cedeef',
					300: '#adc7e3',
					400: '#86aad4',
					500: '#698fc8',
					600: '#5677ba',
					700: '#4b66aa',
					800: '#465a95',
					900: '#384870',
					950: '#262e45'
				},
				black: {
					DEFAULT: '#222222',
				},
				grey: {
					border: '#EEEEEE',
				},
				brown: {
					DEFAULT: '#6C584C'
				},
			},
			fontFamily: {
				inherit: 'inherit',
				montserrat: ['Montserrat', 'sans-serif']
			}
		}
	},
	plugins: []
};

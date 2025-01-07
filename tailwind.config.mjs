/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#1c4687',
			},
			fontFamily: {
				sans: ['Open Sans', 'system-ui', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [],
}

4
5
6
7
module.exports = {

	plugins: [
		require('flowbite/plugin')
	],

	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],

	theme: {
		extend: {},
		screens: {
			md: { 'max': '768px' }
		}
	},
}

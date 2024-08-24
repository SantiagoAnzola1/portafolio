/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	// darkMode: 'media',
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: 'rgba(var(--primary))',//naranja
				// secondary: {
				//   light: 'rgba(var(--secondary-light))',
				//   dark: 'rgba(var(--secondary-dark))',
				// },
				secondary:'rgba(var(--secondary))',//blanco textos
				'background': 'rgba(var(--background))',//fondo
				'background-contrast': 'rgba(var(--background-contrast))',//fondo
				'dark-2': 'rgba(var(--dark-2))',
				'dark-3': 'rgba(var(--dark-3))',
				'dark-4': 'rgba(var(--dark-4))',
				white: 'rgba(var(--white))',
				'light-2': 'rgba(var(--light-2))',
				'light-3': 'rgba(var(--light-3))',
				'blue-1': 'rgba(var(--blue-1))',
				'blue-2': 'rgba(var(--blue-2))',
				'blue-3': 'rgba(var(--blue-3))',
			  },
			  
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				spaceMono: ['Space Mono', 'monospace'],
			},
			// backgroundColor: {
			// 	'page-light': '',
			// 	'page-dark': '#1E1D1D',
			// },
			// textColor: {
			// 	'text-light': '#000000',
			// 	'text-dark': '#ffffff',
			// },
		},
	},
	plugins: [],
}

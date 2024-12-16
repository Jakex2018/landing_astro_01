/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				"inter": ['Inter', 'sans-serif']
			},
			animation: {
				'fade-in': 'slideInLeft 1s ease-in-out',
				'slide-in-left': 'slideInLeft 1s ease-in-out',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 }
				},
				slideInLeft: {
					'0%': { transform: 'translateX(-10%)', opacity: 0 },
					'100%': { transform: 'translateX(0)', opacity: 1 }
				}

			}
		},
	},
	plugins: [

	],
}



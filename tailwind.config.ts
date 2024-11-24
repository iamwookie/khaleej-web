import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [require('daisyui')],

	daisyui: {
		base: false,
		themes: [
			{
				khaleej: {
					primary: '#003366', // khaleej blue
					'primary-content': '#160016',
					secondary: '#d8c89f', // khaleej tan
					'secondary-content': '#160016',
					accent: '#d8c89f', // khaleej tan
					'accent-content': '#001616',
					neutral: '#191e24', // light gray
					'neutral-content': '#a6adbb',
					'base-100': '#191e24', // light gray
					'base-200': '#15191e', // gray
					'base-300': '#000000', // black
					'base-content': '#ffffff', // white
					info: '#0000ff',
					'info-content': '#c6dbff',
					success: '#00ff00',
					'success-content': '#001600',
					warning: '#00ff00',
					'warning-content': '#001600',
					error: '#ff0000',
					'error-content': '#160000'
				}
			}
		]
	}
} satisfies Config;

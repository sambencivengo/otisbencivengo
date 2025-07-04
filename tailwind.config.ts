// tailwind.config.js
import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				jules: ['var(--font-jules)'],
				cormorant: ['var(--font-cormorant)'],
				'eb-garamond': ['var(--font-eb-garamond)'],
			},
			colors: {
				'wedding-red': 'var(--color-wedding-red)',
			},
		},
	},
	plugins: [],
};
export default config;

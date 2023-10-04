import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			colors: {
				extraLight: '#F5F5F7',
				gray: {
					light: '#D2D2D7',
					dark: '#424245',
					default: '#808080'
				},
				black: '#121212',
				success: '#32936F',
				error: '#F55F56'
			},
			fontSize: {
				desktopHeading1: [
					'4.2rem',
					{
						lineHeight: '120%',
						fontWeight: '600'
					}
				],
				desktopHeading2: [
					'3.13rem',
					{
						lineHeight: '120%',
						fontWeight: '600'
					}
				],
				desktopHeading3: [
					'2.4rem',
					{
						lineHeight: '120%',
						fontWeight: '500'
					}
				],
				desktopSubtitle: [
					'1.13rem',
					{
						lineHeight: '120%',
						fontWeight: '500'
					}
				],
				desktopBody: [
					'1rem',
					{
						lineHeight: '140%'
					}
				],
				desktopButton: [
					'1rem',
					{
						lineHeight: '120%',
						fontWeight: '500'
					}
				],
				desktopLink: [
					'1rem',
					{
						lineHeight: '120%',
						fontWeight: '500'
					}
				],
				desktopOverline: [
					'0.875rem',
					{
						lineHeight: '120%',
						fontWeight: '500'
					}
				],
				desktopCaption: [
					'0.875rem',
					{
						lineHeight: '120%'
					}
				],
				desktopCaptionSmall: [
					'0.75rem',
					{
						lineHeight: '120%',
						fontWeight: '500'
					}
				],
				mobileHeading1: [
					'2.5rem',
					{
						lineHeight: '120%',
						fontWeight: '500'
					}
				],
				mobileHeading2: [
					'2.13rem',
					{
						lineHeight: '120%',
						fontWeight: '500'
					}
				],
				mobileHeading3: [
					'1.6rem',
					{
						lineHeight: '120%'
					}
				],
				mobileSubtitle: [
					'1.13rem',
					{
						lineHeight: '140%',
						fontWeight: '500'
					}
				],
				mobileBody: [
					'1rem',
					{
						lineHeight: '140%'
					}
				],
				mobileButton: [
					'0.875rem',
					{
						lineHeight: '100%',
						fontWeight: '500'
					}
				],
				mobileLink: [
					'0.875rem',
					{
						lineHeight: '120%',
						fontWeight: '500'
					}
				],
				mobileOverline: [
					'0.75rem',
					{
						lineHeight: '120%',
						fontWeight: '500'
					}
				],
				mobileCaption: [
					'0.875rem',
					{
						lineHeight: '120%'
					}
				],
				mobileCaptionSmall: [
					'0.75rem',
					{
						lineHeight: '120%',
						fontWeight: '500'
					}
				]
			}
		}
	},
	plugins: []
};
export default config;

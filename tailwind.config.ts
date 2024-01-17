/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
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
						lineHeight: '120%',
						fontWeight: '500'
					}
				],
				mobileHeading5: [
					'1.12rem',
					{
						lineHeight: '120%',
						fontWeight: '500'
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
			},
			colors: {
				extraLight: '#F5F5F7',
				gray: {
					DEFAULT: '#808080',
					light: '#D2D2D7',
					dark: '#424245'
				},
				black: '#121212',
				success: '#32936F',
				error: '#F55F56'
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require('tailwindcss-animate'), 'prettier-plugin-tailwindcss']
};

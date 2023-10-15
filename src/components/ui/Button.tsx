import React from 'react';
import { cn } from '@/lib/utils';
import { tv, type VariantProps } from 'tailwind-variants';

const button = tv({
	base: 'border-none py-4 px-6 flex gap-2 items-center text-mobileButton md:text-desktopButton uppercase',
	variants: {
		variant: {
			primary: 'bg-black text-white border-none',
			secondary: 'bg-white text-black border border-black',
			tertiary: 'bg-black border-white text-white border'
		}
	},
	compoundVariants: [
		{
			variant: 'primary',
			className:
				'md:hover:bg-gray-dark md:hover:text-white md:active:bg-black md:active:text-white md:disabled:cursor-not-allowed disabled:bg-gray disabled:text-gray-light md:focus-visible:outline-2 md:focus-visible:outline-dotted md:focus-visible:outline-offset-[2px] md:focus-visible:ring-black'
		},
		{
			variant: 'secondary',
			className:
				'md:hover:bg-black md:hover:text-white md:active:bg-white md:active:text-black md:cursor-not-allowed disabled:border-gray-light disabled:text-gray'
		},
		{
			variant: 'tertiary',
			className:
				'md:hover:bg-white md:hover:text-gray-dark md:active:bg-white md:active:text-black md:cursor-not-allowed disabled:bg-black disabled:text-gray-light disabled:border-gray-light'
		}
	],
	defaultVariants: {
		variant: 'primary',
	}
});

type ButtonVariants = VariantProps<typeof button>;

interface ButtonProps extends ButtonVariants {
	children?: React.ReactNode;
	className?: string;
}
const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
	return <button className={cn(button(props), className)}>{children}</button>;
};

export default Button;

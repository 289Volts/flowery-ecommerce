import React from 'react';
import { cn } from '@/lib/utils';
import { tv, type VariantProps } from 'tailwind-variants';

const button = tv({
	base: 'md:focus-visible:outline-2 md:focus-visible:outline-dotted md:focus-visible:outline-offset-[2px] text-mobileButton md:text-desktopButton hover:transition hover:duration-500',
	variants: {
		variant: {
			primary:
				'bg-black text-white border-none border-none py-4 px-6 flex gap-2 items-center uppercase',
			secondary:
				'bg-white text-black border border-black py-4 px-6 flex gap-2 items-center uppercase',
			tertiary:
				'bg-black border-white text-white border py-4 px-6 flex gap-2 items-center uppercase',
			textIcon: 'flex items-center gap-2'
		},
		type: {}
	},
	compoundVariants: [
		{
			variant: 'primary',
			className:
				'lg:hover:bg-gray-dark lg:hover:text-white active:bg-black active:text-white disabled:cursor-not-allowed disabled:bg-gray disabled:text-gray-light'
		},
		{
			variant: 'secondary',
			className:
				'lg:hover:bg-black lg:hover:text-white active:bg-white active:text-black disabled:cursor-not-allowed disabled:border-gray-light disabled:text-gray'
		},
		{
			variant: 'tertiary',
			className:
				'lg:hover:bg-white lg:hover:text-gray-dark active:bg-white active:text-black disabled:cursor-not-allowed disabled:bg-black disabled:text-gray-light disabled:border-gray-light'
		},
		{
			variant: 'textIcon',
			className:
				'lg:hover:border-b lg:hover:border-b-black lg:hover:text-gray active:text-black active:border-b active:border-b-black disabled:cursor-not-allowed disabled:bg-gray-light disabled:text-gray-light capitalize'
		}
	],
	defaultVariants: {
		variant: 'primary'
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

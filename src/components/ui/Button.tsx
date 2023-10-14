import React from 'react';
import { cn } from '@/lib/utils';
import { tv, type VariantProps } from 'tailwind-variants';
import Image from 'next/image';

const button = tv({
	base: 'border-none py-4 px-6 flex gap-2 items-center',
	variants: {
		variant: {
			primary: 'bg-black text-white border-none',
			secondary: 'bg-transparent text-black border border-black',
			tertiary: 'bg-black border-white text-white border'
		},
		size: {
			default: 'h-10 py-2 px-4',
			sm: 'h-9 px-3 rounded-md'
		}
	}
});

type ButtonVariants = VariantProps<typeof button>;

interface ButtonProps extends ButtonVariants {
	children: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({ children }) => {
	return <button>{children}</button>;
};

export default Button;

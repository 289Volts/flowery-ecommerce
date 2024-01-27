import { cn } from "@/utils/cnUtil";
import React, { ComponentPropsWithoutRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
  base: "md:focus-visible:outline-2 md:focus-visible:outline-dotted md:focus-visible:outline-offset-[2px] text-mobileButton md:text-desktopButton hover:transition hover:duration-500",
  variants: {
    variant: {
      primary:
        "bg-primary text-white border-none border-none py-4 px-6 flex gap-2 items-center uppercase",
      secondary:
        "bg-white text-primary border border-black py-4 px-6 flex gap-2 items-center uppercase",
      tertiary:
        "bg-primary border-white text-white border py-4 px-6 flex gap-2 items-center uppercase",
      textIcon: "flex items-center gap-2",
    },
  },
  compoundVariants: [
    {
      variant: "primary",
      className:
        "lg:hover:bg-gray-dark lg:hover:text-white active:bg-primary active:text-white disabled:cursor-not-allowed disabled:bg-gray disabled:text-gray-light",
    },
    {
      variant: "secondary",
      className:
        "lg:hover:bg-primary lg:hover:text-white active:bg-white active:text-primary disabled:cursor-not-allowed disabled:border-gray-light disabled:text-gray",
    },
    {
      variant: "tertiary",
      className:
        "lg:hover:bg-white lg:hover:text-gray-dark active:bg-white active:text-primary disabled:cursor-not-allowed disabled:bg-primary disabled:text-gray-light disabled:border-gray-light",
    },
    {
      variant: "textIcon",
      className:
        "lg:hover:border-b lg:hover:border-b-black lg:hover:text-gray active:text-primary active:border-b active:border-b-black disabled:cursor-not-allowed disabled:bg-gray-light disabled:text-gray-light capitalize",
    },
  ],
});

type ButtonVariants = VariantProps<typeof button>;

interface ButtonProps extends ButtonVariants {
  children?: React.ReactNode;
  className?: string;
  buttonProps?: ComponentPropsWithoutRef<"button">;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  buttonProps,
  ...props
}) => {
  return (
    <button {...buttonProps} className={cn(button(props), className)}>
      {children}
    </button>
  );
};

export default Button;

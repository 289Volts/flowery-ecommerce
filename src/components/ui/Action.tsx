import { cn } from "@/utils/cnUtil";
import Link from "next/link";
import React, { ComponentPropsWithoutRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
  base: "md:focus-visible:outline-2 md:focus-visible:outline-dotted md:focus-visible:outline-offset-[2px] text-mobileButton md:text-desktopButton hover:transition-colors hover:duration-400",
  variants: {
    variant: {
      primary:
        "bg-primary text-white border-none border-none py-4 px-6 flex gap-2 items-center uppercase",
      secondary:
        "bg-white text-primary border border-black py-4 px-6 flex gap-2 items-center uppercase",
      tertiary:
        "bg-transparent border-white text-white border py-4 px-6 flex gap-2 items-center uppercase",
      textIcon: "flex items-center gap-2",
    },
  },
  compoundVariants: [
    {
      variant: "primary",
      className:
        "lg:hover:bg-gray-dark lg:hover:text-white active:bg-primary active:text-white disabled:cursor-not-allowed disabled:bg-gray disabled:text-gray-light justify-center",
    },
    {
      variant: "secondary",
      className:
        "lg:hover:bg-primary lg:hover:text-white active:bg-white active:text-primary disabled:cursor-not-allowed disabled:border-gray-light disabled:text-gray justify-center",
    },
    {
      variant: "tertiary",
      className:
        "lg:hover:bg-white lg:hover:text-gray-dark active:bg-white active:text-primary disabled:cursor-not-allowed disabled:bg-primary disabled:text-gray-light disabled:border-gray-light justify-center",
    },
    {
      variant: "textIcon",
      className:
        "lg:hover:border-b lg:hover:border-b-black lg:hover:text-gray active:text-primary active:border-b active:border-b-black disabled:cursor-not-allowed disabled:bg-gray-light disabled:text-gray-light capitalize",
    },
  ],
});

type LinkProps = ComponentPropsWithoutRef<"a">;
type ButtonVariants = VariantProps<typeof button> & {
  LinkProps?: LinkProps;
  children?: React.ReactNode;
};

interface ButtonProps extends ButtonVariants {
  children?: React.ReactNode;
  className?: string;
  isLink?: boolean;
  href?: string;
  buttonProps?: ComponentPropsWithoutRef<"button">;
}

const Action = ({
  children,
  className,
  buttonProps,
  href,
  LinkProps,

  isLink,
  ...props
}: ButtonProps) => {
  return isLink ? (
    <Link
      {...LinkProps}
      href={(href as string) || "#"}
      className={cn(button(props), className)}
    >
      {children}
    </Link>
  ) : (
    <button {...buttonProps} className={cn(button(props), className)}>
      {children}
    </button>
  );
};

export default Action;

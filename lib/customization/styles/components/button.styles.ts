import { cva } from "class-variance-authority";

const base = cva(
  [
    "rounded-base",
    "disabled:opacity-50",
    "disabled:cursor-not-allowed",
    "transition-opacity",
    "duration-400",
    "ease-in-out",
    "active:brightness-90",
    "font-medium",
  ],
  {
    variants: {
      variant: {
        ghost: [
          "border",
          "bg-transparent",
          "border-transparent",
          "active:opacity-70",
          "text-primary-base",
        ],
        outline: [
          "border",
          "bg-transparent",
          "border-primary-base",
          "active:opacity-70",
          "text-primary-base",
          "focus:outline-2",
          "focus:!outline-base",
          "focus:!outline",
        ],
        solid: [
          "border",
          "bg-primary-base",
          "border-transparent",
          "text-white",
          "focus:outline-2",
          "focus:!outline-base",
          "focus:!outline",
        ],
        link: [
          "border",
          "bg-transparent",
          "border-transparent",
          "underline",
          "active:opacity-70",
          "text-neutral-100",
        ],
        unstyled: [],
      },
      size: {
        xs: ["text-xs", "h-[24px]", "py-1", "px-2"],
        sm: ["text-xs", "h-[32px]", "py-1", "px-2"],
        md: ["text-sm", "h-[44px]", "py-1", "px-[20px]"],
        lg: ["text-base", "h-[48px]", "py-1", "px-[20px]"],
      },
    },

    defaultVariants: {
      size: "md",
      variant: "solid",
    },
  }
);

const container = cva(["flex", "justify-center", "items-center", "gap-2"]);

const spinner = cva(["animate-spin"]);

const buttonStyles = {
  base,
  container,
  spinner,
};

export { buttonStyles };

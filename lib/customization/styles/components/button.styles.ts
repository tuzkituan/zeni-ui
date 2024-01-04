import { cva } from "class-variance-authority";

const base = cva(
  [
    "rounded-md",
    "disabled:opacity-50",
    "disabled:cursor-not-allowed",
    "transition-opacity",
    "duration-400",
    "ease-in-out",
    "active:brightness-90",
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
        xs: ["text-xs", "py-1", "px-2"],
        sm: ["text-sm", "py-1", "px-2"],
        md: ["text-base", "py-1.5", "px-3"],
        lg: ["text-xl", "py-3", "px-6"],
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

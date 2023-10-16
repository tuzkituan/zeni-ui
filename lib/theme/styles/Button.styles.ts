import { cva } from "class-variance-authority";

const base = cva(
  ["t-rounded-md", "disabled:t-opacity-70", "disabled:t-cursor-not-allowed"],
  {
    variants: {
      variant: {
        ghost: [
          "t-border",
          "t-bg-transparent",
          "t-border-transparent",
          "t-text-primary",
          "active:t-opacity-70",
        ],
        outline: [
          "t-border",
          "t-bg-transparent",
          "t-border-accent",
          "t-text-accent",
          "active:t-opacity-70",
        ],
        solid: [
          "t-border",
          "t-bg-accent",
          "t-border-transparent",
          "t-text-inverse-primary",
          "active:t-bg-active",
        ],
        link: [
          "t-border",
          "t-bg-transparent",
          "t-border-transparent",
          "t-text-accent",
          "t-underline",
          "active:t-opacity-70",
        ],
        unstyled: [],
      },
      size: {
        xs: ["t-text-xs", "t-py-1", "t-px-2"],
        sm: ["t-text-sm", "t-py-1", "t-px-2"],
        md: ["t-text-base", "t-py-2", "t-px-4"],
        lg: ["t-text-xl", "t-py-4", "t-px-8"],
      },
    },

    defaultVariants: {
      size: "md",
      variant: "solid",
    },
  }
);

const container = cva([
  "t-flex",
  "t-justify-center",
  "t-items-center",
  "t-gap-2",
]);

const spinner = cva(["t-animate-spin"]);

const buttonStyles = {
  base,
  container,
  spinner,
};

export { buttonStyles };

import { cva } from "class-variance-authority";

const base = cva(
  [
    "zn-rounded-sm",
    "zn-w-fit",
    "zn-border",
    "zn-border-primary-500",
    "zn-font-bold",
    "zn-uppercase",
  ],
  {
    variants: {
      variant: {
        solid: ["zn-bg-primary-500", "zn-text-white"],
        outline: ["zn-bg-transparent", "zn-text-primary-500"],
        subtle: [
          "zn-bg-primary-100",
          "zn-border-transparent",
          "zn-text-primary-500",

          "dark:zn-bg-primary-800",
          "dark:zn-text-primary-300",
        ],
      },
      size: {
        sm: ["zn-px-1.5", "zn-py-0.5", "zn-text-xs"],
        md: ["zn-px-2", "zn-py-0.5", "zn-text-sm"],
        lg: ["zn-px-3", "zn-py-1", "zn-text-base"],
      },
    },
  }
);

const badgeStyles = {
  base,
};

export { badgeStyles };

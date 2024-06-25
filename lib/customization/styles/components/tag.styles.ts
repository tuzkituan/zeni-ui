import { cva } from "class-variance-authority";

const base = cva(
  ["zn-rounded-base", "zn-w-fit", "zn-border", "zn-border-primary-500"],
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
        sm: ["zn-px-1.5", "zn-py-0.5", "zn-text-xs", "zn-font-medium"],
        md: ["zn-px-2", "zn-py-1", "zn-text-sm", "zn-font-medium"],
        lg: ["zn-px-2.5", "zn-py-1", "zn-text-lg", "zn-font-semibold"],
      },
    },
  }
);

const tagStyles = {
  base,
};

export { tagStyles };

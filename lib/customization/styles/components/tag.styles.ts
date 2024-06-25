import { cva } from "class-variance-authority";

const base = cva(
  [
    "zn-rounded-base",
    "zn-w-fit",
    "zn-border",
    "zn-border-primary-500",
    "zn-font-medium",
  ],
  {
    variants: {
      variant: {
        solid: ["zn-bg-primary-500", "zn-text-white"],
        outline: ["zn-bg-transparent", "zn-text-primary-500"],
      },
      size: {
        sm: ["zn-px-1.5", "zn-py-0.5", "zn-text-xs"],
        md: ["zn-px-2", "zn-py-0.5", "zn-text-sm"],
        lg: ["zn-px-3", "zn-py-1", "zn-text-base"],
      },
    },
  }
);

const tagStyles = {
  base,
};

export { tagStyles };

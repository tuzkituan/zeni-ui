import { cva } from "class-variance-authority";

const base = cva(
  [
    "zn-flex",
    "zn-justify-center",
    "zn-items-center",
    "zn-rounded-full",
    "zn-overflow-hidden",
    "zn-uppercase",
    "zn-bg-primary-base",
    "zn-border",
    "zn-border-transparent",
    "zn-bg-clip-padding",
  ],
  {
    variants: {
      size: {
        "2xs": ["zn-w-4", "zn-h-4"],
        xs: ["zn-w-6", "zn-h-6"],
        sm: ["zn-w-8", "zn-h-8"],
        md: ["zn-w-12", "zn-h-12"],
        lg: ["zn-w-16", "zn-h-16"],
        xl: ["zn-w-28", "zn-h-28"],
        "2xl": ["zn-w-36", "zn-h-36"],
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);
const img = cva(["zn-block"], {
  variants: {
    size: {
      "2xs": ["zn-w-3", "zn-h-3"],
      xs: ["zn-w-4", "zn-h-4"],
      sm: ["zn-w-6", "zn-h-6"],
      md: ["zn-w-7", "zn-h-7"],
      lg: ["zn-w-10", "zn-h-10"],
      xl: ["zn-w-16", "zn-h-16"],
      "2xl": ["zn-w-24", "zn-h-24"],
    },
  },
});
const name = cva(["zn-font-medium", "zn-text-white"], {
  variants: {
    size: {
      "2xs": ["zn-text-[6px]"],
      xs: ["zn-text-[10px]"],
      sm: ["zn-text-sm"],
      md: ["zn-text-xl"],
      lg: ["zn-text-2xl"],
      xl: ["zn-text-5xl"],
      "2xl": ["zn-text-6xl"],
    },
  },
});

const avatarStyles = {
  base,
  img,
  name,
};

export { avatarStyles };

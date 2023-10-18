import { cva } from "class-variance-authority";

const base = cva(
  [
    "flex",
    "justify-center",
    "items-center",
    "rounded-full",
    "overflow-hidden",
    "uppercase",
    "bg-positive",
    "border",
    "border-sec-background",
  ],
  {
    variants: {
      size: {
        "2xs": ["w-4", "h-4"],
        xs: ["w-6", "h-6"],
        sm: ["w-8", "h-8"],
        md: ["w-12", "h-12"],
        lg: ["w-16", "h-16"],
        xl: ["w-28", "h-28"],
        "2xl": ["w-36", "h-36"],
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);
const img = cva(["block"], {
  variants: {
    size: {
      "2xs": ["w-3", "h-3"],
      xs: ["w-4", "h-4"],
      sm: ["w-6", "h-6"],
      md: ["w-8", "h-8"],
      lg: ["w-12", "h-12"],
      xl: ["w-20", "h-20"],
      "2xl": ["w-24", "h-24"],
    },
  },
});
const name = cva(["font-medium", "text-white"], {
  variants: {
    size: {
      "2xs": ["text-[6px]"],
      xs: ["text-[10px]"],
      sm: ["text-sm"],
      md: ["text-xl"],
      lg: ["text-2xl"],
      xl: ["text-5xl"],
      "2xl": ["text-6xl"],
    },
  },
});

const avatarStyles = {
  base,
  img,
  name,
};

export { avatarStyles };

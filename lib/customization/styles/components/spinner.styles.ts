import { cva } from "class-variance-authority";

// JUST ICON
const spinner = cva(["animate-spin", "text-primary-base", "!opacity-100"], {
  variants: {
    size: {
      xs: ["w-[8px]", "h-[8px]"],
      sm: ["w-[16px]", "h-[16px]"],
      md: ["w-[24px]", "h-[24px]"],
      lg: ["w-[48px]", "h-[48px]"],
    },
  },
});

// OVERLAY
const container = cva(["relative", "block", "w-full", "h-full"]);
const overlay = cva([
  "absolute",
  "inset-0",
  "w-full",
  "h-full",
  "flex",
  "justify-center",
  "items-center",
  "flex-col",
  "gap-2",
]);
const description = cva(["text-neutral-100", "text-sm"]);
const spinnerStyles = {
  spinner,
  container,
  overlay,
  description,
};

export { spinnerStyles };

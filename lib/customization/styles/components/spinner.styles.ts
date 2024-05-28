import { cva } from "class-variance-authority";

// JUST ICON
const spinner = cva(["zn-animate-spin", "!zn-opacity-100"], {
  variants: {
    size: {
      xs: ["zn-w-[8px]", "zn-h-[8px]"],
      sm: ["zn-w-[16px]", "zn-h-[16px]"],
      md: ["zn-w-[24px]", "zn-h-[24px]"],
      lg: ["zn-w-[48px]", "zn-h-[48px]"],
    },
  },
});

// OVERLAY
const container = cva(["zn-relative", "zn-block", "zn-w-full", "zn-h-full"]);
const overlay = cva([
  "zn-absolute",
  "zn-inset-0",
  "zn-w-full",
  "zn-h-full",
  "zn-flex",
  "zn-justify-center",
  "zn-items-center",
  "zn-flex-col",
  "zn-gap-2",
  "zn-z-[1]",
  "zn-bg-white",
  "dark:zn-bg-black",
  "zn-bg-opacity-80",
  "dark:zn-bg-opacity-80",
]);
const description = cva([
  "zn-text-gray-900",
  "dark:zn-text-gray-200",
  "zn-text-base",
]);
const spinnerStyles = {
  spinner,
  container,
  overlay,
  description,
};

export { spinnerStyles };

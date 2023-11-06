import { cva } from "class-variance-authority";

// JUST ICON
const spinner = cva(["animate-spin", "text-primary", "!opacity-100"], {
  variants: {
    size: {
      xs: ["text-sm"],
      sm: ["text-xl"],
      md: ["text-3xl"],
      lg: ["text-6xl"],
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
const description = cva(["text-primary-text", "text-sm"]);
const spinnerStyles = {
  spinner,
  container,
  overlay,
  description,
};

export { spinnerStyles };

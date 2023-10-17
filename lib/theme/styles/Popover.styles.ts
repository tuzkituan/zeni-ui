import { cva } from "class-variance-authority";

const base = cva([
  "rounded-lg",
  "px-3",
  "py-2",
  "bg-bg-primary",
  "text-primary",
  "text-base",
  "border",
  "border-gray-200",
  "shadow-md",
]);

const popoverStyles = {
  base,
};

export { popoverStyles };

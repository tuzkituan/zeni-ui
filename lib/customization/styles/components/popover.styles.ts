import { cva } from "class-variance-authority";

const base = cva([
  "rounded-lg",
  "px-3",
  "py-2",
  "bg-sec-background",
  "text-primary-text",
  "text-base",
  "border",
  "border-line-primary",
  "shadow-sm",
]);
const arrow = cva([]);
const popoverStyles = {
  base,
  arrow,
};

export { popoverStyles };

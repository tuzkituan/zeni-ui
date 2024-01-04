import { cva } from "class-variance-authority";

const base = cva([
  "rounded-lg",
  "px-3",
  "py-2",
  "bg-sec-background",
  "text-neutral-100",
  "text-base",
  "border",
  "border-base",
  "shadow-sm",
]);
const arrow = cva([]);
const popoverStyles = {
  base,
  arrow,
};

export { popoverStyles };

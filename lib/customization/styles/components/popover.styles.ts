import { cva } from "class-variance-authority";

const base = cva([
  "rounded-base",
  "px-3",
  "py-2",
  "bg-color-component-background",
  "text-neutral-100",
  "text-sm",
  "shadow-base",
]);
const arrow = cva([]);
const popoverStyles = {
  base,
  arrow,
};

export { popoverStyles };

import { cva } from "class-variance-authority";

const base = cva([
  "rounded-lg",
  "p-1",
  "bg-sec-background",
  "text-primary-text",
  "text-base",
  "border",
  "border-line-primary",
  "shadow-sm",
]);
const item = cva([
  "w-full",
  "px-2",
  "py-1.5",
  "rounded",
  "hover:bg-line-primary",
  "cursor-pointer",
]);
const arrow = cva([]);
const menuStyles = {
  base,
  arrow,
  item,
};

export { menuStyles };

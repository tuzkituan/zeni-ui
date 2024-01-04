import { cva } from "class-variance-authority";

const base = cva([
  "rounded-lg",
  "p-1",
  "bg-sec-background",
  "text-neutral-100",
  "text-base",
  "border",
  "border-base",
  "shadow-sm",
]);
const item = cva([
  "w-full",
  "px-2",
  "py-1",
  "rounded",
  "hover:bg-base",
  "cursor-pointer",
]);
const arrow = cva([]);
const menuStyles = {
  base,
  arrow,
  item,
};

export { menuStyles };

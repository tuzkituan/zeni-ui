import { cva } from "class-variance-authority";

const base = cva([
  "rounded-base",
  "p-1",
  "bg-color-component-background",
  "text-neutral-100",
  "shadow-base",
]);
const item = cva([
  "w-full",
  "px-3",
  "py-2",
  "rounded-base",
  "hover:bg-primary-10",
  "cursor-pointer",
  "text-sm",
  "font-medium",
  "flex",
  "gap-2",
]);
const itemIcon = cva([]);
const arrow = cva([]);
const menuStyles = {
  base,
  arrow,
  item,
  itemIcon,
};

export { menuStyles };

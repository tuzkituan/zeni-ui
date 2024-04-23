import { cva } from "class-variance-authority";

const base = cva([
  "zn-rounded-base",
  "zn-bg-color-component-background",
  "zn-text-neutral-100",
  "zn-text-sm",
  "zn-shadow-base",
]);
const arrow = cva([]);
const popoverStyles = {
  base,
  arrow,
};

export { popoverStyles };

import { cva } from "class-variance-authority";

const base = cva([
  "zn-rounded-base",
  "zn-bg-white",
  "dark:zn-bg-gray-900",
  "zn-text-gray-900",
  "dark:zn-text-white",
  "zn-text-base",
  "zn-shadow-base",
]);
const arrow = cva([]);
const popoverStyles = {
  base,
  arrow,
};

export { popoverStyles };

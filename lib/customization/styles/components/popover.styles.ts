import { cva } from "class-variance-authority";

const base = cva([
  "zn-rounded-base",
  "zn-bg-white",
  "zn-text-gray-900",
  "zn-text-base",
  "zn-shadow-base",
]);
const arrow = cva([]);
const popoverStyles = {
  base,
  arrow,
};

export { popoverStyles };

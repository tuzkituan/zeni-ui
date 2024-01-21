import { cva } from "class-variance-authority";

const base = cva([
  "bg-black",
  "text-white",
  "rounded-base",
  "px-3",
  "py-2",
  "text-sm",
  "shadow-base",
]);

const arrow = cva([]);
const tooltipStyles = {
  base,
  arrow,
};

export { tooltipStyles };

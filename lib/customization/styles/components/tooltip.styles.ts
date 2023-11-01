import { cva } from "class-variance-authority";

const base = cva([
  "rounded-lg",
  "px-3",
  "py-2",
  "bg-black",
  "text-white",
  "text-base",
  "shadow-md",
]);

const arrow = cva([]);
const tooltipStyles = {
  base,
  arrow,
};

export { tooltipStyles };

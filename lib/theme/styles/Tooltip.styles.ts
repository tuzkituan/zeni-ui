import { cva } from "class-variance-authority";

const base = cva([
  "rounded-lg",
  "px-3",
  "py-2",
  "bg-black",
  "text-white",
  "text-sm",
  "shadow-md",
]);

const tooltipStyles = {
  base,
};

export { tooltipStyles };

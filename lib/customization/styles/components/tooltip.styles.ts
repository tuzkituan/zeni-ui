import { cva } from "class-variance-authority";

const base = cva([
  "zn-bg-black",
  "zn-text-white",
  "zn-rounded-base",
  "zn-px-2",
  "zn-py-2",
  "zn-text-base",
  "zn-shadow-base",
]);

const arrow = cva([]);
const tooltipStyles = {
  base,
  arrow,
};

export { tooltipStyles };

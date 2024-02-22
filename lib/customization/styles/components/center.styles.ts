import { cva } from "class-variance-authority";

const base = cva([
  "zn-flex",
  "zn-w-full",
  "zn-justify-center",
  "zn-items-center",
]);
const circle = cva([
  "zn-flex",
  "zn-justify-center",
  "zn-items-center",
  "zn-rounded-full",
  "zn-w-fit",
  "zn-h-fit",
]);

const centerStyles = {
  base,
  circle,
};

export { centerStyles };

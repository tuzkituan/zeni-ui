import { cva } from "class-variance-authority";

const base = cva(["zn-w-full", "zn-py-6"]);
const icon = cva(["zn-text-neutral-900", "dark:zn-text-neutral-300"]);
const title = cva([
  "zn-font-semibold",
  "zn-text-sm",
  "zn-block",
  "zn-text-neutral-900",
  "dark:zn-text-neutral-300",
]);
const description = cva([
  "zn-text-neutral-500",
  "dark:zn-text-neutral-500",
  "zn-text-sm",
]);

const emptyStyles = {
  base,
  icon,
  title,
  description,
};

export { emptyStyles };

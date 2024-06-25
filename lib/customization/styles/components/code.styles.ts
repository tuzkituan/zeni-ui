import { cva } from "class-variance-authority";

const base = cva([
  "!zn-font-mono",
  "zn-bg-gray-200",
  "dark:zn-bg-gray-800",
  "zn-w-fit",
  "zn-px-2",
  "zn-py-0.5",
  "zn-text-sm",
]);

const codeStyles = {
  base,
};

export { codeStyles };

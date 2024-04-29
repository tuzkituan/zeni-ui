import { cva } from "class-variance-authority";

const tableBorder = cva([], {
  variants: {
    isBordered: {
      true: ["zn-border", "zn-border-gray-200", "dark:zn-border-gray-800", "zn-border-collapse"],
      false: [],
    },
  },
});

const base = cva(["zn-w-full"]);
const row = cva(["hover:zn-bg-primary-50", "dark:hover:zn-bg-primary-800"]);
const cell = cva(["zn-text-left"], {
  variants: {
    size: {
      sm: ["zn-px-2", "zn-py-1"],
      md: ["zn-px-4", "zn-py-2"],
      lg: ["zn-px-4", "zn-py-4"],
    },
  },
});
const th = cva([
  "zn-uppercase",
  "zn-text-base",
  "zn-font-semibold",
  "zn-text-gray-900",
  "dark:zn-text-gray-500",
]);
const td = cva(["zn-text-base"]);
const tableStyles = {
  base,
  row,
  cell,
  th,
  td,
  tableBorder,
};

export { tableStyles };

import { cva } from "class-variance-authority";

const tableBorder = cva([], {
  variants: {
    isBordered: {
      true: ["border", "border-line-primary", "border-collapse"],
      false: [],
    },
  },
});

const base = cva(["w-full"]);
const row = cva(["hover:bg-gray-100"]);
const cell = cva(["text-left"], {
  variants: {
    size: {
      sm: ["px-2", "py-1"],
      md: ["px-4", "py-2"],
      lg: ["px-4", "py-4"],
    },
  },
});
const th = cva(["uppercase", "text-sm", "font-medium", "text-primary-text"]);
const td = cva([]);
const tableStyles = {
  base,
  row,
  cell,
  th,
  td,
  tableBorder,
};

export { tableStyles };

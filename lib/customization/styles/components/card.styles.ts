import { cva } from "class-variance-authority";

const base = cva([
  "zn-border",
  "zn-border-gray-200",
  "dark:zn-border-gray-700",
  "zn-rounded-base",
]);
const header = cva([
  "zn-py-4",
  "zn-px-4",
  "zn-flex",
  "zn-justify-between",
  "zn-gap-4",
  "zn-items-center",
]);
const titleContainer = cva(["zn-flex", "zn-flex-col"]);
const title = cva(["zn-font-semibold", "zn-text-lg"]);
const description = cva(["zn-text-sm", "zn-text-neutral-500"]);
const extra = cva([]);
const content = cva(["zn-px-4", "zn-pb-4"], {
  variants: {
    hasHeader: {
      true: [],
      false: ["zn-pt-4"],
    },
  },
});

const cardStyles = {
  base,
  header,
  titleContainer,
  title,
  description,
  extra,
  content,
};

export { cardStyles };

import { cva } from "class-variance-authority";

const base = cva([
  "zn-rounded-base",
  "zn-p-1",
  "zn-bg-color-component-background",
  "zn-text-neutral-100",
  "zn-shadow-base",
]);
const item = cva([
  "zn-w-full",
  "zn-px-3",
  "zn-py-2",
  "zn-rounded-base",
  "zn-text-sm",
  "zn-font-medium",
  "zn-flex",
  "zn-items-center",
  "zn-gap-2",
], {
  variants: {
    isDisabled: {
      true: ["!zn-cursor-not-allowed", "zn-text-neutral-40"],
      false: ["hover:zn-bg-primary-10", "zn-cursor-pointer"],
    },
  },
});
const itemIcon = cva([
  "zn-flex",
  "zn-items-center",
  "zn-justify-center"
]);
const arrow = cva([]);
const menuStyles = {
  base,
  arrow,
  item,
  itemIcon,
};

export { menuStyles };

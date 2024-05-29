import { cva } from "class-variance-authority";

const base = cva([
  "zn-rounded-base",
  "zn-p-1",
  "zn-bg-component-light",
  "dark:zn-bg-component-dark",
  "zn-text-gray-900",
  "dark:zn-text-white",
  "zn-shadow-base",
]);
const item = cva(
  [
    "zn-w-full",
    "zn-px-3",
    "zn-py-2",
    "zn-rounded-base",
    "zn-text-base",
    "zn-font-medium",
    "zn-flex",
    "zn-items-center",
    "zn-gap-2",
  ],
  {
    variants: {
      isDisabled: {
        true: [
          "!zn-cursor-not-allowed",
          "zn-text-gray-400",
          "dark:zn-text-gray-500",
        ],
        false: [
          "hover:zn-bg-primary-50",
          "dark:hover:zn-bg-primary-800",
          "zn-cursor-pointer",
        ],
      },
    },
  }
);
const itemIcon = cva(["zn-flex", "zn-items-center", "zn-justify-center"]);
const arrow = cva([]);
const menuStyles = {
  base,
  arrow,
  item,
  itemIcon,
};

export { menuStyles };

import { cva } from "class-variance-authority";

const container = cva(["zn-block"]);
const nav = cva(
  ["zn-flex", "zn-justify-between", "zn-gap-4", "zn-items-center"],
  {
    variants: {
      variant: {
        underline: [
          "zn-border-b",
          "zn-border-b-gray-200",
          "dark:zn-border-b-gray-800",
        ],
        solid: [],
        outline: [],
      },
    },
  }
);
const extra = cva([]);
const ul = cva(["zn-flex", "zn-w-full", "zn-list-none", "zn-p-0", "zn-m-0"], {
  variants: {
    variant: {
      underline: ["zn-gap-8"],
      solid: ["zn-gap-3"],
      outline: ["zn-gap-3"],
    },
  },
});
const li = cva(
  [
    "zn-flex",
    "zn-items-center",
    "zn-justify-start",
    "zn-gap-3",
    "zn-rounded-base",
    "zn-py-2",
    "zn-relative",
    "zn-cursor-pointer",
    "zn-text-base",
  ],
  {
    variants: {
      variant: {
        underline: [],
        solid: ["zn-px-6", "zn-border", "zn-border-transparent"],
        outline: ["zn-px-6", "zn-border", "zn-border-transparent"],
      },
      isSelected: {
        true: [],
        false: [],
      },
      isFitted: {
        true: ["zn-w-full", "zn-justify-center"],
        false: [],
      },
      isDisabled: {
        true: ["!zn-cursor-not-allowed", "!zn-text-gray-400"],
        false: [],
      },
    },
    compoundVariants: [
      {
        variant: "underline",
        isSelected: true,
        class: "zn-text-primary-500",
      },
      {
        variant: "solid",
        isSelected: true,
        class: ["zn-bg-primary-500", "zn-text-white"],
      },
      {
        variant: "outline",
        isSelected: true,
        class: [
          "!zn-border-primary-500",
          "dark:!zn-border-primary-700",
          "zn-text-primary-500",
        ],
      },
    ],
  }
);
const indicator = cva([
  "zn-absolute",
  "zn-bottom-[-1px]",
  "zn-left-0",
  "zn-right-0",
  "zn-w-full",
  "zn-h-[1px]",
  "zn-bg-primary-500",
]);
const content = cva(["zn-block", "zn-py-4"]);
const tabsStyles = {
  container,
  nav,
  ul,
  li,
  extra,
  indicator,
  content,
};

export { tabsStyles };

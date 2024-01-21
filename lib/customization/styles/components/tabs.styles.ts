import { cva } from "class-variance-authority";

const container = cva(["block"]);
const nav = cva(["block"], {
  variants: {
    variant: {
      underline: ["border-b", "border-b-base"],
      solid: [],
      outline: [],
    },
  },
});
const ul = cva(["flex", "w-full", "list-none", "p-0", "m-0"], {
  variants: {
    variant: {
      underline: ["gap-8"],
      solid: ["gap-3"],
      outline: ["gap-3"],
    },
  },
});
const li = cva(
  [
    "flex",
    "items-center",
    "justify-start",
    "gap-3",
    "rounded-base",
    "py-2",
    "relative",
    "cursor-pointer",
    "text-sm",
  ],
  {
    variants: {
      variant: {
        underline: [],
        solid: ["px-6", "border", "border-transparent"],
        outline: ["px-6", "border", "border-transparent"],
      },
      isSelected: {
        true: [],
        false: [],
      },
      isFitted: {
        true: ["w-full", "justify-center"],
        false: [],
      },
      isDisabled: {
        true: ["!cursor-not-allowed", "!text-gray-400"],
        false: [],
      },
    },
    compoundVariants: [
      {
        variant: "underline",
        isSelected: true,
        class: "text-primary-base",
      },
      {
        variant: "solid",
        isSelected: true,
        class: ["bg-primary-base", "text-white"],
      },
      {
        variant: "outline",
        isSelected: true,
        class: ["border-primary-base", "text-primary-base"],
      },
    ],
  }
);
const indicator = cva([
  "absolute",
  "bottom-[-1px]",
  "left-0",
  "right-0",
  "w-full",
  "h-[1.5px]",
  "bg-primary-base",
]);
const content = cva(["block", "py-4"]);
const tabsStyles = {
  container,
  nav,
  ul,
  li,
  indicator,
  content,
};

export { tabsStyles };

import { cva } from "class-variance-authority";

const container = cva(["block"]);
const nav = cva(["block"], {
  variants: {
    variant: {
      underline: ["border-b", "border-b-line-primary"],
      solid: [],
      outline: [],
    },
  },
});
const ul = cva(["flex", "w-full", "list-none", "p-0", "m-0", "gap-3"], {
  variants: {
    variant: {
      underline: [],
      solid: [],
      outline: [],
    },
  },
});
const li = cva(
  [
    "flex",
    "items-center",
    "justify-start",
    "gap-3",
    "rounded-lg",
    "py-2",
    "relative",
    "cursor-pointer",
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
    },
    compoundVariants: [
      {
        variant: "underline",
        isSelected: true,
        class: "text-primary",
      },
      {
        variant: "solid",
        isSelected: true,
        class: ["bg-primary", "text-white"],
      },
      {
        variant: "outline",
        isSelected: true,
        class: ["border-primary", "text-primary"],
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
  "bg-primary",
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

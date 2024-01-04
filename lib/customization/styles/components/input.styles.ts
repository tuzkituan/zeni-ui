import { cva } from "class-variance-authority";

const container = cva(
  [
    "rounded-md",
    "text-neutral-100",
    "w-fit",
    "outline",
    "outline-1",
    "outline-transparent",
    "w-full",
  ],
  {
    variants: {
      size: {
        xs: ["h-6"],
        sm: ["h-8"],
        md: ["h-10"],
        lg: ["h-12"],
      },
      variant: {
        outline: [
          "border",
          "border-base",

          "hover:!border-primary-base",

          "focus-within:!border-primary-base",
          "focus-within:!outline-primary-base",
        ],
        filled: [
          "bg-base",

          "border",
          "border-base",

          "hover:!border-primary-base",

          "focus-within:!border-primary-base",
          "focus-within:!outline-primary-base",
          "focus-within:!bg-sec-background",
        ],
        flushed: [
          "!rounded-none",

          "border-b",
          "border-b-base",

          "hover:shadow-[0_1px_0_0_var(--color-primary)]",
          "focus-within:!shadow-[0_1px_0_0_var(--color-primary)]",
          "focus-within:!border-b-primary-base",

          "!px-0",
        ],
        unstyled: ["!border-none", "!bg-none", "!outline-none", "!px-0"],
      },
      addonRight: {
        true: ["!pl-3"],
        false: [],
      },
      addonLeft: {
        true: ["!pr-3"],
        false: [],
      },
      isDisabled: {
        true: ["!bg-base"],
        false: [],
      },
    },
    compoundVariants: [
      {
        addonLeft: true,
        addonRight: true,
        class: "!px-0",
      },
    ],
  }
);

const input = cva(
  ["rounded-md", "w-full", "h-full", "!bg-transparent", "outline-none"],
  {
    variants: {
      size: {
        xs: ["px-3", "text-xs"],
        sm: ["px-3", "text-sm"],
        md: ["px-3", "text-base"],
        lg: ["px-3", "text-lg"],
      },
      variant: {
        outline: [],
        filled: [],
        flushed: ["!px-0"],
        unstyled: ["!px-0"],
      },
      isInGroup: {
        true: ["!px-0"],
        false: [],
      },
    },
  }
);

const group = cva(["flex", "items-center"]);
const leftElement = cva(["flex", "items-center", "justify-center", "px-2"]);
const rightElement = cva(["flex", "items-center", "justify-center", "px-2"]);
const inputStyles = {
  container,
  input,
  group,
  leftElement,
  rightElement,
};

export { inputStyles };

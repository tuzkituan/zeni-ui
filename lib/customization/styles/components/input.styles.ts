import { cva } from "class-variance-authority";

const container = cva(
  [
    "rounded-base",
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
          "focus-within:!outline-primary-20",
          "focus-within:!outline-2",

          "focus-within:!ring-2",
          "focus-within:!ring-primary-20",
        ],
        filled: [
          "bg-primary-10",

          "border",
          "border-primary-10",

          "hover:!border-primary-base",

          "focus-within:!border-primary-base",
          "focus-within:!outline-primary-20",
          "focus-within:!outline-2",

          "focus-within:!ring-2",
          "focus-within:!ring-primary-20",
        ],
        flushed: [
          "!rounded-none",

          "border-b",
          "border-b-primary-base",

          "hover:shadow-[0_1px_0_0_var(--color-primary)]",
          "focus-within:!shadow-[0_1px_0_0_var(--color-primary)]",
          "focus-within:!border-b-primary-base",

          "!px-0",
        ],
      },
      addonRight: {
        true: ["!pl-4"],
        false: [],
      },
      addonLeft: {
        true: ["!pr-4"],
        false: [],
      },
      isDisabled: {
        true: ["!bg-neutral-10", "cursor-not-allowed"],
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
  [
    "rounded-md",
    "w-full",
    "h-full",
    "!bg-transparent",
    "outline-none",
    "placeholder:text-neutral-40",
  ],
  {
    variants: {
      size: {
        xs: ["px-4", "text-xs"],
        sm: ["px-4", "text-sm"],
        md: ["px-4", "text-base"],
        lg: ["px-4", "text-lg"],
      },
      variant: {
        outline: [],
        filled: [],
        flushed: ["!px-0"],
      },
      isInGroup: {
        true: ["!px-0"],
        false: [],
      },
      isDisabled: {
        true: ["cursor-not-allowed"],
        false: [],
      },
    },
  }
);

const group = cva(["flex", "items-center"]);
const leftElement = cva(["flex", "items-center", "justify-center", "px-4"]);
const rightElement = cva(["flex", "items-center", "justify-center", "px-4"]);
const inputStyles = {
  container,
  input,
  group,
  leftElement,
  rightElement,
};

export { inputStyles };

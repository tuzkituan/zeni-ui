import { cva } from "class-variance-authority";

const container = cva(
  [
    "zn-rounded-base",
    "zn-text-gray-900",
    "zn-w-fit",
    "zn-outline",
    "zn-outline-1",
    "zn-outline-transparent",
    "zn-w-full",
  ],
  {
    variants: {
      size: {
        xs: ["zn-h-6"],
        sm: ["zn-h-8"],
        md: ["zn-h-10"],
        lg: ["zn-h-12"],
      },
      variant: {
        outline: [
          "zn-border",
          "zn-border-base",

          "hover:!zn-border-primary-500",

          "focus-within:!zn-border-primary-500",
          "focus-within:!zn-outline-primary-100",
          "focus-within:!zn-outline-2",

          "focus-within:!zn-ring-2",
          "focus-within:!zn-ring-primary-100",
        ],
        filled: [
          "zn-bg-primary-50",

          "zn-border",
          "zn-border-primary-50",

          "hover:!zn-border-primary-500",

          "focus-within:!zn-border-primary-500",
          "focus-within:!zn-outline-primary-100",
          "focus-within:!zn-outline-2",
          "focus-within:!zn-bg-transparent",

          "focus-within:!zn-ring-2",
          "focus-within:!zn-ring-primary-100",
        ],
        flushed: [
          "!zn-rounded-none",

          "zn-border-b",
          "zn-border-b-primary-500",

          "hover:zn-shadow-[0_1px_0_0_var(--color-primary)]",
          "focus-within:!zn-shadow-[0_1px_0_0_var(--color-primary)]",
          "focus-within:!zn-border-b-primary-500",

          "!zn-px-0",
        ],
      },
      addonRight: {
        true: ["!zn-pl-4"],
        false: [],
      },
      addonLeft: {
        true: ["!zn-pr-4"],
        false: [],
      },
      isDisabled: {
        true: ["!zn-bg-gray-100", "zn-cursor-not-allowed"],
        false: [],
      },
    },
    compoundVariants: [
      {
        addonLeft: true,
        addonRight: true,
        class: "!zn-px-0",
      },
    ],
  }
);

const input = cva(
  [
    "zn-rounded-md",
    "zn-w-full",
    "zn-h-full",
    "!zn-bg-transparent",
    "zn-outline-none",
    "placeholder:zn-text-gray-400",
  ],
  {
    variants: {
      size: {
        xs: ["zn-px-4", "zn-text-xs"],
        sm: ["zn-px-4", "zn-text-sm"],
        md: ["zn-px-4", "zn-text-sm"],
        lg: ["zn-px-4", "zn-text-base"],
      },
      variant: {
        outline: [],
        filled: [],
        flushed: ["!zn-px-0"],
      },
      isInGroup: {
        true: ["!zn-px-0"],
        false: [],
      },
      isDisabled: {
        true: ["zn-cursor-not-allowed"],
        false: [],
      },
    },
  }
);

const group = cva(["zn-flex", "zn-items-center"]);
const leftElement = cva([
  "zn-flex",
  "zn-items-center",
  "zn-justify-center",
  "zn-px-4",
]);
const rightElement = cva([
  "zn-flex",
  "zn-items-center",
  "zn-justify-center",
  "zn-px-4",
]);
const inputStyles = {
  container,
  input,
  group,
  leftElement,
  rightElement,
};

export { inputStyles };

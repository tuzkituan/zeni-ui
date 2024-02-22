import { cva } from "class-variance-authority";

const container = cva(
  [
    "zn-rounded-base",
    "zn-text-neutral-100",
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

          "hover:!zn-border-primary-base",

          "focus-within:!zn-border-primary-base",
          "focus-within:!zn-outline-primary-20",
          "focus-within:!zn-outline-2",
        ],
        filled: [
          "zn-bg-primary-10",

          "zn-border",
          "zn-border-primary-10",

          "hover:!zn-border-primary-base",

          "focus-within:!zn-border-primary-base",
          "focus-within:!zn-outline-primary-20",
          "focus-within:!zn-outline-2",
          "focus-within:!zn-bg-transparent",
        ],
        flushed: [
          "!zn-rounded-none",

          "zn-border-b",
          "zn-border-b-primary-base",

          "hover:zn-shadow-[0_1px_0_0_var(--color-primary)]",
          "focus-within:!zn-shadow-[0_1px_0_0_var(--color-primary)]",
          "focus-within:!zn-border-b-primary-base",

          "!zn-px-0",
        ],
      },
      isDisabled: {
        true: ["!zn-bg-neutral-10", "zn-cursor-not-allowed"],
        false: [],
      },
    },
  }
);

const input = cva(
  [
    "zn-rounded-md",
    "zn-w-full",
    "zn-h-full",
    "!zn-bg-transparent",
    "zn-outline-none",
    "zn-cursor-pointer",
    "zn-caret-transparent",
    "placeholder:zn-text-neutral-40",
  ],
  {
    variants: {
      size: {
        xs: ["zn-text-xs"],
        sm: ["zn-text-sm"],
        md: ["zn-text-sm"],
        lg: ["zn-text-base"],
      },
      variant: {
        outline: [],
        filled: [],
        flushed: ["!zn-px-0"],
        unstyled: ["!zn-px-0"],
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
  "zn-text-gray-500",
]);
const clearElement = cva([
  "zn-flex",
  "zn-items-center",
  "zn-justify-center",
  "zn-my-3",
  "zn-mx-3",
  "[&>div]:zn-p-1",
  "[&>div]:hover:zn-bg-gray-100",
  "[&>div]:hover:zn-cursor-pointer",
  "[&>div]:hover:zn-rounded-lg",
]);
const dropdown = cva([
  "zn-rounded-lg",
  "zn-bg-sec-background",
  "zn-text-neutral-100",
  "zn-text-base",
  "zn-shadow-base",
  "zn-overflow-hidden",
  "zn-w-[270px]",
]);
const iconColor = cva(["zn-text-gray-500"]);

const datePickerStyles = {
  container,
  input,
  group,
  dropdown,
  leftElement,
  clearElement,
  iconColor,
};

export { datePickerStyles };

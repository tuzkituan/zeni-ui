import { cva } from "class-variance-authority";

const container = cva(
  [
    "zn-rounded-base",
    "zn-text-gray-900",
    "dark:zn-text-white",
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
          "zn-border-gray-200",

          "hover:!zn-border-primary-500",

          "focus-within:!zn-border-primary-500",
          "focus-within:!zn-outline-primary-100",
          "focus-within:!zn-outline-2",

          "dark:zn-border-gray-700",
          "dark:focus-within:!zn-outline-primary-700",
          "dark:focus-within:!zn-ring-primary-700",
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

          "dark:zn-bg-primary-800",
          "dark:zn-border-primary-700",
          "dark:focus-within:!zn-outline-primary-700",
          "dark:focus-within:!zn-ring-primary-700",
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
      isDisabled: {
        true: [
          "!zn-bg-gray-100",
          "dark:!zn-bg-gray-800",
          "zn-cursor-not-allowed",
        ],
        false: [],
      },
    },
  }
);

const input = cva(
  [
    "zn-rounded-base",
    "zn-w-full",
    "zn-h-full",
    "!zn-bg-transparent",
    "zn-outline-none",
    "zn-cursor-pointer",
    "zn-caret-transparent",
    "placeholder:zn-text-gray-400",
    "dark:placeholder:zn-text-gray-500",
  ],
  {
    variants: {
      size: {
        xs: ["zn-text-xs"],
        sm: ["zn-text-sm"],
        md: ["zn-text-base"],
        lg: ["zn-text-lg"],
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
  "dark:zn-text-gray-500",
]);
const clearElement = cva([
  "zn-flex",
  "zn-items-center",
  "zn-justify-center",
  "zn-my-3",
  "zn-mx-3",
  "[&>div]:zn-p-1",
  "[&>div]:hover:zn-bg-gray-100",
  "dark:[&>div]:hover:zn-bg-gray-800",
  "[&>div]:hover:zn-cursor-pointer",
  "[&>div]:hover:zn-rounded-base",
]);
const dropdown = cva([
  "zn-rounded-base",
  "zn-bg-white",
  "dark:zn-bg-component",
  "zn-text-gray-900",
  "dark:zn-text-white",
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

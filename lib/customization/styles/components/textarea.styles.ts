import { cva } from "class-variance-authority";

const base = cva(
  [
    "zn-block",
    "zn-rounded-base",
    "zn-text-gray-900",
    "dark:zn-text-white",
    "zn-w-fit",
    "zn-outline",
    "zn-outline-1",
    "zn-outline-transparent",
    "zn-w-full",
    "zn-px-4",
    "zn-py-3",
    "zn-text-base",
    "zn-bg-transparent",
  ],
  {
    variants: {
      variant: {
        outline: [
          "zn-border",
          "zn-border-gray-200",

          "hover:!zn-border-primary-500",

          "focus-within:!zn-border-primary-500",
          "focus-within:!zn-outline-primary-100",
          "focus-within:!zn-outline-2",

          "focus-within:!zn-ring-2",
          "focus-within:!zn-ring-primary-100",

          "dark:zn-border-gray-800",
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

          "focus-within:!zn-ring-2",
          "focus-within:!zn-ring-primary-100",

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
      isResizable: {
        true: ["zn-resize-y"],
        false: ["zn-resize-none"],
      },
    },
  }
);

const textareaStyles = {
  base,
};

export { textareaStyles };

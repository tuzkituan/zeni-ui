import { cva } from "class-variance-authority";

const base = cva(
  [
    "zn-block",
    "zn-rounded-base",
    "zn-text-gray-900",
    "zn-w-fit",
    "zn-outline",
    "zn-outline-1",
    "zn-outline-transparent",
    "zn-w-full",
    "zn-px-4",
    "zn-py-3",
    "zn-text-sm",
  ],
  {
    variants: {
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
      isDisabled: {
        true: ["!zn-bg-gray-100", "zn-cursor-not-allowed"],
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

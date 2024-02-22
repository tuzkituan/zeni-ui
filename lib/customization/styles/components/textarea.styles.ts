import { cva } from "class-variance-authority";

const base = cva(
  [
    "zn-block",
    "zn-rounded-base",
    "zn-text-neutral-100",
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

          "hover:!zn-border-primary-base",

          "focus-within:!zn-border-primary-base",
          "focus-within:!zn-outline-primary-20",
          "focus-within:!zn-outline-2",

          "focus-within:!zn-ring-2",
          "focus-within:!zn-ring-primary-20",
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

          "focus-within:!zn-ring-2",
          "focus-within:!zn-ring-primary-20",
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

import { cva } from "class-variance-authority";

const base = cva(
  [
    "block",
    "rounded-base",
    "text-neutral-100",
    "w-fit",
    "outline",
    "outline-1",
    "outline-transparent",
    "w-full",
    "px-4",
    "py-3",
    "text-sm",
  ],
  {
    variants: {
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
          "focus-within:!bg-transparent",

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
      isDisabled: {
        true: ["!bg-neutral-10", "cursor-not-allowed"],
        false: [],
      },
      isResizable: {
        true: ["resize-y"],
        false: ["resize-none"],
      },
    },
  }
);

const textareaStyles = {
  base,
};

export { textareaStyles };

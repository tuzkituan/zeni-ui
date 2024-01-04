import { cva } from "class-variance-authority";

const base = cva(
  [
    "block",
    "rounded-md",
    "text-neutral-100",
    "w-fit",
    "outline",
    "outline-1",
    "outline-transparent",
    "w-full",
    "p-2",
  ],
  {
    variants: {
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
      isDisabled: {
        true: ["!bg-base"],
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

import { cva } from "class-variance-authority";

const base = cva(
  [
    "block",
    "rounded-md",
    "text-primary-text",
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
          "border-line-primary",

          "hover:!border-primary",

          "focus-within:!border-primary",
          "focus-within:!outline-primary",
        ],
        filled: [
          "bg-line-primary",

          "border",
          "border-line-primary",

          "hover:!border-primary",

          "focus-within:!border-primary",
          "focus-within:!outline-primary",
          "focus-within:!bg-sec-background",
        ],
        flushed: [
          "!rounded-none",

          "border-b",
          "border-b-line-primary",

          "hover:shadow-[0_1px_0_0_var(--color-primary)]",
          "focus-within:!shadow-[0_1px_0_0_var(--color-primary)]",
          "focus-within:!border-b-primary",

          "!px-0",
        ],
        unstyled: ["!border-none", "!bg-none", "!outline-none", "!px-0"],
      },
      isDisabled: {
        true: ["!bg-line-primary"],
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

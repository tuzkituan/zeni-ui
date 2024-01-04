import { cva } from "class-variance-authority";

const container = cva(
  [
    "rounded-md",
    "text-neutral-100",
    "w-full ",
    "h-full",
    "outline",
    "outline-1",
    "outline-transparent",
    "flex",
    "justify-between",
    "items-center",
    "overflow-hidden",
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
    },
  }
);

const input = cva(
  ["rounded-md", "w-full", "h-full", "!bg-transparent", "outline-none"],
  {
    variants: {
      size: {
        xs: ["px-2", "text-xs"],
        sm: ["px-2", "text-sm"],
        md: ["px-3", "text-base"],
        lg: ["px-3", "text-lg"],
      },
      variant: {
        outline: [],
        filled: [],
        flushed: ["!px-0"],
        unstyled: ["!px-0"],
      },
      isInGroup: {
        true: ["!px-0"],
        false: [],
      },
    },
  }
);

const arrowContainer = cva([
  "flex",
  "flex-col",
  "border-l",
  "border-l-base",
  "justify-stretch",
  "h-full",
]);

const arrow = cva([
  "flex",
  "justify-center",
  "items-center",
  "px-1.5",
  "leading-none",
  "hover:bg-base",
  "text-xs",
  "grow",
]);

const arrowDivider = cva(["text-base", "w-full"]);

const numberInputStyles = {
  container,
  input,
  arrowContainer,
  arrow,
  arrowDivider,
};

export { numberInputStyles };

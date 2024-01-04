import { cva } from "class-variance-authority";

const container = cva(
  [
    "rounded-md",
    "text-neutral-100",
    "w-fit",
    "outline",
    "outline-1",
    "outline-transparent",
    "w-full",
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
  [
    "rounded-md",
    "w-full",
    "h-full",
    "!bg-transparent",
    "outline-none",
    "cursor-pointer",
    "caret-transparent",
  ],
  {
    variants: {
      size: {
        xs: ["px-3", "text-xs"],
        sm: ["px-3", "text-sm"],
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

const group = cva(["flex", "items-center"]);
const rightElement = cva([
  "flex",
  "items-center",
  "justify-center",
  "px-2",
  "text-gray-500",
]);
const clearElement = cva([
  "flex",
  "items-center",
  "justify-center",
  "p-1.5",
  "hover:cursor-pointer",
  "hover:bg-gray-100",
  "hover:rounded-lg",
]);
const dropdown = cva([
  "rounded-lg",
  "bg-sec-background",
  "text-neutral-100",
  "text-base",
  "border",
  "border-base",
  "shadow-sm",
  "overflow-hidden",
  "w-[270px]",
]);
const iconColor = cva(["text-gray-500"]);

const datePickerStyles = {
  container,
  input,
  group,
  dropdown,
  rightElement,
  clearElement,
  iconColor,
};

export { datePickerStyles };

import { cva } from "class-variance-authority";

const container = cva(
  [
    "rounded-base",
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
          "focus-within:!outline-primary-20",
          "focus-within:!outline-2",
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
    "placeholder:text-neutral-40",
  ],
  {
    variants: {
      size: {
        xs: ["text-xs"],
        sm: ["text-sm"],
        md: ["text-sm"],
        lg: ["text-base"],
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
      isDisabled: {
        true: ["cursor-not-allowed"],
        false: [],
      },
    },
  }
);

const group = cva(["flex", "items-center"]);
const leftElement = cva([
  "flex",
  "items-center",
  "justify-center",
  "px-4",
  "text-gray-500",
]);
const clearElement = cva([
  "flex",
  "items-center",
  "justify-center",
  "my-3",
  "mx-3",
  "[&>div]:p-1",
  "[&>div]:hover:bg-gray-100",
  "[&>div]:hover:cursor-pointer",
  "[&>div]:hover:rounded-lg",
]);
const dropdown = cva([
  "rounded-lg",
  "bg-sec-background",
  "text-neutral-100",
  "text-base",
  "shadow-base",
  "overflow-hidden",
  "w-[270px]",
]);
const iconColor = cva(["text-gray-500"]);

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

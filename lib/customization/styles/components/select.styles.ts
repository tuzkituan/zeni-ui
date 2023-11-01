import { cva } from "class-variance-authority";

const container = cva(
  [
    "rounded-md",
    "text-primary-text",
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
    },
  }
);
const secContainer = cva(["w-full", "flex", "items-center"], {
  variants: {
    addonRight: {
      true: ["!pl-3", "!pr-1"],
      false: [],
    },
    addonLeft: {
      true: ["!pr-3"],
      false: [],
    },
  },
  compoundVariants: [
    {
      addonLeft: true,
      addonRight: true,
      class: "!px-0",
    },
  ],
});
const input = cva(
  [
    "rounded-md",
    "w-full",
    "h-full",
    "!bg-transparent",
    "outline-none",
    "flex",
    "items-center",
    "cursor-pointer",
    "truncate",
    "inline-block",
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

    defaultVariants: {
      size: "md",
      variant: "outline",
    },
  }
);
const dropdown = cva([
  "max-h-[300px]",
  "overflow-y-auto",
  "rounded-lg",
  "px-1",
  "py-1",
  "bg-sec-background",
  "text-primary-text",
  "text-base",
  "border",
  "border-line-primary",
  "shadow-sm",
  "overflow-x-hidden",
]);
const option = cva(
  [
    "w-full",
    "px-2",
    "py-1.5",
    "my-0.5",
    "rounded-md",
    "hover:bg-gray-100",
    "cursor-pointer",
  ],
  {
    variants: {
      isSelected: {
        true: ["font-medium", "bg-line-primary"],
        false: [],
      },
    },
  }
);
const group = cva(["flex", "items-center"]);
const placeholder = cva(["text-opacity-40", "text-black"]);
const leftElement = cva([
  "flex",
  "items-center",
  "justify-center",
  "cursor-pointer",
  "p-1.5",
]);
const rightElement = cva([
  "flex",
  "items-center",
  "justify-center",
  "cursor-pointer",
  "p-1.5",
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
const selectStyles = {
  container,
  secContainer,
  input,
  dropdown,
  option,
  group,
  placeholder,
  leftElement,
  rightElement,
  clearElement,
};

export { selectStyles };

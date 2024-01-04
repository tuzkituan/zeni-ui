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
        xs: ["min-h-6"],
        sm: ["min-h-8"],
        md: ["min-h-10"],
        lg: ["min-h-12"],
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
    },
  }
);
const secContainer = cva(
  ["w-full", "min-h-inherit", "h-full", "flex", "items-center"],
  {
    variants: {
      addonRight: {
        true: ["pl-3", "pr-1"],
        false: [],
      },
      addonLeft: {
        true: ["pr-3"],
        false: [],
      },
      isSearchable: {
        true: ["cursor-text"],
        false: ["cursor-pointer"],
      },
      isMultiple: {
        true: ["!pl-2"],
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
  }
);
const inputGroup = cva(
  [
    "w-full",
    "min-h-inherit",
    "h-full",
    "!bg-transparent",
    "outline-none",
    "flex",
    "items-center",
    // "cursor-pointer",
    "truncate",
    "relative",
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

const input = cva(
  [
    "outline-none",
    "border-none",
    "p-0",
    "m-0",
    "min-w-[2px]",
    "min-h-inherit",
    "h-full",
    "appearance-none",
    "cursor-inherit",
  ],
  {
    variants: {
      isMultiple: {
        true: ["ml-0.5"],
        false: ["absolute", "top-0", "bottom-0"],
      },
    },
  }
);

const dropdown = cva([
  "overflow-y-auto",
  "rounded-lg",
  "px-1",
  "py-0.5",
  "bg-sec-background",
  "text-neutral-100",
  "text-base",
  "border",
  "border-base",
  "shadow-sm",
  "overflow-x-hidden",
  "w-[270px]",
]);
const option = cva(
  [
    "w-full",
    "flex",
    "items-center",
    "justify-between",
    "gap-4",
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
        true: ["font-medium", "bg-base"],
        false: [],
      },
      isDisabled: {
        true: ["cursor-not-allowed", "text-gray-400"],
        false: [],
      },
    },
  }
);
const optionLabel = cva(["truncate", "inline-block"]);
const optionCheckIcon = cva(["text-primary-base", "text-[18px]"]);
const group = cva(["flex", "items-center"]);
const inputLabel = cva(["truncate", "inline-block", "w-full"]);
const placeholder = cva([
  "text-opacity-50",
  "text-black",
  "inline-block",
  "w-full",
]);
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
const empty = cva(["p-6", "flex", "justify-center", "items-center"]);
const tagContainer = cva([
  "flex",
  "items-center",
  "gap-x-1",
  "gap-y-1",
  "flex-wrap",
  "py-1",
]);
const tag = cva([
  "border",
  "rounded-md",
  "border-base",
  "px-2",
  "py-1.5",
  "font-medium",
  "flex",
  "items-center",
  "gap-2",
  "leading-none",
  "bg-sec-background",
]);
const tagX = cva(["cursor-pointer"]);
const iconColor = cva(["text-gray-500"]);
const selectStyles = {
  container,
  secContainer,
  inputGroup,
  input,
  inputLabel,
  dropdown,
  option,
  optionLabel,
  optionCheckIcon,
  group,
  placeholder,
  leftElement,
  rightElement,
  clearElement,
  empty,
  tagContainer,
  tag,
  tagX,
  iconColor,
};

export { selectStyles };

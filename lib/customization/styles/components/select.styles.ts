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
    },
  }
);
const secContainer = cva(
  ["w-full", "min-h-inherit", "h-full", "flex", "items-center"],
  {
    variants: {
      addonRight: {
        true: ["pl-4", "pr-2.5"],
        false: [],
      },
      addonLeft: {
        true: ["pr-4"],
        false: [],
      },
      isSearchable: {
        true: ["cursor-text"],
        false: ["cursor-pointer"],
      },
      isMultiple: {
        true: [],
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
        xs: ["px-4", "text-xs"],
        sm: ["px-4", "text-sm"],
        md: ["px-4", "text-sm"],
        lg: ["px-4", "text-base"],
      },
      variant: {
        outline: [],
        filled: [],
        flushed: ["!px-0"],
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
  "rounded-base",
  "px-1",
  "py-0.5",
  "bg-color-component-background",
  "text-neutral-100",
  "text-base",
  "shadow-base",
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
    "px-3",
    "py-1.5",
    "my-0.5",
    "rounded-base",
    "hover:bg-neutral-10",
    "cursor-pointer",
    "font-medium",
    "text-base",
  ],
  {
    variants: {
      isSelected: {
        true: ["font-medium", "bg-primary-10"],
        false: [],
      },
      isDisabled: {
        true: ["cursor-not-allowed", "text-neutral-40"],
        false: [],
      },
    },
  }
);
const optionLabelContainer = cva(["flex", "gap-x-4", "items-center", "w-full"]);
const optionLabel = cva(["truncate", "inline-block"]);
const optionCheckIcon = cva(["text-primary-base", "text-[18px]"]);
const group = cva(["flex", "items-center"]);
const inputLabel = cva(["truncate", "inline-block", "w-full"]);
const placeholder = cva([
  "text-neutral-40",
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
const empty = cva([
  "p-6",
  "flex",
  "justify-center",
  "items-center",
  "text-neutral-40",
]);
const tagContainer = cva([
  "flex",
  "items-center",
  "gap-x-1",
  "gap-y-1",
  "flex-wrap",
  "py-1",
]);
const tag = cva(
  [
    "rounded-3xl",
    "px-3",
    "py-1.5",
    "font-medium",
    "flex",
    "items-center",
    "text-xs",
    "gap-2",
    "leading-none",
  ],
  {
    variants: {
      variant: {
        outline: ["bg-primary-10"],
        filled: ["bg-neutral-5"],
        flushed: ["bg-primary-10"],
      },
    },
  }
);
const tagX = cva(["cursor-pointer"]);
const iconColor = cva(["text-neutral-50"]);
const selectStyles = {
  container,
  secContainer,
  inputGroup,
  input,
  inputLabel,
  dropdown,
  option,
  optionLabelContainer,
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

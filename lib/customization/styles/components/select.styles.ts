import { cva } from "class-variance-authority";

const container = cva(
  [
    "zn-rounded-base",
    "zn-text-neutral-100",
    "zn-w-fit",
    "zn-outline",
    "zn-outline-1",
    "zn-outline-transparent",
    "zn-w-full",
  ],
  {
    variants: {
      size: {
        xs: ["zn-min-h-6"],
        sm: ["zn-min-h-8"],
        md: ["zn-min-h-10"],
        lg: ["zn-min-h-12"],
      },
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
    },
  }
);
const secContainer = cva(
  ["zn-w-full", "zn-min-h-inherit", "zn-h-full", "zn-flex", "zn-items-center"],
  {
    variants: {
      addonRight: {
        true: ["zn-pl-4", "zn-pr-2.5"],
        false: [],
      },
      addonLeft: {
        true: ["zn-pr-4"],
        false: [],
      },
      isSearchable: {
        true: ["zn-cursor-text"],
        false: ["zn-cursor-pointer"],
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
        class: "!zn-px-0",
      },
    ],
  }
);
const inputGroup = cva(
  [
    "zn-w-full",
    "zn-min-h-inherit",
    "zn-h-full",
    "!zn-bg-transparent",
    "zn-outline-none",
    "zn-flex",
    "zn-items-center",
    // "zn-cursor-pointer",
    "zn-truncate",
    "zn-relative",
  ],
  {
    variants: {
      size: {
        xs: ["zn-px-4", "zn-text-xs"],
        sm: ["zn-px-4", "zn-text-sm"],
        md: ["zn-px-4", "zn-text-sm"],
        lg: ["zn-px-4", "zn-text-base"],
      },
      variant: {
        outline: [],
        filled: [],
        flushed: ["!zn-px-0"],
      },
      isInGroup: {
        true: ["!zn-px-0"],
        false: [],
      },
      isDisabled: {
        true: ["zn-cursor-not-allowed"],
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
    "zn-outline-none",
    "zn-border-none",
    "zn-p-0",
    "zn-m-0",
    "zn-min-w-[2px]",
    "zn-min-h-inherit",
    "zn-h-full",
    "zn-appearance-none",
    "zn-cursor-inherit",
  ],
  {
    variants: {
      isMultiple: {
        true: ["zn-ml-0.5"],
        false: ["zn-absolute", "zn-top-0", "zn-bottom-0"],
      },
    },
  }
);

const dropdown = cva([
  "zn-overflow-y-auto",
  "zn-rounded-base",
  "zn-px-1",
  "zn-py-0.5",
  "zn-bg-color-component-background",
  "zn-text-neutral-100",
  "zn-text-base",
  "zn-shadow-base",
  "zn-overflow-x-hidden",
  "zn-w-[270px]",
]);
const option = cva(
  [
    "zn-w-full",
    "zn-flex",
    "zn-items-center",
    "zn-justify-between",
    "zn-gap-4",
    "zn-px-3",
    "zn-py-1.5",
    "zn-my-0.5",
    "zn-rounded-base",
    "hover:zn-bg-neutral-10",
    "zn-cursor-pointer",
    "zn-font-medium",
    "zn-text-base",
  ],
  {
    variants: {
      isSelected: {
        true: ["zn-font-medium", "zn-bg-primary-10"],
        false: [],
      },
      isDisabled: {
        true: ["zn-cursor-not-allowed", "zn-text-neutral-40"],
        false: [],
      },
    },
  }
);
const optionLabelContainer = cva([
  "zn-flex",
  "zn-gap-x-4",
  "zn-items-center",
  "zn-w-full",
]);
const optionLabel = cva(["zn-truncate", "zn-inline-block"]);
const optionCheckIcon = cva(["zn-text-primary-base", "zn-text-[18px]"]);
const group = cva(["zn-flex", "zn-items-center"]);
const inputLabel = cva(["zn-truncate", "zn-inline-block", "zn-w-full"]);
const placeholder = cva([
  "zn-text-neutral-40",
  "zn-text-black",
  "zn-inline-block",
  "zn-w-full",
]);
const leftElement = cva([
  "zn-flex",
  "zn-items-center",
  "zn-justify-center",
  "zn-cursor-pointer",
  "zn-p-1.5",
]);
const rightElement = cva([
  "zn-flex",
  "zn-items-center",
  "zn-justify-center",
  "zn-cursor-pointer",
  "zn-p-1.5",
]);
const clearElement = cva([
  "zn-flex",
  "zn-items-center",
  "zn-justify-center",
  "zn-p-1.5",
  "hover:zn-cursor-pointer",
  "hover:zn-bg-gray-100",
  "hover:zn-rounded-lg",
]);
const empty = cva([
  "zn-p-6",
  "zn-flex",
  "zn-justify-center",
  "zn-items-center",
  "zn-text-neutral-40",
]);
const tagContainer = cva([
  "zn-flex",
  "zn-items-center",
  "zn-gap-x-1",
  "zn-gap-y-1",
  "zn-flex-wrap",
  "zn-py-1",
]);
const tag = cva(
  [
    "zn-rounded-3xl",
    "zn-px-3",
    "zn-py-1.5",
    "zn-font-medium",
    "zn-flex",
    "zn-items-center",
    "zn-text-xs",
    "zn-gap-2",
    "zn-leading-none",
  ],
  {
    variants: {
      variant: {
        outline: ["zn-bg-primary-10"],
        filled: ["zn-bg-neutral-5"],
        flushed: ["zn-bg-primary-10"],
      },
    },
  }
);
const tagX = cva(["zn-cursor-pointer"]);
const iconColor = cva(["zn-text-neutral-50"]);
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

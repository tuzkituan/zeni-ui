import { cva } from "class-variance-authority";

const container = cva(
  ["zn-flex", "zn-items-center", "zn-w-fit", "zn-gap-2", "zn-select-none"],
  {
    variants: {
      isDisabled: {
        true: ["zn-cursor-not-allowed"],
        false: [],
      },
    },
  }
);
const input = cva(
  [
    "zn-bg-transparent",
    "zn-form-radio",
    "checked:zn-bg-primary-500",
    "zn-border-gray-900",
    "zn-text-primary-500",
    "focus:zn-ring-2",
    "focus:zn-ring-primary-100",
    "focus:!zn-ring-offset-0",
    "active:zn-ring-2",
    "active:zn-ring-primary-100",
    "active:!zn-ring-offset-0",

    "dark:zn-border-primary-500",
    "dark:focus:zn-ring-primary-800",
    "dark:active:zn-ring-primary-800",
  ],
  {
    variants: {
      size: {
        sm: ["zn-h-3", "zn-w-3"],
        md: ["zn-h-4", "zn-w-4"],
        lg: ["zn-h-5", "zn-w-5"],
      },
      indeterminate: {
        true: [],
        false: [],
      },
      readOnly: {
        true: ["zn-pointer-events-none"],
      },
      isDisabled: {
        true: [
          "zn-cursor-not-allowed",
          "checked:zn-bg-gray-800",
          "zn-bg-white",
          "active:zn-ring-0",
          "focus:zn-ring-0",
          "hover:zn-ring-0",

          "dark:checked:zn-bg-gray-800",
          "dark:zn-bg-gray-800",
        ],
        false: [],
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);
const label = cva(["zn-text-base", "zn-font-medium", "zn-text-gray-900", "dark:zn-text-white"], {
  variants: {
    isDisabled: {
      true: ["zn-text-gray-400", "dark:zn-text-gray-500"],
    },
  },
});
const group = cva(["zn-flex"], {
  variants: {
    layout: {
      vertical: ["zn-flex-col", "zn-gap-2"],
      horizontal: ["zn-flex-row", "zn-gap-2-4", "zn-gap-x-10"],
    },
  },
});

const radioStyles = {
  container,
  input,
  label,
  group,
};

export { radioStyles };

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
    "zn-form-checkbox",
    "!zn-rounded-[4px]",
    "zn-border-gray-900",
    "checked:zn-bg-primary-500",
    "zn-text-primary-500",
    "focus:zn-ring-2",
    "focus:zn-ring-primary-100",
    "focus:!zn-ring-offset-0",
    "active:zn-ring-2",
    "active:zn-ring-primary-100",
    "active:!zn-ring-offset-0",
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
          "checked:zn-bg-gray-200",
          "checked:zn-border-gray-200",
          "zn-bg-gray-100",
          "zn-border-gray-100",
          "hover:zn-bg-gray-100",
          "checked:hover:zn-bg-gray-200",
          "active:zn-ring-0",
          "focus:zn-ring-0",
        ],
        false: [],
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);
const label = cva(["zn-text-sm", "zn-font-medium", "zn-text-gray-900"], {
  variants: {
    isDisabled: {
      true: ["zn-text-gray-400"],
      false: [],
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

const checkboxStyles = {
  container,
  input,
  label,
  group,
};

export { checkboxStyles };

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
    "zn-form-radio",
    "checked:zn-bg-primary-base",
    "zn-border-neutral-100",
    "zn-text-primary-base",
    "focus:zn-ring-2",
    "focus:zn-ring-primary-20",
    "focus:!zn-ring-offset-0",
    "active:zn-ring-2",
    "active:zn-ring-primary-20",
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
          "checked:zn-bg-neutral-20",
          "zn-bg-neutral-5",
          "hover:zn-bg-neutral-5",
          "checked:hover:zn-bg-neutral-20",
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
const label = cva(["zn-text-sm", "zn-font-medium", "zn-text-neutral-100"], {
  variants: {
    isDisabled: {
      true: ["zn-text-neutral-40"],
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

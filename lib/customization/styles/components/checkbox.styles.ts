import { cva } from "class-variance-authority";

const container = cva(
  ["flex", "items-center", "w-fit", "gap-2", "select-none"],
  {
    variants: {
      isDisabled: {
        true: ["cursor-not-allowed"],
        false: [],
      },
    },
  }
);
const input = cva(
  [
    "form-checkbox",
    "!rounded-[4px]",
    "border-neutral-100",
    "checked:bg-primary-base",
    "text-primary-base",
    "focus:ring-2",
    "focus:ring-primary-20",
    "focus:!ring-offset-0",
    "active:ring-2",
    "active:ring-primary-20",
    "active:!ring-offset-0",
  ],
  {
    variants: {
      size: {
        sm: ["h-3", "w-3"],
        md: ["h-4", "w-4"],
        lg: ["h-5", "w-5"],
      },
      indeterminate: {
        true: [],
        false: [],
      },
      readOnly: {
        true: ["pointer-events-none"],
      },
      isDisabled: {
        true: [
          "cursor-not-allowed",
          "checked:bg-neutral-20",
          "checked:border-neutral-20",
          "bg-neutral-10",
          "border-neutral-10",
          "hover:bg-neutral-10",
          "checked:hover:bg-neutral-20",
          "active:ring-0",
          "focus:ring-0",
        ],
        false: [],
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);
const label = cva(["text-sm", "font-medium", "text-neutral-100"], {
  variants: {
    isDisabled: {
      true: ["text-neutral-40"],
      false: [],
    },
  },
});
const group = cva(["flex"], {
  variants: {
    layout: {
      vertical: ["flex-col", "gap-2"],
      horizontal: ["flex-row", "gap-2-4", "gap-x-10"],
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

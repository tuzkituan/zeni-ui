import { cva } from "class-variance-authority";

const container = cva(["flex", "items-center", "w-fit", "gap-2"]);
const input = cva(
  [
    "focus:ring-3",
    "focus:ring-base",
    "rounded",
    "checked:!accent-primary-base",
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
    },
    defaultVariants: {
      size: "md",
    },
  }
);
const label = cva(["text-sm", "font-medium", "text-neutral-100"], {
  variants: {
    disabled: {
      true: ["opacity-50", "pointer-events-none", "select-none"],
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

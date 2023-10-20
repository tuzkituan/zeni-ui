import { cva } from "class-variance-authority";

const container = cva(["flex", "items-center", "mb-4"]);
const input = cva(
  [
    "bg-primary-background",
    "border-line-primary",
    "focus:ring-3",
    "focus:ring-line-primary",
    "rounded",
    "checked:!accent-primary",
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
const label = cva(["text-sm", "ml-3", "font-medium", "text-primary-text"], {
  variants: {
    disabled: {
      true: ["opacity-50", "pointer-events-none", "select-none"],
      false: [],
    },
  },
});

const checkboxStyles = {
  container,
  input,
  label,
};

export { checkboxStyles };

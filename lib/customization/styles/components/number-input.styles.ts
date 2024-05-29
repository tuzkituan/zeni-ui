import { cva } from "class-variance-authority";

const container = cva(
  [
    "zn-rounded-base",
    "zn-text-gray-900",
    "dark:zn-text-white",
    "zn-w-full",
    // "zn-h-full",
    "zn-outline",
    "zn-outline-1",
    "zn-outline-transparent",
    "zn-flex",
    "zn-justify-between",
    "zn-items-center",
    "zn-overflow-hidden",
  ],
  {
    variants: {
      size: {
        xs: ["zn-h-6"],
        sm: ["zn-h-8"],
        md: ["zn-h-10"],
        lg: ["zn-h-12"],
      },
      variant: {
        outline: [
          "zn-border",
          "zn-border-gray-200",

          "hover:!zn-border-primary-500",

          "focus-within:!zn-border-primary-500",
          "focus-within:!zn-outline-primary-100",
          "focus-within:!zn-outline-2",

          "focus-within:!zn-ring-2",
          "focus-within:!zn-ring-primary-100",

          "dark:zn-border-gray-800",
          "dark:focus-within:!zn-outline-primary-700",
          "dark:focus-within:!zn-ring-primary-700",
        ],
        filled: [
          "zn-bg-primary-50",

          "zn-border",
          "zn-border-primary-50",

          "hover:!zn-border-primary-500",

          "focus-within:!zn-border-primary-500",
          "focus-within:!zn-outline-primary-100",
          "focus-within:!zn-outline-2",
          "focus-within:!zn-bg-transparent",

          "focus-within:!zn-ring-2",
          "focus-within:!zn-ring-primary-100",

          "dark:zn-bg-primary-800",
          "dark:zn-border-primary-700",
          "dark:focus-within:!zn-outline-primary-700",
          "dark:focus-within:!zn-ring-primary-700",
        ],
        flushed: [
          "!zn-rounded-none",

          "zn-border-b",
          "zn-border-b-primary-500",

          "hover:zn-shadow-[0_1px_0_0_var(--color-primary)]",
          "focus-within:!zn-shadow-[0_1px_0_0_var(--color-primary)]",
          "focus-within:!zn-border-b-primary-500",

          "!zn-px-0",
        ],
      },
      isDisabled: {
        true: [
          "!zn-bg-gray-100",
          "dark:!zn-bg-gray-800",
          "zn-cursor-not-allowed",
        ],
        false: [],
      },
    },
  }
);

const input = cva(
  [
    "zn-rounded-base",
    "zn-w-full",
    "zn-h-full",
    "!zn-bg-transparent",
    "zn-outline-none",
    "placeholder:zn-text-gray-400",
    "dark:placeholder:zn-text-gray-500",
  ],
  {
    variants: {
      size: {
        xs: ["zn-px-2", "zn-text-xs"],
        sm: ["zn-px-2", "zn-text-sm"],
        md: ["zn-px-3", "zn-text-base"],
        lg: ["zn-px-3", "zn-text-lg"],
      },
      variant: {
        outline: [],
        filled: [],
        flushed: ["!zn-px-0"],
        unstyled: ["!zn-px-0"],
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
  }
);

const arrowContainer = cva([
  "zn-flex",
  "zn-flex-col",
  "zn-border-l",
  "zn-border-l-gray-200",
  "dark:zn-border-l-gray-700",
  "zn-justify-stretch",
  "zn-h-full",
]);

const arrow = cva([
  "zn-flex",
  "zn-justify-center",
  "zn-items-center",
  "zn-px-1.5",
  "zn-leading-none",
  "hover:zn-bg-primary-50",
  "dark:hover:zn-bg-primary-800",
  "zn-grow",
]);

const arrowDivider = cva([
  "zn-text-base",
  "zn-w-full",
  "zn-border-t-gray-200",
  "dark:zn-border-t-gray-700",
]);

const numberInputStyles = {
  container,
  input,
  arrowContainer,
  arrow,
  arrowDivider,
};

export { numberInputStyles };

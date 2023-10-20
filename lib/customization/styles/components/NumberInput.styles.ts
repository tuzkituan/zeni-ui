import { cva } from "class-variance-authority";

const container = cva(
  [
    "rounded-md",
    "text-primary-text",
    "w-full ",
    "h-full",
    "outline",
    "outline-1",
    "outline-transparent",
    "flex",
    "justify-between",
    "items-center",
    "overflow-hidden",
  ],
  {
    variants: {
      size: {
        xs: ["h-6"],
        sm: ["h-8"],
        md: ["h-10"],
        lg: ["h-12"],
      },
      variant: {
        outline: [
          "border",
          "border-line-primary",

          "hover:!border-primary",

          "focus-within:!border-primary",
          "focus-within:!outline-primary",
        ],
        filled: [
          "bg-line-primary",

          "border",
          "border-line-primary",

          "hover:!border-primary",

          "focus-within:!border-primary",
          "focus-within:!outline-primary",
          "focus-within:!bg-sec-background",
        ],
        flushed: [
          "!rounded-none",

          "border-b",
          "border-b-line-primary",

          "hover:shadow-[0_1px_0_0_var(--color-primary)]",
          "focus-within:!shadow-[0_1px_0_0_var(--color-primary)]",
          "focus-within:!border-b-primary",

          "!px-0",
        ],
        unstyled: ["!border-none", "!bg-none", "!outline-none", "!px-0"],
      },
      addonRight: {
        true: ["pl-2"],
        false: [],
      },
      addonLeft: {
        true: ["pr-2"],
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

const input = cva(
  ["rounded-md", "w-full", "h-full", "!bg-transparent", "outline-none"],
  {
    variants: {
      size: {
        xs: ["px-2", "text-xs"],
        sm: ["px-2", "text-sm"],
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
  }
);

const arrowContainer = cva([
  "flex",
  "flex-col",
  "border-l",
  "border-l-line-primary",
  "justify-stretch",
  "h-full",
]);

const arrow = cva([
  "flex",
  "justify-center",
  "items-center",
  "px-1.5",
  "leading-none",
  "hover:bg-line-primary",
  "text-xs",
  "grow",
]);

const arrowDivider = cva(["text-line-primary", "w-full"]);

const numberInputStyles = {
  container,
  input,
  arrowContainer,
  arrow,
  arrowDivider,
};

export { numberInputStyles };

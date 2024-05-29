import { cva } from "class-variance-authority";

const base = cva(
  [
    "zn-flex",
    "zn-relative",
    "zn-items-center",
    "zn-justify-between",
    "zn-gap-3",
    "zn-px-3",
    "zn-py-3",
    "zn-transition-all",
    "zn-rounded-base",
  ],
  {
    variants: {
      variant: {
        subtle: ["before:zn-hidden"],
        solid: [],
        "left-accent": [
          "before:zn-h-full",
          "before:zn-w-1",
          "before:zn-top-0",
          "before:zn-absolute",
          "before:zn-left-0",
        ],
        "top-accent": [
          "before:zn-h-1",
          "before:zn-w-full",
          "before:zn-top-0",
          "before:zn-absolute",
          "before:zn-left-0",
          "before:zn-right-0",
        ],
      },
      status: {
        info: [],
        success: [],
        warning: [],
        error: [],
      },
      isClickable: {
        true: ["zn-cursor-pointer", "hover:!zn-bg-opacity-90"],
        false: [],
      },
    },
    compoundVariants: [
      {
        variant: ["subtle", "left-accent", "top-accent"],
        status: "info",
        class: ["zn-bg-white", "before:zn-bg-info-500", "dark:zn-bg-gray-800"],
      },
      {
        variant: ["subtle", "left-accent", "top-accent"],
        status: "success",
        class: [
          "zn-bg-white",
          "before:zn-bg-success-500",
          "dark:zn-bg-gray-800",
        ],
      },
      {
        variant: ["subtle", "left-accent", "top-accent"],
        status: "warning",
        class: [
          "zn-bg-white",
          "before:zn-bg-warning-500",
          "dark:zn-bg-gray-800",
        ],
      },
      {
        variant: ["subtle", "left-accent", "top-accent"],
        status: "error",
        class: ["zn-bg-white", "before:zn-bg-error-500", "dark:zn-bg-gray-800"],
      },
      {
        variant: "solid",
        status: "info",
        class: ["zn-bg-info-500", "dark:zn-bg-info-900"],
      },
      {
        variant: "solid",
        status: "success",
        class: ["zn-bg-success-500", "dark:zn-bg-success-900"],
      },
      {
        variant: "solid",
        status: "warning",
        class: ["zn-bg-warning-500", "dark:zn-bg-warning-900"],
      },
      {
        variant: "solid",
        status: "error",
        class: ["zn-bg-error-500", "dark:zn-bg-error-900"],
      },
    ],
    defaultVariants: {
      variant: "subtle",
      status: "info",
    },
  }
);

const icon = cva(
  [
    "zn-text-2xl",
    "zn-border",
    "zn-rounded-full",
    "zn-p-2.5",
    "dark:zn-border-transparent",
  ],
  {
    variants: {
      status: {
        info: ["zn-text-info-500"],
        success: ["zn-text-success-500"],
        warning: ["zn-text-warning-500"],
        error: ["zn-text-error-500"],
      },
      variant: {
        subtle: [],
        solid: [],
        "left-accent": [],
        "top-accent": [],
      },
    },
    compoundVariants: [
      {
        variant: ["subtle", "left-accent", "top-accent"],
        status: "info",
        class: ["zn-text-info-500", "zn-bg-info-50", "dark:zn-bg-info-800"],
      },
      {
        variant: ["subtle", "left-accent", "top-accent"],
        status: "success",
        class: [
          "zn-text-success-500",
          "zn-bg-success-50",
          "dark:zn-bg-success-800",
        ],
      },
      {
        variant: ["subtle", "left-accent", "top-accent"],
        status: "warning",
        class: [
          "zn-text-warning-500",
          "zn-bg-warning-50",
          "dark:zn-bg-warning-800",
        ],
      },
      {
        variant: ["subtle", "left-accent", "top-accent"],
        status: "error",
        class: ["zn-text-error-500", "zn-bg-error-50", "dark:zn-bg-error-800"],
      },
      {
        variant: "solid",
        status: ["info"],
        class: ["zn-border-none", "zn-bg-white", "dark:zn-bg-info-800"],
      },
      {
        variant: "solid",
        status: ["success"],
        class: ["zn-border-none", "zn-bg-white", "dark:zn-bg-success-800"],
      },
      {
        variant: "solid",
        status: ["warning"],
        class: ["zn-border-none", "zn-bg-white", "dark:zn-bg-warning-800"],
      },
      {
        variant: "solid",
        status: ["error"],
        class: ["zn-border-none", "zn-bg-white", "dark:zn-bg-error-800"],
      },
    ],
  }
);

const text = cva(["zn-text-base"], {
  variants: {
    status: {
      info: ["zn-text-info-500"],
      success: ["zn-text-success-500"],
      warning: ["zn-text-warning-500"],
      error: ["zn-text-error-500"],
    },
    variant: {
      subtle: [],
      solid: [],
      "left-accent": [],
      "top-accent": [],
    },
  },
  compoundVariants: [
    {
      variant: ["subtle", "left-accent", "top-accent"],
      status: ["info", "success", "warning", "error"],
      class: ["zn-text-gray-900", "dark:zn-text-gray-100"],
    },
    {
      variant: "solid",
      status: ["info", "success", "warning", "error"],
      class: ["!zn-text-white", "dark:zn-text-gray-100"],
    },
  ],
});
const close = cva(["zn-font-medium", "zn-self-start"], {
  variants: {
    variant: {
      subtle: ["!zn-text-gray-400"],
      solid: ["!zn-text-white", "dark:!zn-text-gray-400"],
      "left-accent": ["!zn-text-gray-400"],
      "top-accent": ["!zn-text-gray-400"],
    },
  },
});
const titleText = cva([
  "zn-font-semibold",
  "zn-m-0",
  "zn-text-base",
  "zn-break-all",
  "zn-leading-6",
]);
const descriptionText = cva([
  "zn-m-0",
  "zn-text-base",
  "zn-font-normal",
  "zn-break-all",
  "zn-leading-6",
]);
const mainContent = cva([
  "zn-flex",
  "zn-relative",
  "zn-items-center",
  "zn-justify-between",
  "zn-gap-3",
  "zn-w-full",
]);
const left = cva([
  "zn-flex",
  "zn-relative",
  "zn-items-center",
  "zn-justify-start",
  "zn-gap-3",
]);

const alertStyles = {
  base,
  icon,
  text,
  close,
  titleText,
  descriptionText,
  mainContent,
  left,
};

export { alertStyles };

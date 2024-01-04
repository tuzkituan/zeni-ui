import { cva } from "class-variance-authority";

const base = cva(
  [
    "block",
    "flex",
    "relative",
    "items-start",
    "justify-start",
    "gap-3",
    "py-3",
    "px-3",
  ],
  {
    variants: {
      variant: {
        subtle: ["before:hidden"],
        solid: [],
        "left-accent": [
          "before:h-full",
          "before:w-1",
          "before:top-0",
          "before:absolute",
          "before:left-0",
        ],
        "top-accent": [
          "before:h-1",
          "before:w-full",
          "before:top-0",
          "before:absolute",
          "before:left-0",
          "before:right-0",
        ],
      },
      status: {
        info: [],
        success: [],
        warning: [],
        error: [],
      },
    },
    compoundVariants: [
      {
        variant: ["subtle", "left-accent", "top-accent"],
        status: "info",
        class: ["bg-white", "before:bg-info-base"],
      },
      {
        variant: ["subtle", "left-accent", "top-accent"],
        status: "success",
        class: ["bg-white", "before:bg-success-base"],
      },
      {
        variant: ["subtle", "left-accent", "top-accent"],
        status: "warning",
        class: ["bg-white", "before:bg-warning-base"],
      },
      {
        variant: ["subtle", "left-accent", "top-accent"],
        status: "error",
        class: ["bg-white", "before:bg-error-base"],
      },
      {
        variant: "solid",
        status: "info",
        class: "bg-info-base",
      },
      {
        variant: "solid",
        status: "success",
        class: "bg-success-base",
      },
      {
        variant: "solid",
        status: "warning",
        class: "bg-warning-base",
      },
      {
        variant: "solid",
        status: "error",
        class: "bg-error-base",
      },
    ],
    defaultVariants: {
      variant: "subtle",
      status: "info",
    },
  }
);

const icon = cva(["text-2xl"], {
  variants: {
    status: {
      info: ["text-info-base"],
      success: ["text-success-base"],
      warning: ["text-warning-base"],
      error: ["text-error-base"],
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
      class: "text-info-base",
    },
    {
      variant: ["subtle", "left-accent", "top-accent"],
      status: "success",
      class: "text-success-base",
    },
    {
      variant: ["subtle", "left-accent", "top-accent"],
      status: "warning",
      class: "text-warning-base",
    },
    {
      variant: ["subtle", "left-accent", "top-accent"],
      status: "error",
      class: "text-error-base",
    },
    {
      variant: "solid",
      status: ["info", "success", "warning", "error"],
      class: "text-white",
    },
  ],
});

const text = cva(["text-base"], {
  variants: {
    status: {
      info: ["text-info-base"],
      success: ["text-success-base"],
      warning: ["text-warning-base"],
      error: ["text-error-base"],
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
      class: "text-gray-900",
    },
    {
      variant: "solid",
      status: ["info", "success", "warning", "error"],
      class: "text-white",
    },
  ],
});
const close = cva(["font-medium", "absolute", "top-2", "right-0"]);
const titleText = cva(["font-medium", "m-0", "text-sm"]);
const descriptionText = cva(["m-0", "text-sm", "font-normal"]);

const alertStyles = {
  base,
  icon,
  text,
  close,
  titleText,
  descriptionText,
};

export { alertStyles };

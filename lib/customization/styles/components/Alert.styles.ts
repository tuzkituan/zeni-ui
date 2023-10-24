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
        class: ["bg-blue-100", "before:bg-blue-400"],
      },
      {
        variant: ["subtle", "left-accent", "top-accent"],
        status: "success",
        class: ["bg-green-100", "before:bg-green-600"],
      },
      {
        variant: ["subtle", "left-accent", "top-accent"],
        status: "warning",
        class: ["bg-orange-100", "before:bg-orange-400"],
      },
      {
        variant: ["subtle", "left-accent", "top-accent"],
        status: "error",
        class: ["bg-red-100", "before:bg-red-400"],
      },
      {
        variant: "solid",
        status: "info",
        class: "bg-blue-400",
      },
      {
        variant: "solid",
        status: "success",
        class: "bg-green-600",
      },
      {
        variant: "solid",
        status: "warning",
        class: "bg-orange-400",
      },
      {
        variant: "solid",
        status: "error",
        class: "bg-red-400",
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
      info: ["text-blue-400"],
      success: ["text-green-600"],
      warning: ["text-orange-400"],
      error: ["text-red-400"],
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
      class: "text-blue-400",
    },
    {
      variant: ["subtle", "left-accent", "top-accent"],
      status: "success",
      class: "text-green-600",
    },
    {
      variant: ["subtle", "left-accent", "top-accent"],
      status: "warning",
      class: "text-orange-400",
    },
    {
      variant: ["subtle", "left-accent", "top-accent"],
      status: "error",
      class: "text-red-400",
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
      info: ["text-blue-400"],
      success: ["text-green-600"],
      warning: ["text-orange-400"],
      error: ["text-red-400"],
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
const close = cva(["font-medium", "absolute", "top-2", "right-0"], {});
const titleText = cva(["font-medium", "m-0"]);
const descriptionText = cva(["m-0"]);

const alertStyles = {
  base,
  icon,
  text,
  close,
  titleText,
  descriptionText,
};

export { alertStyles };

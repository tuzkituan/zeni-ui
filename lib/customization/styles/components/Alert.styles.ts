import { cva } from "class-variance-authority";

const base = cva(
  [
    "block",
    "flex",
    "relative",
    "items-start",
    "justify-start",
    "gap-3",
    "py-4",
    "px-4",
  ],
  {
    variants: {
      variant: {
        subtle: ["before:hidden"],
        solid: [],
        "left-accent": [
          "before:h-full",
          "before:w-[4px]",
          "before:top-0",
          "before:absolute",
          "before:left-0",
        ],
        "top-accent": [
          "before:h-[4px]",
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

const alertStyles = {
  base,
  icon,
  text,
};

export { alertStyles };

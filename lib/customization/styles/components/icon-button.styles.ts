import { cva } from "class-variance-authority";

const base = cva(
  [
    "zn-rounded-base",
    "disabled:zn-cursor-not-allowed",
    "zn-transition-opacity",
    "zn-duration-400",
    "zn-ease-in-out",
    "zn-font-semibold",
    "zn-py-1",
    "zn-px-1",
    "zn-flex",
    "zn-justify-center",
    "zn-items-center",
  ],
  {
    variants: {
      variant: {
        solid: [
          "zn-border",
          "zn-bg-primary-500",
          "zn-border-transparent",
          "zn-text-white",

          "hover:zn-bg-primary-400",

          "focus:zn-bg-primary-600",

          "active:zn-bg-primary-800",

          "disabled:zn-bg-gray-100",
          "disabled:zn-text-gray-400",

          "dark:hover:zn-bg-primary-600",
          "dark:focus:zn-bg-primary-700",
          "dark:active:zn-bg-primary-800",
          "dark:disabled:zn-bg-gray-800",
        ],
        subtle: [
          "zn-bg-primary-100",
          "zn-border",
          "zn-border-transparent",
          "zn-text-primary-500",

          "hover:zn-bg-primary-50",
          "hover:zn-text-primary-400",

          "focus:zn-bg-primary-100",

          "active:zn-bg-primary-200",

          "disabled:zn-bg-gray-100",
          "disabled:zn-text-gray-400",

          "disabled:zn-bg-gray-100",
          "disabled:zn-text-gray-400",

          "dark:zn-bg-primary-800",
          "dark:zn-text-primary-200",
          "dark:hover:zn-bg-primary-800",
          "dark:hover:zn-text-primary-100",
          "dark:focus:zn-bg-primary-700",
          "dark:active:zn-bg-primary-600",
          "dark:disabled:zn-bg-gray-800",
        ],
        outline: [
          "zn-border",
          "zn-bg-transparent",
          "zn-border-primary-200",
          "zn-text-primary-500",

          "hover:zn-border-primary-200",
          "hover:zn-text-primary-400",

          "active:zn-border-primary-200",
          "active:zn-text-primary-300",

          "disabled:zn-bg-gray-100",
          "disabled:zn-text-gray-400",

          "dark:zn-bg-transparent",
          "dark:zn-border-primary-500",
          "dark:disabled:zn-bg-gray-800",
          "dark:disabled:zn-border-primary-800",
        ],
        text: [
          "zn-border",
          "zn-bg-transparent",
          "zn-border-transparent",

          "hover:zn-text-primary-500",

          "active:zn-text-primary-300",

          "disabled:zn-text-gray-400",

          "dark:hover:zn-text-primary-500",
          "dark:active:zn-text-primary-600",
          "dark:disabled:zn-text-gray-500",
        ],
        link: [
          "zn-border",
          "zn-bg-transparent",
          "zn-border-transparent",
          "zn-underline",
          "zn-text-primary-500",
          "disabled:zn-text-gray-400",

          "dark:zn-text-primary-500",
          "dark:disabled:zn-text-gray-500",
        ],
      },
      size: {
        xs: ["zn-text-xs", "zn-h-6", "zn-w-6"],
        sm: ["zn-text-sm", "zn-h-8", "zn-w-8"],
        md: ["zn-text-sm", "zn-h-10", "zn-w-10"],
        lg: ["zn-text-base", "zn-h-12", "zn-w-12"],
      },
      isDanger: {
        true: [],
        false: [],
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        isDanger: true,
        class: [
          "!zn-bg-error-500",
          "hover:!zn-bg-error-400",
          "focus:!zn-bg-error-600",
          "active:!zn-bg-error-800",
        ],
      },
      {
        variant: "subtle",
        isDanger: true,
        class: [
          "!zn-bg-error-100",
          "hover:!zn-bg-error-200",
          "focus:!zn-bg-error-200",
          "active:!zn-bg-error-300",
          "!zn-text-error-500",

          "dark:!zn-bg-error-800",
          "dark:hover:!zn-bg-error-700",
          "dark:focus:!zn-bg-error-800",
          "dark:active:!zn-bg-error-900",
          "dark:!zn-text-error-300",
        ],
      },
      {
        variant: "outline",
        isDanger: true,
        class: [
          "!zn-border-error-500",
          "!zn-text-error-500",

          "hover:!zn-border-error-600",
          "hover:!zn-text-error-600",

          "focus:!zn-border-error-500",
          "focus:!zn-text-error-500",

          "active:!zn-border-error-400",
          "active:!zn-text-error-400",
        ],
      },
      {
        variant: "text",
        isDanger: true,
        class: [
          "!zn-text-error-500",
          "hover:!zn-text-error-500",
          "hover:!zn-bg-error-100",
          "active:!zn-text-error-500",
          "active:!zn-bg-error-200",

          "dark:!zn-text-error-500",
          "dark:hover:!zn-text-error-500",
          "dark:hover:!zn-bg-error-800",
          "dark:active:!zn-text-error-500",
          "dark:active:!zn-bg-error-900",
        ],
      },
      {
        variant: "link",
        isDanger: true,
        class: [
          "!zn-text-error-500",
          "hover:!zn-text-error-500",
          "hover:!zn-underline",
        ],
      },
    ],

    defaultVariants: {
      size: "md",
      variant: "solid",
    },
  }
);

const container = cva([
  "zn-flex",
  "zn-justify-center",
  "zn-items-center",
  "zn-gap-2",
]);

const spinner = cva(["zn-animate-spin"], {
  variants: {
    size: {
      xs: ["zn-w-[12px]", "zn-h-[12px]"],
      sm: ["zn-w-[14px]", "zn-h-[14px]"],
      md: ["zn-w-[18px]", "zn-h-[18px]"],
      lg: ["zn-w-[20px]", "zn-h-[20px]"],
    },
  },
});

const iconButtonStyles = {
  base,
  container,
  spinner,
};

export { iconButtonStyles };

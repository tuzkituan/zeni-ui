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
          "zn-bg-primary-base",
          "zn-border-transparent",
          "zn-text-white",

          "hover:zn-bg-primary-50",

          "focus:zn-bg-primary-60",

          "active:zn-bg-primary-80",

          "disabled:zn-bg-neutral-10",
          "disabled:zn-text-neutral-40",
        ],
        subtle: [
          "zn-bg-primary-20",
          "zn-border",
          "zn-border-transparent",

          "hover:zn-bg-primary-10",

          "focus:zn-bg-primary-30",

          "active:zn-bg-primary-40",

          "disabled:zn-bg-neutral-10",
          "disabled:zn-text-neutral-40",

          "disabled:zn-bg-neutral-10",
          "disabled:zn-text-neutral-40",
        ],
        outline: [
          "zn-border",
          "zn-bg-neutral-5",
          "zn-border-primary-10",
          "zn-text-neutral-100",

          "hover:zn-border-neutral-10",
          "hover:zn-text-primary-base",

          "active:zn-border-neutral-10",
          "active:zn-text-primary-base",

          "disabled:zn-bg-neutral-10",
          "disabled:zn-text-neutral-40",
        ],
        text: [
          "zn-border",
          "zn-bg-transparent",
          "zn-border-transparent",

          "hover:zn-bg-primary-10",
          "hover:zn-text-primary-base",

          "active:zn-bg-primary-10",
          "active:zn-text-primary-base",

          "disabled:zn-text-neutral-40",
        ],
        link: [
          "zn-border",
          "zn-bg-transparent",
          "zn-border-transparent",
          "zn-underline",
          "zn-text-neutral-100",
          "disabled:zn-text-neutral-40",
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
          "!zn-bg-error-base",
          "hover:!zn-bg-error-50",
          "focus:!zn-bg-error-60",
          "active:!zn-bg-error-80",
        ],
      },
      {
        variant: "subtle",
        isDanger: true,
        class: [
          "!zn-bg-error-20",
          "hover:!zn-bg-error-10",
          "focus:!zn-bg-error-30",
          "active:!zn-bg-error-40",
        ],
      },
      {
        variant: "outline",
        isDanger: true,
        class: [
          "!zn-border-error-base",
          "!zn-text-error-base",
          "!zn-bg-neutral-5",

          "hover:!zn-border-error-60",
          "hover:!zn-text-error-60",
          "hover:!zn-bg-neutral-5",

          "focus:!zn-border-error-60",
          "focus:!zn-text-error-60",
          "focus:!zn-bg-neutral-5",

          "active:!zn-border-error-60",
          "active:!zn-text-error-60",
          "active:!zn-bg-neutral-5",
        ],
      },
      {
        variant: "text",
        isDanger: true,
        class: [
          "!zn-text-error-base",
          "hover:!zn-text-error-base",
          "hover:!zn-bg-error-10",

          "active:!zn-text-error-base",
          "active:!zn-bg-error-10",
        ],
      },
      {
        variant: "link",
        isDanger: true,
        class: [
          "!zn-text-error-base",
          "hover:!zn-text-error-base",
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

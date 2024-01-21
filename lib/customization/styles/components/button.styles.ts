import { cva } from "class-variance-authority";

const base = cva(
  [
    "rounded-base",
    "disabled:cursor-not-allowed",
    "transition-opacity",
    "duration-400",
    "ease-in-out",
    "font-semibold",
  ],
  {
    variants: {
      variant: {
        solid: [
          "border",
          "bg-primary-base",
          "border-transparent",
          "text-white",

          "hover:bg-primary-50",

          "focus:bg-primary-60",

          "active:bg-primary-80",

          "disabled:bg-neutral-10",
          "disabled:text-neutral-40",
        ],
        subtle: [
          "bg-primary-20",
          "border",
          "border-transparent",

          "hover:bg-primary-10",

          "focus:bg-primary-30",

          "active:bg-primary-40",

          "disabled:bg-neutral-10",
          "disabled:text-neutral-40",

          "disabled:bg-neutral-10",
          "disabled:text-neutral-40",
        ],
        outline: [
          "border",
          "bg-neutral-5",
          "border-primary-10",
          "text-neutral-100",

          "hover:border-neutral-10",
          "hover:text-primary-base",

          "active:border-neutral-10",
          "active:text-primary-base",

          "disabled:bg-neutral-10",
          "disabled:text-neutral-40",
        ],
        text: [
          "border",
          "bg-transparent",
          "border-transparent",

          "hover:bg-primary-10",
          "hover:text-primary-base",

          "active:bg-primary-10",
          "active:text-primary-base",

          "disabled:text-neutral-40",
        ],
        link: [
          "border",
          "bg-transparent",
          "border-transparent",
          "underline",
          "text-neutral-100",
          "disabled:text-neutral-40",
        ],
      },
      size: {
        xs: ["text-xs", "h-[24px]", "py-1", "px-2"],
        sm: ["text-xs", "h-[32px]", "py-1", "px-4"],
        md: ["text-sm", "h-[44px]", "py-1", "px-[20px]"],
        lg: ["text-base", "h-[48px]", "py-1", "px-[24px]"],
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
          "bg-error-base",
          "hover:bg-error-50",
          "focus:bg-error-60",
          "active:bg-error-80",
        ],
      },
      {
        variant: "subtle",
        isDanger: true,
        class: [
          "bg-error-20",
          "hover:bg-error-10",
          "focus:bg-error-30",
          "active:bg-error-40",
        ],
      },
      {
        variant: "outline",
        isDanger: true,
        class: [
          "border-error-base",
          "text-error-base",
          "bg-neutral-5",

          "hover:border-error-60",
          "hover:text-error-60",
          "hover:bg-neutral-5",

          "focus:border-error-60",
          "focus:text-error-60",
          "focus:bg-neutral-5",

          "active:border-error-60",
          "active:text-error-60",
          "active:bg-neutral-5",
        ],
      },
      {
        variant: "text",
        isDanger: true,
        class: [
          "text-error-base",
          "hover:text-error-base",
          "hover:bg-error-10",

          "active:text-error-base",
          "active:bg-error-10",
        ],
      },
      {
        variant: "link",
        isDanger: true,
        class: ["text-error-base", "hover:text-error-base", "hover:underline"],
      },
    ],

    defaultVariants: {
      size: "md",
      variant: "solid",
    },
  }
);

const container = cva(["flex", "justify-center", "items-center", "gap-2"]);

const spinner = cva(["animate-spin"], {
  variants: {
    size: {
      xs: ["w-[12px]", "h-[12px]"],
      sm: ["w-[14px]", "h-[14px]"],
      md: ["w-[18px]", "h-[18px]"],
      lg: ["w-[20px]", "h-[20px]"],
    },
  },
});

const buttonStyles = {
  base,
  container,
  spinner,
};

export { buttonStyles };

import { cva } from "class-variance-authority";

const base = cva(
  ["zn-relative", "zn-inline-flex", "zn-items-center", "zn-cursor-pointer"],
  {
    variants: {
      isDisabled: {
        true: ["zn-cursor-not-allowed"],
        false: [],
      },
      isReadOnly: {
        true: [],
        false: [],
      },
    },
  }
);
const input = cva(["zn-sr-only", "zn-peer"], {
  variants: {
    isDisabled: {
      true: ["zn-cursor-not-allowed"],
      false: [],
    },
    isReadOnly: {
      true: [],
      false: [],
    },
  },
});
const span = cva(
  [
    "zn-bg-primary-100",
    "peer-focus:zn-outline-none",
    "zn-rounded-full",
    "focus:zn-ring-2",
    "focus:zn-ring-primary-100",
    "active:zn-ring-2",
    "active:zn-ring-primary-100",
    "peer",
    "peer-checked:after:zn-translate-x-full",
    "peer-checked:after:zn-border-none",
    "after:zn-content-['']",
    "after:zn-absolute",
    "after:zn-bg-white",
    "after:zn-rounded-full",
    "after:hover:zn-bg-white",
    "after:zn-transition-all",
    "peer-checked:zn-bg-primary-500",
    "peer-checked:hover:zn-bg-primary-400",
    "peer-checked:after:hover:zn-bg-white",

    "dark:zn-bg-primary-800",
    "dark:focus:zn-ring-primary-700",
    "dark:active:zn-ring-primary-700",
    "dark:after:zn-bg-primary-500",
    "dark:peer-checked:zn-bg-primary-700",
    "dark:after:hover:zn-bg-primary-400",
    "dark:peer-checked:after:zn-bg-white",
  ],
  {
    variants: {
      size: {
        sm: [
          "zn-w-[35px]",
          "zn-h-5",
          "after:zn-top-[2.5px]",
          "after:zn-start-[3px]",
          "after:zn-h-[14px]",
          "after:zn-w-[14px]",
        ],
        md: [
          "zn-w-[44px]",
          "zn-h-6",
          "after:zn-top-[3px]",
          "after:zn-start-[4px]",
          "after:zn-h-[18px]",
          "after:zn-w-[18px]",
        ],
        lg: [
          "zn-w-[52px]",
          "zn-h-7",
          "after:zn-top-[3px]",
          "after:zn-start-[4px]",
          "after:zn-h-[22px]",
          "after:zn-w-[22px]",
        ],
      },
      isDisabled: {
        true: [
          "zn-cursor-not-allowed",
          "zn-bg-gray-100",
          "peer-checked:zn-bg-gray-100",
          "peer-checked:hover:zn-bg-gray-100",
          "after:hover:zn-bg-white",
          "after:zn-bg-white",
        ],
        false: [],
      },
      isReadOnly: {
        true: [],
        false: [],
      },
    },
  }
);

const switchStyles = {
  base,
  input,
  span,
};

export { switchStyles };

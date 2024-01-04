import { cva } from "class-variance-authority";

const base = cva(
  ["relative", "inline-flex", "items-center", "cursor-pointer"],
  {
    variants: {
      isDisabled: {
        true: ["cursor-not-allowed"],
        false: [],
      },
      isReadOnly: {
        true: [],
        false: [],
      },
    },
  }
);
const input = cva(["sr-only", "peer"], {
  variants: {
    isDisabled: {
      true: ["cursor-not-allowed"],
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
    "bg-gray-200",
    "peer-focus:outline-none",
    "rounded-full",
    "peer",
    "dark:bg-gray-700",
    "peer-checked:after:translate-x-full",
    "rtl:peer-checked:after:-translate-x-full",
    "peer-checked:after:border-white",
    "after:content-['']",
    "after:absolute",
    "after:bg-white",
    "after:border-gray-300",
    "after:border",
    "after:rounded-full",
    "after:transition-all",
    "dark:border-primary-base",
    "peer-checked:bg-primary-base",
  ],
  {
    variants: {
      size: {
        sm: [
          "w-9",
          "h-5",
          "after:top-[2px]",
          "after:start-[2px]",
          "after:h-4",
          "after:w-4",
        ],
        md: [
          "w-11",
          "h-6",
          "after:top-[2px]",
          "after:start-[2px]",
          "after:h-5",
          "after:w-5",
        ],
        lg: [
          "w-14",
          "h-7",
          "after:top-0.5",
          "after:start-[4px]",
          "after:h-6",
          "after:w-6",
        ],
      },
      isDisabled: {
        true: ["cursor-not-allowed", "opacity-60"],
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

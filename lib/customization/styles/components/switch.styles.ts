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
    "bg-primary-10",
    "peer-focus:outline-none",
    "rounded-full",
    "focus:ring-2",
    "focus:ring-primary-20",
    "active:ring-2",
    "active:ring-primary-20",
    "peer",
    "peer-checked:after:translate-x-full",
    "peer-checked:after:border-none",
    "after:content-['']",
    "after:absolute",
    "after:bg-white",
    "after:rounded-full",
    "after:hover:bg-primary-20",
    "after:transition-all",
    "peer-checked:bg-primary-base",
    "peer-checked:hover:bg-primary-50",
    "peer-checked:after:hover:bg-white",
  ],
  {
    variants: {
      size: {
        sm: [
          "w-[35px]",
          "h-5",
          "after:top-[2.5px]",
          "after:start-[3px]",
          "after:h-[14px]",
          "after:w-[14px]",
        ],
        md: [
          "w-[44px]",
          "h-6",
          "after:top-[3px]",
          "after:start-[4px]",
          "after:h-[18px]",
          "after:w-[18px]",
        ],
        lg: [
          "w-[52px]",
          "h-7",
          "after:top-[3px]",
          "after:start-[4px]",
          "after:h-[22px]",
          "after:w-[22px]",
        ],
      },
      isDisabled: {
        true: [
          "cursor-not-allowed",
          "bg-neutral-10",
          "peer-checked:bg-neutral-10",
          "peer-checked:hover:bg-neutral-10",
          "after:hover:bg-white",
          "after:bg-white",
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

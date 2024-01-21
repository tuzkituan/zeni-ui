import { cva } from "class-variance-authority";

const backdrop = cva([
  "fixed",
  "bg-black",
  "bg-opacity-50",
  "inset-0",
  "overflow-y-auto",
  "flex",
  "justify-center",
  "w-full",
  "h-full",
  "p-12",
  // "backdrop-blur-sm",
]);
const container = cva(
  [
    "m-auto",
    "bg-color-component-background",
    "min-w-[350px] max-w-[90%]",
    "h-fit",
    "rounded-base",
    "relative",
  ],
  {
    variants: {
      isCentered: {
        true: [""],
        false: ["mt-28"],
      },
    },
  }
);
const close = cva(["absolute", "right-4", "top-4", "text-neutral-50"]);
const header = cva(["px-6", "pt-6"]);
const titleContainer = cva(["flex", "gap-2"]);
const titleIcon = cva(["mt-1"], {
  variants: {
    variant: {
      success: ["text-success-base"],
      error: ["text-error-base"],
      warning: ["text-warning-base"],
      info: ["text-info-base"],
    },
  },
});
const title = cva(["text-xl", "font-bold"]);
const content = cva(["px-6", "pb-6"], {
  variants: {
    showHeader: {
      true: ["pt-3"],
      false: ["pt-6"],
    },
  },
});
const footer = cva(["px-6", "pb-6", "flex", "justify-end", "gap-3"], {
  variants: {
    variant: {
      success: [],
      error: [],
      warning: [],
      info: [],
    },
  },
});
const okButton = cva([], {
  variants: {
    variant: {
      success: ["bg-success-base"],
      error: ["bg-error-base"],
      warning: ["bg-warning-base"],
      info: ["bg-info-base"],
    },
  },
});

const modalStyles = {
  backdrop,
  container,
  close,
  header,
  titleContainer,
  titleIcon,
  title,
  content,
  footer,
  okButton,
};

export { modalStyles };

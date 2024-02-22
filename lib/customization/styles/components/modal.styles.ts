import { cva } from "class-variance-authority";

const backdrop = cva([
  "zn-fixed",
  "zn-bg-black",
  "zn-bg-opacity-50",
  "zn-inset-0",
  "zn-overflow-y-auto",
  "zn-flex",
  "zn-justify-center",
  "zn-w-full",
  "zn-h-full",
  "zn-p-12",
  // "backdrop-blur-sm",
]);
const container = cva(
  [
    "zn-m-auto",
    "zn-bg-color-component-background",
    "zn-min-w-[350px] max-w-[90%]",
    "zn-h-fit",
    "zn-rounded-base",
    "zn-relative",
  ],
  {
    variants: {
      isCentered: {
        true: [""],
        false: ["zn-mt-28"],
      },
    },
  }
);
const close = cva([
  "zn-absolute",
  "zn-right-4",
  "zn-top-4",
  "zn-text-neutral-50",
]);
const header = cva(["zn-px-6", "zn-pt-6"]);
const titleContainer = cva(["zn-flex", "zn-gap-2"]);
const titleIcon = cva(["zn-mt-1"], {
  variants: {
    variant: {
      success: ["zn-text-success-base"],
      error: ["zn-text-error-base"],
      warning: ["zn-text-warning-base"],
      info: ["zn-text-info-base"],
    },
  },
});
const title = cva(["zn-text-xl", "zn-font-bold"]);
const content = cva(["zn-px-6", "zn-pb-6"], {
  variants: {
    showHeader: {
      true: ["zn-pt-3"],
      false: ["zn-pt-6"],
    },
  },
});
const footer = cva(
  ["zn-px-6", "zn-pb-6", "zn-flex", "zn-justify-end", "zn-gap-3"],
  {
    variants: {
      variant: {
        success: [],
        error: [],
        warning: [],
        info: [],
      },
    },
  }
);
const okButton = cva([], {
  variants: {
    variant: {
      success: ["zn-bg-success-base"],
      error: ["zn-bg-error-base"],
      warning: ["zn-bg-warning-base"],
      info: ["zn-bg-info-base"],
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

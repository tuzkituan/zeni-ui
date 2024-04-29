import { cva } from "class-variance-authority";

const backdrop = cva([
  "zn-fixed",
  "zn-bg-black",
  "zn-bg-opacity-50",
  "zn-inset-0",
  "zn-overflow-y-auto",
  "zn-flex",
  "zn-justify-center",
  "zn-h-full",
  "zn-p-12",
]);
const container = cva(
  [
    "zn-m-auto",
    "zn-bg-white",
    "dark:zn-bg-component",
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
  "zn-text-gray-100",
]);
const header = cva(["zn-px-6", "zn-pt-6"]);
const titleContainer = cva(["zn-flex", "zn-gap-2"]);
const titleIcon = cva(["zn-mt-1"], {
  variants: {
    variant: {
      success: ["zn-text-success-500"],
      error: ["zn-text-error-500"],
      warning: ["zn-text-warning-500"],
      info: ["zn-text-info-500"],
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
      success: ["zn-bg-success-500"],
      error: ["zn-bg-error-500"],
      warning: ["zn-bg-warning-500"],
      info: ["zn-bg-info-500"],
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

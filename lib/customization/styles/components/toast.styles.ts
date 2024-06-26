import { cva } from "class-variance-authority";

const toastsContainer = cva(
  [
    "zn-fixed",
    "zn-z-[9999]",
    "zn-pointer-events-none",
    "zn-flex",
    "zn-flex-col",
    "zn-m-2",
  ],
  {
    variants: {
      top: {
        true: ["env-safe-area-inset-top-0"],
        false: [],
      },
      bottom: {
        true: ["env-safe-area-inset-bottom-0"],
        false: [],
      },
      left: {
        true: ["env-safe-area-inset-left-0"],
        false: [],
      },
      right: {
        true: ["env-safe-area-inset-right-0"],
        false: [],
      },
      isTopOrBottom: {
        true: ["zn-mx-auto", "zn-w-fit"],
        false: [],
      },
      isRighty: {
        true: ["zn-items-end"],
        false: [],
      },
      isLefty: {
        true: ["zn-items-start"],
        false: [],
      },
    },
  }
);
const alertContainer = cva(["zn-flex", "zn-flex-col", "zn-items-center"], {
  variants: {
    isRighty: {
      true: ["zn-items-end"],
      false: [],
    },
    isLefty: {
      true: ["zn-items-start"],
      false: [],
    },
  },
});
const alert = cva(
  [
    "zn-max-w-[500px]",
    "zn-rounded-base",
    "zn-overflow-hidden",
    "zn-shadow-base",
  ],
  {
    variants: {
      isCenter: {
        true: [],
        false: ["zn-min-w-[250px]"],
      },
    },
  }
);

const toastStyles = {
  toastsContainer,
  alertContainer,
  alert,
};

export { toastStyles };

import { cva } from "class-variance-authority";

const toastsContainer = cva(
  ["fixed", "z-[9999]", "pointer-events-none", "flex", "flex-col", "m-2"],
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
        true: ["mx-auto"],
        false: []
      }
    },
  }
);
const alertContainer = cva(["flex", "flex-col", "items-center"], {
  variants: {
    isRighty: {
      true: ["items-end"],
      false: [],
    },
    isLefty: {
      true: ["items-start"],
      false: [],
    },
  },
});
const alert = cva([
  "min-w-[250px]",
  "max-w-[500px]",
  "rounded-lg",
  "overflow-hidden",
  "shadow-sm",
]);

const toastStyles = {
  toastsContainer,
  alertContainer,
  alert,
};

export { toastStyles };

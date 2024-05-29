import { cva } from "class-variance-authority";

// CONTAINER
const container = cva(["zn-block"]);
const tableContainer = cva(["zn-w-full", "zn-py-2", "zn-px-4"]);
const table = cva(["zn-table-fixed", "zn-w-full", "zn-max-w-full"]); // i dont know why "zn-w-full" crashes the browser

// DAY VIEW
const labelCell = cva([
  "zn-px-1",
  "zn-text-center",
  "zn-font-medium",
  "zn-h-[36px]",
  "zn-text-base",
]);
const valueCell = cva(["zn-px-1"]);
const valueCellInner = cva(
  [
    "zn-my-0.5",
    "zn-block",
    "zn-w-[28px]",
    "zn-h-[28px]",
    "zn-mx-auto",
    "zn-text-center",
    "zn-text-base",
    "zn-border",
    "zn-border-transparent",
    "zn-rounded",
    "zn-leading-[24px]",
    "hover:zn-cursor-pointer",
    "hover:zn-bg-gray-200",
    "hover:zn-text-gray-900",
    "dark:hover:zn-bg-gray-800",
    "dark:hover:zn-text-white",
  ],
  {
    variants: {
      isToday: {
        true: ["!zn-text-primary-500", "!zn-border-primary-500"],
      },
      isSameMonth: {
        true: ["zn-text-gray-900", "dark:zn-text-gray-100"],
        false: ["zn-text-gray-300", "dark:zn-text-gray-500"],
      },
      isSelectedDate: {
        true: ["!zn-text-white", "!zn-bg-primary-500", "!zn-font-medium"],
      },
      isDisabled: {
        true: [
          "!zn-bg-gray-200",
          "dark:!zn-bg-gray-700",
          "hover:!zn-cursor-not-allowed",
          "hover:!text-gray-300",
        ],
        false: [],
      },
    },
    compoundVariants: [
      {
        isDisabled: true,
        isSameMonth: true,
        className: ["!zn-text-gray-300"],
      },
    ],
  }
);

// MONTH VIEW
const monthPickValueCell = cva(["zn-px-1"]);
const monthPickValueCellInner = cva(
  [
    "zn-my-0.5",
    "zn-block",
    "zn-w-full",
    "zn-h-[28px]",
    "zn-px-2",
    "zn-mx-auto",
    "zn-text-center",
    "zn-border",
    "zn-border-transparent",
    "zn-rounded",
    "zn-leading-[24px]",
    "hover:zn-cursor-pointer",
    "hover:zn-bg-gray-200",
    "hover:zn-text-gray-900",
    "dark:hover:zn-bg-gray-800",
    "dark:hover:zn-text-white",
  ],
  {
    variants: {
      isSameMonth: {
        true: ["zn-text-primary-500", "dark:zn-text-primary-500"],
        false: ["zn-text-gray-900", "dark:zn-text-gray-200"],
      },
      isDisabled: {
        true: [
          "!zn-bg-gray-200",
          "hover:!zn-cursor-not-allowed",
          "hover:zn-text-gray-900",
        ],
        false: [],
      },
    },
  }
);

// YEAR VIEW
const yearPickValueCell = cva(["zn-px-1"]);
const yearPickValueCellInner = cva(
  [
    "zn-my-0.5",
    "zn-block",
    "zn-w-full",
    "zn-h-[28px]",
    "zn-px-2",
    "zn-mx-auto",
    "zn-text-center",
    "zn-border",
    "zn-border-transparent",
    "zn-rounded",
    "zn-leading-[24px]",
    "hover:zn-cursor-pointer",
    "hover:zn-bg-gray-200",
    "hover:zn-text-gray-900",
    "dark:hover:zn-bg-gray-800",
    "dark:hover:zn-text-white",
  ],
  {
    variants: {
      isSameYear: {
        true: ["zn-text-primary-500", "dark:zn-text-primary-500"],
        false: ["zn-text-gray-900", "dark:zn-text-gray-200"],
      },
      isDisabled: {
        true: [
          "!zn-bg-gray-200",
          "hover:!zn-cursor-not-allowed",
          "hover:zn-text-gray-900",
        ],
        false: [],
      },
    },
  }
);

// COMMON
const labelRow = cva(["zn-mb-4"]);
const valueRow = cva([]);
const header = cva([
  "zn-flex",
  "zn-items-center",
  "zn-w-full",
  "zn-gap-1",
  "zn-px-[20px]",
  "zn-pt-4",
  // "zn-border-b",
  // "zn-border-gray-200",
]);
const headerButton = cva(
  [
    "zn-rounded-base",
    "zn-font-medium",
    "zn-px-1",
    "zn-py-1",
    "zn-leading-none",
    "hover:zn-text-primary-500",
    "hover:zn-bg-gray-100",
    "dark:hover:zn-text-white",
    "dark:hover:zn-bg-primary-800",
    "zn-text-base",
  ],
  {
    variants: {
      isNoAction: {
        true: ["!cursor-default", "zn-pointer-events-none"],
        false: [],
      },
    },
  }
);
const headerArrow = cva([
  "zn-text-gray-900",
  "hover:zn-text-gray-500",
  "dark:zn-text-white",
  "dark:hover:zn-text-gray-100",
]);

// FOOTER
const footer = cva([
  "zn-flex",
  "zn-justify-center",
  "zn-border-t",
  "zn-border-gray-100",
  "dark:zn-border-gray-800",
  "zn-py-2",
]);
const footerButton = cva([
  "zn-block",
  "hover:zn-cursor-pointer",
  "zn-text-primary-500",
]);

const calendarStyles = {
  valueRow,
  labelRow,
  container,
  labelCell,
  valueCell,
  valueCellInner,
  tableContainer,
  table,
  header,
  headerButton,
  headerArrow,
  footer,
  footerButton,
  monthPickValueCell,
  monthPickValueCellInner,
  yearPickValueCell,
  yearPickValueCellInner,
};

export { calendarStyles };

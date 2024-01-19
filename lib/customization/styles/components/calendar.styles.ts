import { cva } from "class-variance-authority";

// CONTAINER
const container = cva(["block", "bg-white"]);
const tableContainer = cva(["w-full", "py-2", "px-4"]);
const table = cva(["table-fixed", "w-full", "max-w-full"]); // i dont know why "w-full" crashes the browser

// DAY VIEW
const labelCell = cva([
  "px-1",
  "text-center",
  "font-medium",
  "h-[36px]",
  "text-sm",
]);
const valueCell = cva(["px-1"]);
const valueCellInner = cva(
  [
    "my-0.5",
    "block",
    "w-[28px]",
    "h-[28px]",
    "mx-auto",
    "text-center",
    "text-sm",
    "border",
    "border-transparent",
    "rounded",
    "leading-[24px]",
    "hover:cursor-pointer",
    "hover:bg-gray-200",
    "hover:text-neutral-100",
  ],
  {
    variants: {
      isToday: {
        true: ["!text-primary-base", "!border-primary-base"],
      },
      isSameMonth: {
        true: ["text-neutral-100"],
        false: ["text-gray-300"],
      },
      isSelectedDate: {
        true: ["!text-white", "!bg-primary-base", "!font-medium"],
      },
      isDisabled: {
        true: [
          "!bg-gray-200",
          "hover:!cursor-not-allowed",
          "hover:!text-gray-300",
        ],
        false: [],
      },
    },
    compoundVariants: [
      {
        isDisabled: true,
        isSameMonth: true,
        className: ["!text-gray-300"],
      },
    ],
  }
);

// MONTH VIEW
const monthPickValueCell = cva(["px-1"]);
const monthPickValueCellInner = cva(
  [
    "my-0.5",
    "block",
    "w-full",
    "h-[28px]",
    "px-2",
    "mx-auto",
    "text-center",
    "border",
    "border-transparent",
    "rounded",
    "leading-[24px]",
    "hover:cursor-pointer",
    "hover:bg-gray-200",
    "hover:text-neutral-100",
  ],
  {
    variants: {
      isSameMonth: {
        true: ["text-primary-base"],
        false: ["text-neutral-100"],
      },
      isDisabled: {
        true: [
          "!bg-gray-200",
          "hover:!cursor-not-allowed",
          "hover:text-neutral-100",
        ],
        false: [],
      },
    },
  }
);

// YEAR VIEW
const yearPickValueCell = cva(["px-1"]);
const yearPickValueCellInner = cva(
  [
    "my-0.5",
    "block",
    "w-full",
    "h-[28px]",
    "px-2",
    "mx-auto",
    "text-center",
    "border",
    "border-transparent",
    "rounded",
    "leading-[24px]",
    "hover:cursor-pointer",
    "hover:bg-gray-200",
    "hover:text-neutral-100",
  ],
  {
    variants: {
      isSameYear: {
        true: ["text-primary-base"],
        false: ["text-neutral-100"],
      },
      isDisabled: {
        true: [
          "!bg-gray-200",
          "hover:!cursor-not-allowed",
          "hover:text-neutral-100",
        ],
        false: [],
      },
    },
  }
);

// COMMON
const labelRow = cva(["mb-4"]);
const valueRow = cva([]);
const header = cva([
  "flex",
  "items-center",
  "w-full",
  "gap-1",
  "px-[20px]",
  "pt-4",
  // "border-b",
  // "border-base",
]);
const headerButton = cva(
  [
    "rounded-md",
    "font-medium",
    "px-1",
    "py-1",
    "leading-none",
    "hover:text-primary-base",
    "hover:bg-gray-100",
    "text-base",
  ],
  {
    variants: {
      isNoAction: {
        true: ["!cursor-default", "pointer-events-none"],
        false: [],
      },
    },
  }
);
const headerArrow = cva(["text-neutral-100", "hover:text-neutral-50"]);

// FOOTER
const footer = cva([
  "flex",
  "justify-center",
  "border-t",
  "border-neutral-10",
  "py-2",
]);
const footerButton = cva([
  "block",
  "hover:cursor-pointer",
  "text-primary-base",
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

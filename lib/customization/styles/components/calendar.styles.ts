import { cva } from "class-variance-authority";

const container = cva(["block", "bg-white"]);
const labelCell = cva(["px-1", "text-center", "font-normal", "h-[36px]"]);
const valueCell = cva(["px-1"]);
const valueCellInner = cva(
  [
    "my-0.5",
    "block",
    "w-[28px]",
    "h-[28px]",
    "mx-auto",
    "text-center",
    "border",
    "border-transparent",
    "rounded",
    "leading-[24px]",
    "hover:cursor-pointer",
    "hover:bg-gray-200",
    "hover:text-primary-text",
  ],
  {
    variants: {
      isToday: {
        true: ["!text-primary", "!border-primary"],
      },
      isSameMonth: {
        true: ["text-primary-text"],
        false: ["text-gray-300"],
      },
      isSelectedDate: {
        true: ["!text-white", "!bg-primary", "!font-medium"],
      },
    },
  }
);
const labelRow = cva(["mb-4"]);
const valueRow = cva([]);
const header = cva([
  "flex",
  "items-center",
  "w-full",
  "gap-1",
  "px-4",
  "py-2",
  "border-b",
  "border-line-primary",
]);
const headerButton = cva([
  "rounded-md",
  "hover:bg-gray-100",
  "font-medium",
  "px-2",
  "py-1",
  "leading-none",
]);
const tableContainer = cva(["w-full", "py-2", "px-4"]);
const table = cva(["table-fixed"]);

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
};

export { calendarStyles };

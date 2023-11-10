import { cva } from "class-variance-authority";

const container = cva(["block", "bg-white"]);
const labelCell = cva(["px-1", "text-center", "font-medium"]);
const valueCell = cva(["px-1"]);
const valueCellInner = cva(
  [
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
    "hover:!text-primary-text",
  ],
  {
    variants: {
      isToday: {
        true: ["!text-primary", "!border-primary"],
      },
      isSameMonth: {
        true: ["text-primary-text"],
        false: ["text-gray-400"],
      },
      isSelectedDate: {
        true: ["text-white", "bg-primary", "font-medium"],
      },
    },
  }
);
const labelRow = cva([]);
const valueRow = cva([]);
const header = cva([
  "flex",
  "justify-between",
  "items-center",
  "w-full",
  "gap-2",
  "px-4",
  "py-2",
]);
const table = cva(["border-collapse", "w-full", "table-fixed"]);

const calendarStyles = {
  valueRow,
  labelRow,
  container,
  labelCell,
  valueCell,
  valueCellInner,
  table,
  header,
};

export { calendarStyles };

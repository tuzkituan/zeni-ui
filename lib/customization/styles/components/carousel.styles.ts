import { cva } from "class-variance-authority";

const base = cva([
  "zn-relative",
  "zn-w-full",
  "zn-overflow-hidden",
  "zn-rounded-md",
  "zn-z-0",
]);

const itemContainer = cva(["zn-absolute", "zn-w-full", "zn-h-full"]);
const item = cva([
  "zn-h-full",
  "zn-w-full",
  "zn-select-none",
  "zn-pointer-events-none",
  "!zn-rounded-md",
]);
const icon = cva([
  "zn-top-[calc(50%_-_20px)]",
  "zn-absolute",
  "zn-w-8",
  "zn-h-8",
  "zn-flex",
  "zn-justify-center",
  "zn-items-center",
  "zn-select-none",
  "zn-cursor-pointer",
  "zn-font-[bold]",
  "zn-text-lg",
  "zn-z-[2]",
  "zn-rounded-[30px]",
  "zn-bg-[#00000020]",
]);
const nextIcon = cva(["zn-left-3"]);
const prevIcon = cva(["zn-right-3"]);
const carouselStyles = {
  base,
  itemContainer,
  item,
  nextIcon,
  prevIcon,
  icon,
};

export { carouselStyles };

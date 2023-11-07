import { cva } from "class-variance-authority";

const base = cva(["block", "h-auto", "select-none", "w-full"]);
const backdrop = cva([
  "fixed",
  "bg-black",
  "bg-opacity-50",
  "inset-0",
  "overflow-hidden",
  "w-full",
  "h-full",
  "flex",
  "justify-center",
  "items-center",
]);
const imgContainer = cva(["select-none"]);
const isPreviewable = cva(["hover:brightness-75", "cursor-pointer"]);
const tools = cva([
  "flex",
  "items-center",
  "gap-1",
  "fixed",
  "left-[50%]",
  "-translate-x-1/2",
  "bottom-3",
  "bg-black",
  "bg-opacity-60",
  "rounded-lg",
  "px-2",
  "py-1",
  "select-none",
  "backdrop-blur-sm",
]);
const toolIcon = cva([
  "p-2",
  "cursor-pointer",
  "text-white",
  "hover:brightness-75",
  "select-none",
]);
const imageStyles = {
  base,
  backdrop,
  imgContainer,
  isPreviewable,
  tools,
  toolIcon,
};

export { imageStyles };

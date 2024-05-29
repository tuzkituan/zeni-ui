import { cva } from "class-variance-authority";

const img = cva(["zn-block", "zn-h-auto", "zn-select-none"]);
const imgPreview = cva([
  "zn-block",
  "zn-h-auto",
  "zn-select-none",
  "zn-w-full",
]);
const backdrop = cva([
  "zn-fixed",
  "zn-bg-black",
  "zn-bg-opacity-50",
  "zn-inset-0",
  "!zn-overflow-hidden",
  "zn-h-full",
  "zn-flex",
  "zn-justify-center",
  "zn-items-center",
  "zn-z-[9999]",
]);
const imgContainer = cva(["zn-select-none"]);
const isPreviewable = cva(["hover:zn-brightness-90", "zn-cursor-pointer"]);
const tools = cva([
  "zn-flex",
  "zn-items-center",
  "zn-gap-1",
  "zn-fixed",
  "zn-left-[50%]",
  "-zn-translate-x-1/2",
  "zn-bottom-3",
  "zn-bg-black",
  "zn-bg-opacity-60",
  "zn-rounded-base",
  "zn-px-2",
  "zn-py-1",
  "zn-select-none",
  "backdrop-blur-sm",
]);
const toolIcon = cva([
  "zn-p-2",
  "zn-cursor-pointer",
  "zn-text-white",
  "hover:zn-brightness-75",
  "zn-select-none",
  "hover:zn-scale-110",
  "active:zn-scale-100",
]);
const imageStyles = {
  img,
  imgPreview,
  backdrop,
  imgContainer,
  isPreviewable,
  tools,
  toolIcon,
};

export { imageStyles };

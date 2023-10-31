import { cva } from "class-variance-authority";

const backdrop = cva([
  "fixed",
  "bg-black",
  "bg-opacity-75",
  "inset-0",
  "overflow-y-auto",
  "flex",
  "justify-center",
  "w-full",
  "h-full",
  "p-12",
]);
const container = cva(
  [
    "m-auto",
    "bg-sec-background",
    "min-w-[350px] max-w-[90%]",
    "h-fit",
    "rounded-lg",
    "relative",
  ],
  {
    variants: {
      isCentered: {
        true: [""],
        false: ["mt-28"],
      },
    },
  }
);
const close = cva(["absolute", "right-1", "top-2"]);
const header = cva(["px-4", "pt-4"]);
const title = cva(["text-lg", "font-medium"]);
const content = cva(["px-4", "pb-4"], {
  variants: {
    showHeader: {
      true: ["pt-3"],
      false: ["pt-8"],
    },
  },
});

const modalStyles = {
  backdrop,
  container,
  close,
  header,
  title,
  content,
};

export { modalStyles };

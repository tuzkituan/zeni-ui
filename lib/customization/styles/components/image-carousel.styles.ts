import { cva } from "class-variance-authority";

const base = cva([
  "zn-relative",
  "zn-w-full",
  "zn-cursor-grab",
  "zn-overflow-hidden",
]);
const inner = cva(["zn-flex", "zn-gap-2"]);
const imgContainer = cva([]);
const img = cva(["zn-h-full", "zn-w-full", "zn-pointer-events-none"]);

const imageCarouselStyles = {
  base,
  inner,
  imgContainer,
  img,
};

export { imageCarouselStyles };

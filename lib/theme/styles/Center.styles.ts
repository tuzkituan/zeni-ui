import { cva } from "class-variance-authority";

const base = cva(["flex w-full justify-center items-center"]);
const circle = cva([
  "flex justify-center items-center rounded-full w-fit h-fit",
]);

const centerStyles = {
  base,
  circle,
};

export { centerStyles };

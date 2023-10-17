import { cva } from "class-variance-authority";

const base = cva(["flex"], {
  variants: {
    direction: {
      row: ["flex-row"],
      "row-reverse": ["flex-row-reverse"],
      column: ["flex-col"],
      "column-reverse": ["flex-col-reverse"],
    },
    justify: {
      "flex-end": ["justify-end"],
      "flex-start": ["justify-start"],
      center: ["justify-center"],
      "space-around": ["justify-around"],
      "space-between": ["justify-between"],
      "space-evenly": ["justify-evenly"],
    },
    align: {
      "flex-end": ["items-end"],
      "flex-start": ["items-start"],
      center: ["items-center"],
      baseline: ["items-baseline"],
      stretch: ["items-stretch"],
    },
    wrap: {
      nowrap: ["flex-nowrap"],
      wrap: ["flex-wrap"],
      "wrap-reverse": ["flex-wrap-reverse"],
    },
  },
  defaultVariants: {
    align: "center",
    direction: "row",
    justify: "flex-start",
    wrap: "nowrap",
  },
});

const spacer = cva(["flex-1 place-self-stretch"]);

const flexStyles = {
  base,
  spacer,
};

export { flexStyles };

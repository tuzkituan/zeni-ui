import { cva } from "class-variance-authority";

const base = cva(["zn-flex"], {
  variants: {
    direction: {
      row: ["zn-flex-row"],
      "row-reverse": ["zn-flex-row-reverse"],
      column: ["zn-flex-col"],
      "column-reverse": ["zn-flex-col-reverse"],
    },
    justify: {
      "flex-end": ["zn-justify-end"],
      "flex-start": ["zn-justify-start"],
      center: ["zn-justify-center"],
      "space-around": ["zn-justify-around"],
      "space-between": ["zn-justify-between"],
      "space-evenly": ["zn-justify-evenly"],
    },
    align: {
      "flex-end": ["zn-items-end"],
      "flex-start": ["zn-items-start"],
      center: ["zn-items-center"],
      baseline: ["zn-items-baseline"],
      stretch: ["zn-items-stretch"],
    },
    wrap: {
      nowrap: ["zn-flex-nowrap"],
      wrap: ["zn-flex-wrap"],
      "wrap-reverse": ["zn-flex-wrap-reverse"],
    },
  },
  defaultVariants: {
    align: "center",
    direction: "row",
    justify: "flex-start",
    wrap: "nowrap",
  },
});

const spacer = cva(["zn-flex-1", "zn-place-self-stretch"]);

const flexStyles = {
  base,
  spacer,
};

export { flexStyles };

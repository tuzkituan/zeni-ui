import { cva } from "class-variance-authority";

const base = cva(["rounded-md border border-transparent text-primary-text"], {
  variants: {
    size: {
      xs: ["px-2", "py-1", "text-xs"],
      sm: ["px-2", "py-1.5", "text-sm"],
      md: ["px-3", "py-2", "text-base"],
      lg: ["px-3", "py-3", "text-lg"],
    },
    variant: {
      outline: [
        "border-line-primary",
        "hover:border-primary",
        "outline-primary",
      ],
      filled: [
        "bg-line-primary",
        "hover:border-primary",
        "focus-visible:bg-sec-background",
        "outline-primary",
      ],
      flushed: [
        "border-b-line-primary",
        "rounded-none",
        "outline-none",
        "focus-visible:shadow-[0_1px_0_0_var(--color-primary)]",
        "focus-visible:border-b-primary",
        "!px-0",
      ],
      unstyled: ["border-none", "bg-none", "outline-none", "!px-0"],
    },
  },
});

const inputStyles = {
  base,
};

export { inputStyles };

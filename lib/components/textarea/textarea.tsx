import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { ITextarea } from "./textarea.types";
import { useMemo } from "react";

export const Textarea = (props: ITextarea) => {
  const theme = useComponentStyle("Textarea");
  const {
    className = "",
    variant,
    placeholder = "Placeholder",
    ...restProps
  } = props;

  const classes = useMemo(() => {
    return twMerge(
      theme.base({
        variant,
      }),
      className
    );
  }, [theme, variant, className]);

  return (
    <textarea className={classes} placeholder={placeholder} {...restProps} />
  );
};

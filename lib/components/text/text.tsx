import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { IText } from "./text.types";
import { useMemo } from "react";

export const Text = (props: IText) => {
  const theme = useComponentStyle("Text");
  const { children, className = "", ...restProps } = props;

  const classes = useMemo(() => {
    return twMerge(theme.base(), className);
  }, [className, theme]);

  return (
    <span className={classes} {...restProps}>
      {children}
    </span>
  );
};

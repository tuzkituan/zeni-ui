import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { IText } from "./Text.types";
import { useMemo } from "react";

const defaultProps: Partial<IText> = {
  children: undefined,
};

export const Text = (props: IText) => {
  const theme = useComponentStyle("Text");
  const {
    children,
    className = "",
    ...restProps
  } = { ...defaultProps, ...props };

  const classes = useMemo(() => {
    return twMerge(theme.base(), className);
  }, [className, theme]);

  return (
    <span className={classes} {...restProps}>
      {children}
    </span>
  );
};

import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { IBox } from "./box.types";
import { useMemo } from "react";

export const Box = (props: IBox) => {
  const theme = useComponentStyle("Box");
  const { children, className = "", ...restProps } = props;

  const classes = useMemo(() => {
    return twMerge(theme.base(), className);
  }, [className, theme]);

  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

import { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { ICode } from "./code.types";

export const Code = (props: ICode) => {
  const theme = useComponentStyle("Code");
  const { children, className = "", style, bgColor, ...restProps } = props;

  const classes = useMemo(() => {
    return twMerge(theme.base(), className);
  }, [className, theme]);

  return (
    <div
      className={classes}
      style={{
        backgroundColor: bgColor,
        ...style,
      }}
      {...restProps}
    >
      {children}
    </div>
  );
};

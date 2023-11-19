import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { ISlider } from "./slider.types";
import { useMemo } from "react";

export const Slider = (props: ISlider) => {
  const theme = useComponentStyle("Slider");
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

import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { ICenter, ICircle } from "./center.types";
import { useMemo } from "react";

export const Center = (props: ICenter) => {
  const theme = useComponentStyle("Center");
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

export const Circle = (props: ICircle) => {
  const { size = 40, className, ...rest } = props;
  const theme = useComponentStyle("Center");

  const classes = useMemo(() => {
    return twMerge(theme.circle(), className);
  }, [className, theme]);

  return Center({
    ...rest,
    className: classes,
    style: {
      ...props.style,
      width: size,
      height: size,
    },
  });
};

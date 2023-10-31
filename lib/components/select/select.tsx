import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { ISelect } from "./select.types";
import { useMemo } from "react";

const defaultProps: Partial<ISelect> = {
  children: undefined,
};

export const Select = (props: ISelect) => {
  const theme = useComponentStyle("Select");
  const {
    children,
    className = "",
    ...restProps
  } = { ...defaultProps, ...props };

  const classes = useMemo(() => {
    return twMerge(theme.base(), className)
  }, [className, theme]);

  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

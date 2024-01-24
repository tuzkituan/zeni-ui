import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { IFlex } from "./flex.types";
import { useMemo } from "react";

export const Flex = (props: IFlex) => {
  const theme = useComponentStyle("Flex");
  const {
    children,
    className = "",
    direction,
    justify,
    align,
    wrap,
    gap,
    ...restProps
  } = props;

  const classes = useMemo(() => {
    return twMerge(
      theme.base({
        direction,
        justify,
        align,
        wrap,
      }),
      className
    );
  }, [align, className, direction, justify, theme, wrap]);

  return (
    <div
      className={classes}
      style={{
        gap,
        ...restProps.style,
      }}
      {...restProps}
    >
      {children}
    </div>
  );
};

export const Spacer = () => {
  const theme = useComponentStyle("Flex");
  return <div className={twMerge(theme.spacer())} />;
};

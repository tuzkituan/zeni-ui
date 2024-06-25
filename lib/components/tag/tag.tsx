import { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { ITag } from "./tag.types";

export const Tag = (props: ITag) => {
  const theme = useComponentStyle("Tag");
  const {
    children,
    style,
    className = "",
    variant = "solid",
    size = "md",
    color = "",
    ...restProps
  } = props;

  const classes = useMemo(() => {
    return twMerge(
      theme.base({
        variant,
        size,
      }),
      className
    );
  }, [className, theme, variant, size]);

  return (
    <div
      className={classes}
      style={{
        ...(variant === "solid" && {
          backgroundColor: color,
          borderColor: color,
        }),
        ...(variant === "outline" && {
          borderColor: color,
          color: color,
        }),
        ...style,
      }}
      {...restProps}
    >
      {children}
    </div>
  );
};

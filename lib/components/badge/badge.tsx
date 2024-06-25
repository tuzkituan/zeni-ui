import { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { IBadge } from "./badge.types";

export const Badge = (props: IBadge) => {
  const theme = useComponentStyle("Badge");
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
        ...(variant === "subtle" && {
          backgroundColor: `${color}15`,
          color: color,
        }),
        ...style,
      }}
      {...restProps}
    >
      <span>{children}</span>
    </div>
  );
};

import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { IInput } from "./Input.types";
import { useMemo } from "react";

const defaultProps: Partial<IInput> = {
  size: "md",
  variant: "filled",
};

export const Input = (props: IInput) => {
  const theme = useComponentStyle("Input");
  const {
    className = "",
    size,
    variant,
    ...restProps
  } = { ...defaultProps, ...props };

  const classes = useMemo(() => {
    return twMerge(
      theme.base({
        size,
        variant,
      }),
      className
    );
  }, [className, size, variant, theme]);

  return <input className={classes} placeholder="Placeholder" {...restProps} />;
};

import { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { Box } from "../box/Box";
import { IInput } from "./Input.types";

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
    leftElement,
    rightElement,
    ...restProps
  } = { ...defaultProps, ...props };

  const containerClasses = useMemo(() => {
    return twMerge(
      theme.container({
        size,
        variant,
        addonLeft: !!leftElement,
        addonRight: !!rightElement,
      }),
      theme.group(),
      className
    );
  }, [theme, size, variant, leftElement, rightElement, className]);

  const inputClasses = useMemo(() => {
    return twMerge(
      theme.input({
        size,
        variant,
        isInGroup: !!leftElement || !!rightElement,
      }),
      className
    );
  }, [theme, size, variant, leftElement, rightElement, className]);

  const leftElementClasses = useMemo(() => {
    return twMerge(theme.leftElement());
  }, [theme]);

  const rightElementClasses = useMemo(() => {
    return twMerge(theme.rightElement());
  }, [theme]);

  return (
    <div className={containerClasses}>
      {leftElement ? (
        <Box className={leftElementClasses}>{leftElement}</Box>
      ) : null}
      <input
        placeholder="Placeholder"
        className={inputClasses}
        {...restProps}
      />
      {rightElement ? (
        <Box className={rightElementClasses}>{rightElement}</Box>
      ) : null}
    </div>
  );
};

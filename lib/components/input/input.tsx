import { forwardRef, useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { Box } from "../box/box";
import { IInput } from "./input.types";

export const Input = forwardRef<HTMLInputElement, IInput>(
  (props: IInput, ref) => {
    const theme = useComponentStyle("Input");
    const {
      className = "",
      size = "md",
      variant = "outline",
      leftElement,
      rightElement,
      isDisabled = false,
      isReadOnly = false,
      ...restProps
    } = props;

    const containerClasses = useMemo(() => {
      return twMerge(
        theme.container({
          size,
          variant,
          addonLeft: !!leftElement,
          addonRight: !!rightElement,
          isDisabled,
        }),
        theme.group(),
        className
      );
    }, [
      theme,
      size,
      isDisabled,
      variant,
      leftElement,
      rightElement,
      className,
    ]);

    const inputClasses = useMemo(() => {
      return twMerge(
        theme.input({
          size,
          variant,
          isInGroup: !!leftElement || !!rightElement,
          isDisabled,
        }),
        className
      );
    }, [
      theme,
      size,
      isDisabled,
      variant,
      leftElement,
      rightElement,
      className,
    ]);

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
          ref={ref}
          disabled={isDisabled}
          readOnly={isReadOnly}
          {...restProps}
        />
        {rightElement ? (
          <Box className={rightElementClasses}>{rightElement}</Box>
        ) : null}
      </div>
    );
  }
);
Input.displayName = "Input";

import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { ISwitch } from "./switch.types";
import { forwardRef, useMemo } from "react";

export const Switch = forwardRef<HTMLInputElement, ISwitch>(
  (props: ISwitch, ref) => {
    const theme = useComponentStyle("Switch");
    const {
      className = "",
      size = "md",
      isDisabled = false,
      isReadOnly = false,
      isChecked,
      ...restProps
    } = props;

    const classes = useMemo(() => {
      return twMerge(
        theme.base({
          isDisabled,
          isReadOnly,
        }),
        className
      );
    }, [className, isDisabled, isReadOnly, theme]);

    const inputClasses = useMemo(() => {
      return twMerge(
        theme.input({
          isDisabled,
          isReadOnly,
        })
      );
    }, [theme, isDisabled, isReadOnly]);

    const spanClasses = useMemo(() => {
      return twMerge(
        theme.span({
          size,
          isDisabled,
          isReadOnly,
        })
      );
    }, [theme, isDisabled, isReadOnly, size]);

    return (
      <label className={classes}>
        <input
          type="checkbox"
          disabled={isDisabled || isReadOnly}
          readOnly={isReadOnly}
          className={inputClasses}
          checked={isChecked !== undefined ? isChecked : undefined}
          ref={ref}
          {...restProps}
        />
        <span className={spanClasses}></span>
      </label>
    );
  }
);

Switch.displayName = "Switch";

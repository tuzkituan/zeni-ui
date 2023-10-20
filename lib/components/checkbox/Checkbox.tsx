import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { ICheckbox } from "./Checkbox.types";
import { useMemo } from "react";

const defaultProps: Partial<ICheckbox> = {
  children: undefined,
};

export const Checkbox = (props: ICheckbox) => {
  const theme = useComponentStyle("Checkbox");
  const {
    children,
    className = "",
    size = "md",
    isIndeterminate = false,
    isDisabled = false,
    isReadOnly = false,
    isChecked = undefined,
    spacing,
    ...restProps
  } = { ...defaultProps, ...props };

  const containerClasses = useMemo(() => {
    return twMerge(theme.container(), className);
  }, [className, theme]);

  const inputClasses = useMemo(() => {
    return twMerge(
      theme.input({
        size,
        indeterminate: isIndeterminate,
        readOnly: isReadOnly,
      }),
      className
    );
  }, [className, size, isReadOnly, isIndeterminate, theme]);

  const labelClasses = useMemo(() => {
    return twMerge(
      theme.label({
        disabled: isDisabled,
      }),
      className
    );
  }, [className, isDisabled, theme]);

  return (
    <div
      className={containerClasses}
      style={{
        ...(spacing
          ? {
              gap: spacing,
            }
          : null),
      }}
    >
      <input
        id="checkbox"
        aria-describedby="checkbox"
        type="checkbox"
        className={inputClasses}
        disabled={isDisabled}
        readOnly={isReadOnly}
        checked={isChecked !== undefined ? isChecked : undefined}
        ref={(input) => {
          if (input) {
            input.indeterminate = isIndeterminate;
          }
        }}
        {...restProps}
      />
      <label htmlFor="checkbox" className={labelClasses}>
        {children}
      </label>
    </div>
  );
};

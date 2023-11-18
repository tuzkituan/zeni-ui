import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { ICheckbox, ICheckboxGroup } from "./checkbox.types";
import React, { ChangeEvent, useEffect, useMemo, useState } from "react";

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
    return twMerge(
      theme.container(),
      theme.label({
        disabled: isDisabled,
      }),
      className
    );
  }, [className, isDisabled, theme]);

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

  return (
    <label
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
        aria-describedby="checkbox"
        type="checkbox"
        className={inputClasses}
        disabled={isDisabled || isReadOnly}
        readOnly={isReadOnly}
        checked={isChecked !== undefined ? isChecked : undefined}
        ref={(input) => {
          if (input) {
            input.indeterminate = isIndeterminate;
          }
        }}
        {...restProps}
      />
      {children}
    </label>
  );
};

export const CheckboxGroup = ({
  children,
  defaultValue,
  value,
  onChange,
  layout = "horizontal",
  spacing,
}: ICheckboxGroup) => {
  const theme = useComponentStyle("Checkbox");
  const [selectedValues, setSelectedValues] = useState(defaultValue || []);

  useEffect(() => {
    setSelectedValues(value || defaultValue || []);
  }, [value, defaultValue]);

  const handleCheckboxChange = (
    optionValue?: string | number,
    isChecked?: boolean
  ) => {
    if (!optionValue) {
      return;
    }
    if (isChecked) {
      setSelectedValues((prevSelectedValues) => [
        ...prevSelectedValues,
        optionValue,
      ]);
    } else {
      setSelectedValues((prevSelectedValues) =>
        prevSelectedValues.filter((value) => value !== optionValue)
      );
    }
  };

  useEffect(() => {
    if (onChange) {
      onChange(selectedValues);
    }
  }, [selectedValues, onChange]);

  const containerClasses = useMemo(() => {
    return twMerge(
      theme.group({
        layout,
      })
    );
  }, [layout, theme]);

  if (!children) {
    return null;
  }
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
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === Checkbox) {
          const { value: optionValue, ...checkboxProps } =
            child.props as ICheckbox;
          const isChecked = selectedValues.includes(optionValue || "");
          return (
            <Checkbox
              {...checkboxProps}
              isChecked={isChecked}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleCheckboxChange(optionValue, event.target.checked)
              }
            />
          );
        } else {
          console.error(
            "CheckboxGroup only accepts Checkbox components as children"
          );
          return null;
        }
      })}
    </div>
  );
};

import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { IRadio, IRadioGroup } from "./radio.types";
import React, { ChangeEvent, useEffect, useMemo, useState } from "react";

const defaultProps: Partial<IRadio> = {
  children: undefined,
};

export const Radio = (props: IRadio) => {
  const theme = useComponentStyle("Radio");
  const {
    children,
    className = "",
    size = "md",
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
        readOnly: isReadOnly,
      }),
      className
    );
  }, [className, size, isReadOnly, theme]);

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
        aria-describedby="radio"
        type="radio"
        className={inputClasses}
        disabled={isDisabled || isReadOnly}
        readOnly={isReadOnly}
        checked={isChecked !== undefined ? isChecked : undefined}
        {...restProps}
      />
      {children}
    </label>
  );
};

export const RadioGroup = ({
  children,
  defaultValue,
  value,
  onChange,
  layout = "horizontal",
  spacing,
}: IRadioGroup) => {
  const theme = useComponentStyle("Radio");
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  useEffect(() => {
    setSelectedValue(value || defaultValue);
  }, [value, defaultValue]);

  const handleRadioChange = (
    optionValue?: string | number,
    isChecked?: boolean
  ) => {
    if (!optionValue) {
      return;
    }
    if (isChecked) {
      setSelectedValue(optionValue);
    }
  };

  useEffect(() => {
    if (onChange) {
      onChange(selectedValue);
    }
  }, [selectedValue, onChange]);

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
        if (React.isValidElement(child) && child.type === Radio) {
          const { value: optionValue, ...checkboxProps } =
            child.props as IRadio;
          const isChecked = selectedValue === optionValue;
          return (
            <Radio
              {...checkboxProps}
              isChecked={isChecked}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleRadioChange(optionValue, event.target.checked)
              }
            />
          );
        } else {
          console.error("RadioGroup only accepts Radio components as children");
          return null;
        }
      })}
    </div>
  );
};

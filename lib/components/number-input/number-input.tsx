import { useEffect, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import styles from "./number-input.module.scss";
import { INumberInput, INumberInputArrow } from "./number-input.types";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
// import { CaretDown, CaretUp } from "@phosphor-icons/react";

const defaultProps: Partial<INumberInput> = {
  size: "md",
  variant: "filled",
  showArrow: true,
};

const InputContainer = (props: INumberInput) => {
  const { children, variant, size, className } = props;
  const theme = useComponentStyle("NumberInput");

  const containerClasses = useMemo(() => {
    return twMerge(
      theme.container({
        variant,
        size,
      }),
      className
    );
  }, [theme, variant, size, className]);

  return <div className={containerClasses}>{children}</div>;
};

export const NumberInput = (props: INumberInput) => {
  const theme = useComponentStyle("NumberInput");
  const {
    className = "",
    size,
    variant,
    onChange,
    defaultValue,
    value,
    min,
    max,
    step = 1,
    showArrow = true,
    ...restProps
  } = { ...defaultProps, ...props };

  const [number, setNumber] = useState(defaultValue || 0);

  useEffect(() => {
    if (typeof value === "number") {
      setNumber(value);
    }
  }, [value]);

  const inputClasses = useMemo(() => {
    return twMerge(
      theme.input({
        size,
        variant,
      }),
      className,
      styles.NumberInput
    );
  }, [theme, size, variant, className]);

  const arrowContainerClasses = useMemo(() => {
    return twMerge(theme.arrowContainer());
  }, [theme]);

  const arrowDividerClasses = useMemo(() => {
    return twMerge(theme.arrowDivider());
  }, [theme]);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = +e.target.value * 1;
    if ((min || min === 0) && val < +min) {
      return;
    }
    if ((max || max === 0) && val > +max) {
      return;
    }
    setNumber(val);
    onChange && onChange(val);
  };

  const onIncrement = () => {
    const newValue = number * 1 + +step;
    if ((min || min === 0) && newValue < +min) {
      return;
    }
    if ((max || max === 0) && newValue > +max) {
      return;
    }
    setNumber(number * 1 + +step);
    onChange && onChange(number * 1 + +step);
  };

  const onDecrement = () => {
    const newValue = number * 1 - +step;
    if ((min || min === 0) && newValue < +min) {
      return;
    }
    if ((max || max === 0) && newValue > +max) {
      return;
    }
    setNumber(number * 1 - +step);
    onChange && onChange(number * 1 - +step);
  };

  return (
    <InputContainer {...props}>
      <input
        placeholder="Placeholder"
        className={inputClasses}
        type="number"
        inputMode="decimal"
        onChange={onChangeInput}
        value={number}
        defaultValue={defaultValue}
        min={min}
        max={max}
        step={step}
        {...restProps}
      />
      {showArrow && (
        <div className={arrowContainerClasses}>
          <NumberInputArrow onClick={onIncrement}>
            <CaretUp />
          </NumberInputArrow>
          <hr className={arrowDividerClasses} />
          <NumberInputArrow onClick={onDecrement}>
            <CaretDown />
          </NumberInputArrow>
        </div>
      )}
    </InputContainer>
  );
};

const NumberInputArrow = ({
  onClick,
  className,
  children,
}: INumberInputArrow) => {
  const theme = useComponentStyle("NumberInput");
  const classes = useMemo(() => {
    return twMerge(theme.arrow(), className);
  }, [theme, className]);

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};
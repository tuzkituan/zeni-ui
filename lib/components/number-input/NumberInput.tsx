import { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import styles from "./NumberInput.module.scss";
import { INumberInput } from "./NumberInput.types";
// import { CaretDown, CaretUp } from "@phosphor-icons/react";

const defaultProps: Partial<INumberInput> = {
  size: "md",
  variant: "filled",
};

export const InputContainer = (props: INumberInput) => {
  const { children, variant, className } = props;
  const theme = useComponentStyle("NumberInput");

  const containerClasses = useMemo(() => {
    return twMerge(
      theme.container({
        variant,
      }),
      className
    );
  }, [theme, variant, className]);

  return <div className={containerClasses}>{children}</div>;
};

export const NumberInput = (props: INumberInput) => {
  const theme = useComponentStyle("NumberInput");
  const {
    className = "",
    size,
    variant,
    ...restProps
  } = { ...defaultProps, ...props };

  // const [number, setNumber] = useState(defaultValue || value);

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

  // const arrowContainerClasses = useMemo(() => {
  //   return twMerge(theme.arrowContainer(), className, styles.NumberInput);
  // }, [theme, className]);

  // const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const val = +e.target.value * 1;
  //   if ((min || min === 0) && val < min) {
  //     return;
  //   }
  //   if ((max || max === 0) && val > max) {
  //     return;
  //   }
  //   setNumber(val);
  //   onChange && onChange(val);
  // };

  // const onIncrement = () => {
  //   const newValue = number * 1 + step;
  //   if ((min || min === 0) && newValue < min) {
  //     return;
  //   }
  //   if ((max || max === 0) && newValue > max) {
  //     return;
  //   }
  //   setNumber(number * 1 + step);
  //   onChange && onChange(number * 1 + step);
  // };

  // const onDecrement = () => {
  //   const newValue = number * 1 - step;
  //   if ((min || min === 0) && newValue < min) {
  //     return;
  //   }
  //   if ((max || max === 0) && newValue > max) {
  //     return;
  //   }
  //   setNumber(number * 1 - step);
  //   onChange && onChange(number * 1 - step);
  // };

  return (
    <InputContainer {...props}>
      <input
        placeholder="Placeholder"
        className={inputClasses}
        type="number"
        inputMode="decimal"
        {...restProps}
      />
      {/* <div className={arrowContainerClasses}>
        <NumberInputArrow onClick={onIncrement}>
          <CaretUp />
        </NumberInputArrow>
        <NumberInputArrow onClick={onDecrement}>
          <CaretDown />
        </NumberInputArrow>
      </div> */}
    </InputContainer>
  );
};

// const NumberInputArrow = ({
//   onClick,
//   className,
//   children,
// }: INumberInputArrow) => {
//   const theme = useComponentStyle("NumberInput");
//   const classes = useMemo(() => {
//     return twMerge(theme.arrow(), className);
//   }, [theme, className]);

//   return (
//     <button className={classes} onClick={onClick}>
//       {children}
//     </button>
//   );
// };

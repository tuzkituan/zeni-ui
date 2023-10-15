import { IButton } from "./Button.types";
// import styles from "./Button.module.scss";
import { ClassValue, clsx } from "clsx";

export const Button = (props: IButton) => {
  const { className, children, variant, size, isDisabled, ...restProps } =
    props;

  const initialClass = "lv-text-base lv-transition lv-ease-in-out lv-";

  const sizeClass = {
    xs: "",
    sm: "",
    md: "lv-py-2 lv-px-4",
    lg: "",
  } as Record<string, ClassValue>;

  const borderClass = {
    ghost: "lv-rounded-lg",
    outline: "lv-rounded-lg",
    solid: "lv-rounded-lg",
    link: "lv-rounded-lg",
  } as Record<string, ClassValue>;

  const bgClass = {
    ghost: "",
    outline: "",
    solid: "lv-bg-primary",
    link: "",
  } as Record<string, ClassValue>;

  const colorClass = {
    ghost: "",
    outline: "",
    solid: "lv-text-inverse-primary",
    link: "",
  } as Record<string, ClassValue>;

  const activeClass = "active:lv-bg-active";
  const disabledClass = "disabled:lv-bg-disabled";

  const buttonClass = clsx(
    initialClass,
    sizeClass[size],
    borderClass[variant],
    bgClass[variant],
    colorClass[variant],
    activeClass,
    disabledClass,
    className
  );

  return (
    <button className={buttonClass} disabled={isDisabled} {...restProps}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: "solid",
  size: "md",
  spinnerPlacement: "start",
  isDisabled: false,
} as IButton;

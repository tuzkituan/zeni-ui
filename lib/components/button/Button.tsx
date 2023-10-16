import { IButton } from "./Button.types";
// import styles from "./Button.module.scss";
import { CircleNotch } from "@phosphor-icons/react";
import { ClassValue, clsx } from "clsx";

export const Button = (props: IButton) => {
  const {
    className,
    children,
    iconSpacing,
    variant = "solid",
    size = "md",
    isDisabled = false,
    isLoading = false,
    spinnerPlacement = "start",
    spinner,
    leftIcon,
    rightIcon,
    loadingText,
    ...restProps
  } = props;

  const initialClass = "";

  const sizeClass = {
    xs: "lv-py-1 lv-px-2 lv-text-xs",
    sm: "lv-py-1 lv-px-2 lv-text-sm",
    md: "lv-py-2 lv-px-4 lv-text-sm",
    lg: "lv-py-3 lv-px-6 lv-text-lg",
  } as Record<string, ClassValue>;

  const borderClass = {
    ghost: "lv-rounded-md lv-border lv-border-transparent",
    outline: "lv-rounded-md lv-border lv-border-accent",
    solid: "lv-rounded-md lv-border lv-border-transparent",
    link: "lv-rounded-md lv-border lv-border-transparent",
  } as Record<string, ClassValue>;

  const bgClass = {
    ghost: "lv-bg-transparent",
    outline: "lv-bg-transparent",
    solid: "lv-bg-accent",
    link: "lv-bg-transparent",
  } as Record<string, ClassValue>;

  const textClass = {
    ghost: "lv-text-primary",
    outline: "lv-text-accent",
    solid: "lv-text-inverse-primary",
    link: "lv-text-accent lv-underline",
  } as Record<string, ClassValue>;

  const activeClass = {
    ghost: "active:lv-opacity-70",
    outline: "active:lv-opacity-70",
    solid: "active:lv-bg-active",
    link: "active:lv-opacity-70",
  } as Record<string, ClassValue>;

  const disabledClass = {
    ghost: "disabled:lv-opacity-50",
    outline: "disabled:lv-opacity-50",
    solid: "disabled:lv-opacity-50",
    link: "disabled:lv-opacity-50",
  } as Record<string, ClassValue>;

  // LOADING
  const spacingClass = {
    xs: "lv-gap-1",
    sm: "lv-gap-1",
    md: "lv-gap-1.5",
    lg: "lv-gap-2",
  };
  const spinnerSize = {
    xs: 14,
    sm: 16,
    md: 18,
    lg: 20,
  };

  const spinnerRender = spinner ?? (
    <CircleNotch size={spinnerSize[size]} className="lv-animate-spin" />
  );

  // MAIN CLASSES
  const buttonClass = clsx(
    initialClass,
    sizeClass[size],
    borderClass[variant],
    bgClass[variant],
    textClass[variant],
    activeClass[variant],
    disabledClass[variant],
    className
  );
  const containerClass = "lv-flex lv-items-center lv-justify-center";
  const containerStyles: React.CSSProperties = {
    ...(iconSpacing
      ? {
          gap: iconSpacing,
        }
      : {}),
  };

  // RENDER
  const renderLeftIcon = () => {
    if (isLoading && spinnerPlacement === "start") {
      return spinnerRender;
    }
    return leftIcon;
  };

  const renderRightIcon = () => {
    if (isLoading && spinnerPlacement === "end") {
      return spinnerRender;
    }
    return rightIcon;
  };

  return (
    <button
      className={buttonClass}
      disabled={isDisabled || isLoading}
      {...restProps}
    >
      <div
        className={clsx(
          containerClass,
          !iconSpacing ? spacingClass[size] : null
        )}
        style={containerStyles}
      >
        {renderLeftIcon()}
        {isLoading ? loadingText : children}
        {renderRightIcon()}
      </div>
    </button>
  );
};

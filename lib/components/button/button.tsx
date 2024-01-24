import { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import LoadingIcon from "../../assets/icons/LoadingIcon";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { IButton } from "./button.types";

export const Button = (props: IButton) => {
  const theme = useComponentStyle("Button");

  const {
    className = "",
    children,
    iconSpacing,
    variant = "solid",
    size = "md",
    isDisabled,
    isLoading,
    spinnerPlacement = "start",
    spinner,
    leftIcon,
    rightIcon,
    loadingText,
    isDanger,
    ...restProps
  } = props;

  const classes = useMemo(() => {
    return twMerge(theme.base({ size, variant, isDanger }), className);
  }, [className, variant, size, isDanger, theme]);

  const containerStyles: React.CSSProperties = {
    ...(iconSpacing
      ? {
          gap: iconSpacing,
        }
      : {}),
  };

  const spinnerRender = spinner ?? (
    <LoadingIcon
      className={theme.spinner({
        size,
      })}
    />
  );
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
      className={classes}
      disabled={isLoading || isDisabled}
      {...restProps}
    >
      <div className={theme.container()} style={containerStyles}>
        {renderLeftIcon()}
        {isLoading ? loadingText || children : children}
        {renderRightIcon()}
      </div>
    </button>
  );
};

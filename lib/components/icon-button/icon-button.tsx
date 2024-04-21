import { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import LoadingIcon from "../../assets/icons/LoadingIcon";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { IIconButton } from "./icon-button.types";

export const IconButton = (props: IIconButton) => {
  const theme = useComponentStyle("IconButton");

  const {
    className = "",
    variant = "solid",
    size = "md",
    isDisabled,
    isLoading,
    icon,
    spinner,
    isDanger,
    ...restProps
  } = props;

  const classes = useMemo(() => {
    return twMerge(theme.base({ size, variant, isDanger }), className);
  }, [className, variant, size, isDanger, theme]);

  const spinnerRender = spinner ?? (
    <LoadingIcon
      className={theme.spinner({
        size,
      })}
    />
  );

  return (
    <button
      className={classes}
      disabled={isLoading || isDisabled}
      {...restProps}
    >
      <div className={theme.container()}>
        {isLoading ? spinnerRender : icon}
      </div>
    </button>
  );
};

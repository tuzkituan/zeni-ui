import { CheckCircle, Info, WarningCircle } from "@phosphor-icons/react";
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { IAlert } from "./Alert.types";

export const Alert = (props: IAlert) => {
  const theme = useComponentStyle("Alert");
  const {
    title,
    description,
    className = "",
    status = "info",
    variant = "subtle",
    iconSize,
    spacing,
    contentClassName = "",
    icon,
    ...restProps
  } = props;

  const classes = useMemo(() => {
    return twMerge(
      theme.base({
        status,
        variant,
      }),
      className
    );
  }, [className, status, theme, variant]);

  const iconClasses = useMemo(() => {
    return twMerge(
      theme.icon({
        status,
        variant,
      })
    );
  }, [status, theme, variant]);

  const contentClasses = useMemo(() => {
    return twMerge(
      theme.text({
        status,
        variant,
      }),
      contentClassName
    );
  }, [contentClassName, status, theme, variant]);

  const getIcon = (stt: string) => {
    if (icon) {
      return icon;
    }
    switch (stt) {
      case "success":
        return <CheckCircle weight="fill" />;
      case "warning":
        return <WarningCircle weight="fill" />;
      case "error":
        return <WarningCircle weight="fill" />;
      default:
        return <Info weight="fill" />;
    }
  };
  return (
    <div
      className={classes}
      style={{
        ...(spacing
          ? {
              gap: spacing,
            }
          : null),
      }}
      {...restProps}
    >
      <div
        className={iconClasses}
        style={{
          ...(iconSize
            ? {
                fontSize: iconSize,
              }
            : null),
        }}
      >
        {getIcon(status)}
      </div>
      <div className={contentClasses}>
        <p className={theme.titleText()}>{title}</p>
        <p className={theme.descriptionText()}>{description}</p>
      </div>
    </div>
  );
};

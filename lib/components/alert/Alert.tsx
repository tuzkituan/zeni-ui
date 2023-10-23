import { CheckCircle, Info, WarningCircle, X } from "@phosphor-icons/react";
import { useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { IAlert } from "./Alert.types";
import { Button } from "../button/Button";

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
    isClosable,
    onClose,
    ...restProps
  } = props;

  const [show, setShow] = useState(true);

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

  const closeClasses = useMemo(() => {
    return twMerge(
      theme.close(),
      contentClasses
    );
  }, [contentClasses, theme]);

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

  if (!show) {
    return null;
  }
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
      {isClosable && (
        <Button
          variant="unstyled"
          className={closeClasses}
          onClick={() => {
            if (onClose) onClose();
            else setShow(false);
          }}
        >
          <X />
        </Button>
      )}
    </div>
  );
};

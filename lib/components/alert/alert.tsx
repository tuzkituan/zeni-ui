import {
  CheckCircle,
  Info,
  WarningCircle,
  X,
  XCircle,
} from "@phosphor-icons/react";
import { useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { IAlert } from "./alert.types";

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
    onClick,
    extra,
    ...restProps
  } = props;

  const [show, setShow] = useState(true);

  const classes = useMemo(() => {
    return twMerge(
      theme.base({
        status,
        variant,
        isClickable: !!onClick,
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

  const textClasses = useMemo(() => {
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
      theme.close({
        variant,
      }),
      textClasses
    );
  }, [textClasses, variant, theme]);

  const getIcon = (stt: string) => {
    if (icon) {
      return icon;
    }
    switch (stt) {
      case "success":
        return <CheckCircle weight="fill" fontSize={24} />;
      case "warning":
        return <WarningCircle weight="fill" fontSize={24} />;
      case "error":
        return <XCircle weight="fill" fontSize={24} />;
      default:
        return <Info weight="fill" fontSize={24} />;
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
      onClick={onClick}
      {...restProps}
    >
      <div className={theme.mainContent()}>
        <div className={theme.left()}>
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
          <div className={textClasses}>
            {!!title && <p className={theme.titleText()}>{title}</p>}
            {!!description && (
              <p className={theme.descriptionText()}>{description}</p>
            )}
          </div>
        </div>
        {extra}
      </div>
      {isClosable && (
        <button
          className={closeClasses}
          onClick={() => {
            if (onClose) onClose();
            else setShow(false);
          }}
        >
          <X fontSize={20} weight="bold" />
        </button>
      )}
    </div>
  );
};

import {
  CloseCircle,
  CloseSquare,
  InfoCircle,
  TickSquare,
  Warning2,
} from "iconsax-react";
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
      theme.close({
        variant,
      }),
      contentClasses
    );
  }, [contentClasses, variant, theme]);

  const getIcon = (stt: string) => {
    if (icon) {
      return icon;
    }
    switch (stt) {
      case "success":
        return <TickSquare variant="Bold" size={20} />;
      case "warning":
        return <CloseSquare variant="Bold" size={20} />;
      case "error":
        return <Warning2 variant="Bold" size={20} />;
      default:
        return <InfoCircle variant="Bold" size={20} />;
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
        {!!title && <p className={theme.titleText()}>{title}</p>}
        {!!description && (
          <p className={theme.descriptionText()}>{description}</p>
        )}
      </div>
      {isClosable && (
        <button
          className={closeClasses}
          onClick={() => {
            if (onClose) onClose();
            else setShow(false);
          }}
        >
          <CloseCircle size={20} />
        </button>
      )}
    </div>
  );
};

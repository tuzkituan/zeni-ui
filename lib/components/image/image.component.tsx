import { forwardRef, useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { IImage } from "./image.types";

export const ImageComponent = forwardRef<HTMLImageElement, IImage>(
  (props: IImage, ref) => {
    const theme = useComponentStyle("Image");
    const {
      className = "",
      src,
      fallbackSrc = "",
      boxSize,
      borderRadius = 0,
      alt = "",
      objectFit = "cover",
      style,
      ...restProps
    } = props;

    const classes = useMemo(() => {
      return twMerge(theme.img(), className);
    }, [className, theme]);

    return (
      <img
        src={src}
        style={{
          ...(boxSize
            ? {
                width: boxSize,
                height: boxSize,
              }
            : null),
          objectFit,
          borderRadius,
          ...style,
        }}
        alt={alt}
        className={classes}
        onError={(event: React.SyntheticEvent<HTMLImageElement, Event>) => {
          event.currentTarget.onerror = null; // prevents looping
          event.currentTarget.src = fallbackSrc;
        }}
        ref={ref}
        {...restProps}
      />
    );
  }
);

ImageComponent.displayName = "InputComponent";

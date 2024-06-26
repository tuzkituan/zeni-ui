import { useMemo } from "react";
import { renderToString } from "react-dom/server";
import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import useImageStatus from "../../hooks/image.hook";
import { IAvatar } from "./avatar.types";
import { User } from "@phosphor-icons/react";

export const Avatar = (props: IAvatar) => {
  const theme = useComponentStyle("Avatar");
  const {
    className = "",
    src,
    alt,
    size = "md",
    name,
    bgColor,
    borderColor = "",
    style,
    ...restProps
  } = props;

  const { error } = useImageStatus(src);

  const classes = useMemo(() => {
    return twMerge(
      theme.base({
        size,
      }),
      className
    );
  }, [className, size, theme]);

  const letterClasses = useMemo(() => {
    return twMerge(
      theme.name({
        size,
      })
    );
  }, [size, theme]);

  const getInitials = (str: string) => {
    const words = str.split(" ");
    const initials = words
      .map((word) => word.charAt(0))
      .slice(0, 2)
      .join("");
    return initials.toUpperCase();
  };

  const defaultSvgString = renderToString(<User weight="bold" color="#fff" />);
  const defaultImgSrc = `data:image/svg+xml;base64,${btoa(defaultSvgString)}`;
  const nameLetters = name ? getInitials(name) : "";

  return (
    <div
      className={classes}
      style={{
        backgroundColor: bgColor,
        borderColor,
        ...style,
      }}
      {...restProps}
    >
      {!error ? (
        <img
          src={src}
          alt={alt}
          className={theme.img({
            isError: false,
          })}
        />
      ) : name ? (
        <span className={letterClasses}>{nameLetters}</span>
      ) : (
        <img
          src={defaultImgSrc}
          alt={alt}
          className={theme.img({
            size,
            isError: true,
          })}
        />
      )}
    </div>
  );
};

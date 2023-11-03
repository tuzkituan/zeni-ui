import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { ITextarea } from "./textarea.types";
import { useMemo } from "react";

export const Textarea = (props: ITextarea) => {
  const theme = useComponentStyle("Textarea");
  const {
    className = "",
    variant,
    placeholder = "Placeholder",
    isDisabled = false,
    isReadOnly = false,
    isResizable = false,
    ...restProps
  } = props;

  const classes = useMemo(() => {
    return twMerge(
      theme.base({
        variant,
        isDisabled,
        isResizable,
      }),
      className
    );
  }, [theme, variant, className, isResizable, isDisabled]);

  return (
    <textarea
      className={classes}
      placeholder={placeholder}
      disabled={isDisabled}
      readOnly={isReadOnly}
      {...restProps}
    />
  );
};

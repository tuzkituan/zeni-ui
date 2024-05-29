import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { useMemo } from "react";
import { ICard } from "./card.types";

export const Card = (props: ICard) => {
  const theme = useComponentStyle("Card");
  const {
    children,
    className = "",
    title,
    description,
    extra,
    contentClassName = "",
    headerClassName = "",
    ...restProps
  } = props;

  const baseClasses = useMemo(() => {
    return twMerge(theme.base(), className);
  }, [className, theme]);

  const headerClasses = useMemo(() => {
    return twMerge(theme.header(), headerClassName);
  }, [theme, headerClassName]);

  const titleContainerClasses = useMemo(() => {
    return twMerge(theme.titleContainer());
  }, [theme]);

  const titleClasses = useMemo(() => {
    return twMerge(theme.title());
  }, [theme]);

  const descriptionClasses = useMemo(() => {
    return twMerge(theme.description());
  }, [theme]);

  const extraClasses = useMemo(() => {
    return twMerge(theme.extra());
  }, [theme]);

  const contentClasses = useMemo(() => {
    return twMerge(
      theme.content({
        hasHeader: !!title || !!description || !!extra,
      }),
      contentClassName
    );
  }, [theme, contentClassName, title, description, extra]);

  return (
    <div className={baseClasses} {...restProps}>
      {title || description || extra ? (
        <div className={headerClasses}>
          <div className={titleContainerClasses}>
            <div className={titleClasses}>{title}</div>
            {description ? (
              <div className={descriptionClasses}>{description}</div>
            ) : null}
          </div>
          {extra ? <div className={extraClasses}>{extra}</div> : null}
        </div>
      ) : null}
      <div className={contentClasses}>{children}</div>
    </div>
  );
};

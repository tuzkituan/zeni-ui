import { AnimatePresence, motion } from "framer-motion";
import { useMemo } from "react";
import { Arrow, useHover, useLayer } from "react-laag";
import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { ITooltip } from "./tooltip.types";

export const Tooltip = ({
  children,
  content,
  placement,
  tooltipClassName,
}: ITooltip) => {
  const [isHover, hoverProps] = useHover({
    delayLeave: 200,
  });

  const theme = useComponentStyle("Tooltip");

  const { triggerProps, layerProps, renderLayer, arrowProps } = useLayer({
    isOpen: isHover,
    placement,
    auto: true,
    triggerOffset: 10,
  });

  const classes = useMemo(() => {
    return twMerge(theme.base(), tooltipClassName);
  }, [tooltipClassName, theme]);

  const arrowClasses = useMemo(() => {
    return twMerge(theme.arrow());
  }, [theme]);

  return (
    <>
      <span {...triggerProps} {...hoverProps}>
        {children}
      </span>
      {isHover &&
        renderLayer(
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={classes}
              {...layerProps}
              {...hoverProps}
            >
              {content}
              <Arrow
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                {...arrowProps}
                backgroundColor="black"
                className={arrowClasses}
                borderWidth={1}
                size={6}
              />
            </motion.div>
          </AnimatePresence>
        )}
    </>
  );
};

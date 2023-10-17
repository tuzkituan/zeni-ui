import { useHover, useLayer } from "react-laag";
import { twMerge } from "tailwind-merge";
import { useComponentTheme } from "../../theme/theme.context";
import { AnimatePresence, motion } from "framer-motion";
import { ITooltip } from "./Tooltip.types";
import { useMemo } from "react";

export const Tooltip = ({
  children,
  content,
  placement,
  tooltipClassName,
}: ITooltip) => {
  const [isHover, hoverProps] = useHover();

  const theme = useComponentTheme("Tooltip");

  const { triggerProps, layerProps, renderLayer } = useLayer({
    isOpen: isHover,
    placement,
    auto: true,
    triggerOffset: 5,
  });

  const classes = useMemo(() => {
    return twMerge(theme.base(), tooltipClassName);
  }, [tooltipClassName, theme]);

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
            >
              {content}
            </motion.div>
          </AnimatePresence>
        )}
    </>
  );
};

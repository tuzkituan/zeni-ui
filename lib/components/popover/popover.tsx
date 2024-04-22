import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Arrow, useHover, useLayer } from "react-laag";
import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { IPopover } from "./popover.types";

export const Popover = ({
  children,
  content,
  placement,
  open,
  onOpenChange,
  popoverClassName,
  trigger = "hover",
}: IPopover) => {
  const isHoverTrigger = trigger === "hover";
  const [isOpen, setOpen] = useState(false);
  const [isHover, hoverProps] = useHover({
    delayLeave: 200,
  });

  const theme = useComponentStyle("Popover");

  const { triggerProps, layerProps, renderLayer, arrowProps } = useLayer({
    isOpen: open || isOpen || isHover,
    placement,
    auto: true,

    triggerOffset: 10,
    onOutsideClick: () => {
      onOpenChange && onOpenChange(false);
      setOpen(false);
    },
  });

  const classes = useMemo(() => {
    return twMerge(theme.base(), popoverClassName);
  }, [popoverClassName, theme]);

  const arrowClasses = useMemo(() => {
    return twMerge(theme.arrow());
  }, [theme]);

  return (
    <>
      <span
        {...(!isHoverTrigger
          ? {
              onClick: () => {
                const _isOpen = !isOpen;
                setOpen(_isOpen);
                onOpenChange && onOpenChange(_isOpen);
              },
            }
          : hoverProps)}
        {...triggerProps}
      >
        {children}
      </span>
      {(isHover || open || isOpen) &&
        renderLayer(
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={classes}
              {...layerProps}
              {...(isHoverTrigger ? hoverProps : null)}
            >
              {content}
              <Arrow
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                {...arrowProps}
                backgroundColor="var(--color-neutral-5)" // color-component-background
                borderColor="transparent"
                className={arrowClasses}
                borderWidth={1}
                size={8}
              />
            </motion.div>
          </AnimatePresence>
        )}
    </>
  );
};

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { useLayer } from "react-laag";
import { twMerge } from "tailwind-merge";
import { useComponentTheme } from "../../theme/theme.context";
import { IPopover } from "./Popover.types";

export const Popover = ({
  children,
  content,
  placement,
  open,
  onOpenChange,
  popoverClassName,
}: IPopover) => {
  const [isOpen, setOpen] = useState(false);

  const theme = useComponentTheme("Popover");

  const { triggerProps, layerProps, renderLayer } = useLayer({
    isOpen: open || isOpen,
    placement,
    auto: true,
    triggerOffset: 5,
    onOutsideClick: () => {
      onOpenChange && onOpenChange(false);
      setOpen(false);
    },
  });

  const classes = useMemo(() => {
    return twMerge(theme.base(), popoverClassName);
  }, [popoverClassName, theme]);

  return (
    <>
      <span
        {...triggerProps}
        onClick={() => {
          const _isOpen = !isOpen;
          setOpen(_isOpen);
          onOpenChange && onOpenChange(_isOpen);
        }}
      >
        {children}
      </span>
      {(open || isOpen) &&
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

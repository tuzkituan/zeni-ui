import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Arrow, useHover, useLayer } from "react-laag";
import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { IMenu, IMenuItem, IMenuKey } from "./menu.types";

export const Menu = ({
  children,
  placement,
  open,
  onOpenChange,
  dropdownClassName,
  items = [],
  onMenuClick,
  showArrow = true,
  trigger = "click",
}: IMenu) => {
  const isHoverTrigger = trigger === "hover";
  const [isOpen, setOpen] = useState(false);
  const [isHover, hoverProps] = useHover({
    delayEnter: 200,
    delayLeave: 200,
  });

  const theme = useComponentStyle("Menu");

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
    return twMerge(theme.base(), dropdownClassName);
  }, [dropdownClassName, theme]);

  const itemIconClasses = useMemo(() => {
    return twMerge(theme.itemIcon());
  }, [theme]);

  const arrowClasses = useMemo(() => {
    return twMerge(theme.arrow());
  }, [theme]);

  const onMenuItemClick = (value: IMenuKey) => {
    if (value) {
      onMenuClick && onMenuClick(value);
    }
    setOpen(false);
    onOpenChange && onOpenChange(false);
  };

  const renderMenuItems = () => {
    return items.map((x: IMenuItem) => (
      <li
        key={x.key}
        value={x.key}
        className={twMerge(
          theme.item({
            isDisabled: x.isDisabled || false,
          })
        )}
        onClick={x.isDisabled ? undefined : () => onMenuItemClick(x.key)}
      >
        {!!x.icon && <div className={itemIconClasses}>{x.icon}</div>}
        {x.title}
      </li>
    ));
  };

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
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={classes}
              transition={{ duration: 0.3 }}
              {...layerProps}
              {...(isHoverTrigger ? hoverProps : null)}
            >
              {renderMenuItems()}
              {showArrow && (
                <Arrow
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  {...arrowProps}
                  backgroundColor="white" // color-component-background
                  borderColor="transparent"
                  className={arrowClasses}
                  borderWidth={1}
                  size={8}
                />
              )}
            </motion.ul>
          </AnimatePresence>
        )}
    </>
  );
};

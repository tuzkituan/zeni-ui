import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Arrow, useLayer } from "react-laag";
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
}: IMenu) => {
  const [isOpen, setOpen] = useState(false);

  const theme = useComponentStyle("Menu");

  const { triggerProps, layerProps, arrowProps, renderLayer } = useLayer({
    isOpen: open || isOpen,
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

  const itemClasses = useMemo(() => {
    return twMerge(theme.item());
  }, [theme]);

  const arrowClasses = useMemo(() => {
    return twMerge(theme.arrow());
  }, [theme]);

  const onMenuItemClick = (value: IMenuKey) => {
    if (value) {
      onMenuClick?.(value);
    }
  };

  const renderMenuItems = () => {
    return items.map((x: IMenuItem) => (
      <li
        key={x.key}
        value={x.key}
        className={itemClasses}
        onClick={(e) => onMenuItemClick((e.target as HTMLInputElement).value)}
      >
        {x.title}
      </li>
    ));
  };

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
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={classes}
              {...layerProps}
            >
              {renderMenuItems()}
              <Arrow
                {...arrowProps}
                backgroundColor="var(--background-sec)"
                borderColor="var(--line-primary)"
                className={arrowClasses}
                borderWidth={1}
                size={8}
              />
            </motion.ul>
          </AnimatePresence>
        )}
    </>
  );
};

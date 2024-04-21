import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { ITabs } from "./tabs.types";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Tabs = (props: ITabs) => {
  const theme = useComponentStyle("Tabs");
  const {
    className = "",
    defaultActiveKey,
    activeKey,
    onTabChange,
    items,
    variant = "underline",
    isFitted = false,
    navClassName = "",
    ulClassName = "",
    tabClassName = "",
    contentClassName = "",
    ...restProps
  } = props;

  const [active, setActive] = useState(
    defaultActiveKey || activeKey || items?.[0]?.key
  );

  useEffect(() => {
    if (activeKey) {
      setActive(activeKey);
    }
  }, [activeKey]);

  // CLASSES
  const containerClasses = useMemo(() => {
    return twMerge(theme.container(), className);
  }, [className, theme]);

  const navClasses = useMemo(() => {
    return twMerge(
      theme.nav({
        variant,
      }),
      navClassName
    );
  }, [theme, navClassName, variant]);

  const ulClasses = useMemo(() => {
    return twMerge(
      theme.ul({
        variant,
      }),
      ulClassName
    );
  }, [theme, ulClassName, variant]);

  const contentClasses = useMemo(() => {
    return twMerge(theme.content(), contentClassName);
  }, [theme, contentClassName]);

  const activeTabItem = useMemo(() => {
    return items.find((item) => item.key === active);
  }, [active, items]);

  return (
    <div className={containerClasses} {...restProps}>
      <nav className={navClasses}>
        <ul className={ulClasses}>
          {items.map((item) => (
            <li
              key={item.key}
              className={twMerge(
                theme.li({
                  variant,
                  isFitted,
                  isSelected: item.key === active,
                  isDisabled: !!item.disabled,
                }),
                tabClassName
              )}
              onClick={() => {
                if (item.key && !item.disabled) {
                  setActive(item.key);
                  onTabChange?.(item.key);
                }
              }}
            >
              <span>
                {item.icon} {item.label}
              </span>
              {item.key === active && variant === "underline" ? (
                <div className={theme.indicator()} />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={active ? activeTabItem?.key : "empty"}
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -5, opacity: 0 }}
            transition={{ duration: 0.1 }}
            className={contentClasses}
          >
            {activeTabItem?.content}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

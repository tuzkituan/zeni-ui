import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { ISpinner } from "./spinner.types";
import { useMemo } from "react";
import { CircleNotch } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";

export const Spinner = (props: ISpinner) => {
  const theme = useComponentStyle("Spinner");
  const {
    children,
    className = "",
    size = "md",
    icon,
    opacity = 0.6,
    isLoading = false,
    description,
  } = props;

  const spinnerClasses = useMemo(() => {
    return twMerge(
      theme.spinner({
        size,
      }),
      className
    );
  }, [className, theme, size]);

  const containerClasses = useMemo(() => {
    return twMerge(theme.container());
  }, [theme]);

  const overlayClasses = useMemo(() => {
    return twMerge(theme.overlay());
  }, [theme]);

  const renderSpinner = () => {
    return (
      <div>
        {icon || <CircleNotch className={spinnerClasses} weight="bold" />}
      </div>
    );
  };

  if (!children) {
    return renderSpinner();
  }

  return (
    <div className={containerClasses}>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3,
            }}
            key="spinner"
          >
            <div
              className={overlayClasses}
              style={{
                backgroundColor: `rgba(255,255,255,${opacity})`,
              }}
            >
              {renderSpinner()}
              {!!description && (
                <p className={theme.description()}>{description}</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </div>
  );
};

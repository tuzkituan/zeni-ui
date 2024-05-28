import { AnimatePresence, motion } from "framer-motion";
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import LoadingIcon from "../../assets/icons/LoadingIcon";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { isEmpty } from "../../functions";
import { ISpinner } from "./spinner.types";

export const Spinner = (props: ISpinner) => {
  const theme = useComponentStyle("Spinner");
  const {
    children,
    className = "",
    size = "md",
    icon,
    isLoading = false,
    description,
    overlayClassName = "",
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
    return twMerge(theme.overlay(), overlayClassName);
  }, [theme, overlayClassName]);

  const renderSpinner = () => {
    return (
      <div>
        {icon || (
          <LoadingIcon
            className={spinnerClasses}
            color="rgb(var(--color-primary-500))"
          />
        )}
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
            <div className={overlayClasses}>
              {renderSpinner()}
              {!isEmpty(description) && (
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

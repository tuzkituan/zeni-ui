import { AnimatePresence, motion } from "framer-motion";
import {
  CloseCircle,
  CloseSquare,
  InfoCircle,
  TickSquare,
  Warning2,
} from "iconsax-react";
import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { Button } from "../button/button";
import { IModal } from "./modal.types";

export const Modal = (props: IModal) => {
  const theme = useComponentStyle("Modal");
  const {
    children,
    className = "",
    isOpen,
    onCancel,
    closeIcon,
    isCentered = false,
    maskClosable = true,
    showHeader = true,
    title,
    backdropClassName = "",
    isClosable = true,
    customHeader,
    footer,
    onOk,
    okText = "Submit",
    cancelText = "Cancel",
    variant = "",
  } = props;

  const backdropClasses = useMemo(() => {
    return twMerge(theme.backdrop(), backdropClassName);
  }, [theme, backdropClassName]);

  const containerClasses = useMemo(() => {
    return twMerge(
      theme.container({
        isCentered,
      }),
      className
    );
  }, [className, isCentered, theme]);

  const closeClasses = useMemo(() => {
    return twMerge(theme.close());
  }, [theme]);

  const contentClasses = useMemo(() => {
    return twMerge(
      theme.content({
        showHeader: showHeader && !!title,
      })
    );
  }, [theme, title, showHeader]);

  const footerClasses = useMemo(() => {
    return twMerge(
      theme.footer({
        ...(variant && { variant }),
      })
    );
  }, [theme, variant]);

  const okButtonClasses = useMemo(() => {
    return twMerge(
      theme.okButton({
        ...(variant && { variant }),
      })
    );
  }, [theme, variant]);

  const getVariantIcon = () => {
    switch (variant) {
      case "error":
        return <CloseSquare variant="Bold" size={20} />;
      case "success":
        return <TickSquare variant="Bold" size={20} />;
      case "info":
        return <InfoCircle variant="Bold" size={20} />;
      case "warning":
        return <Warning2 variant="Bold" size={20} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return createPortal(
    <AnimatePresence
      // Disable any initial animations on children that
      // are present when the component is first rendered
      initial={false}
      // Only render one component at a time.
      // The exiting component will finish its exit
      // animation before entering component is rendered
      mode="wait"
      // Fires when all exiting nodes have completed animating out
      onExitComplete={() => null}
    >
      {isOpen && (
        <motion.div
          onClick={maskClosable ? onCancel : undefined}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={backdropClasses}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className={containerClasses}
            initial={{
              opacity: 0,
              scale: 0.75,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                ease: "easeOut",
                duration: 0.15,
              },
            }}
            exit={{
              opacity: 0,
              scale: 0.75,
              transition: {
                ease: "easeIn",
                duration: 0.15,
              },
            }}
          >
            {isClosable && (
              <div className={closeClasses}>
                <button onClick={onCancel}>
                  {closeIcon || <CloseCircle size={24} />}
                </button>
              </div>
            )}
            {showHeader && title && !customHeader && (
              <div className={theme.header()}>
                <div className={theme.titleContainer()}>
                  {!!variant && (
                    <div
                      className={theme.titleIcon({
                        variant,
                      })}
                    >
                      {getVariantIcon()}
                    </div>
                  )}
                  <div className={theme.title()}>{title}</div>
                </div>
              </div>
            )}
            {customHeader || null}
            <div className={contentClasses}>{children}</div>
            {footer || (
              <div className={footerClasses}>
                <Button variant="text" onClick={onCancel}>
                  {cancelText}
                </Button>
                <Button
                  variant="solid"
                  onClick={onOk}
                  className={okButtonClasses}
                >
                  {okText}
                </Button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

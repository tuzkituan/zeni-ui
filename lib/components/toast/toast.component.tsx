import { Variants, motion, useIsPresent } from "framer-motion";
import { memo, useEffect, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Alert } from "../alert/alert";
import { ToastProviderProps } from "./toast.provider";
import { ToastOptions } from "./toast.types";
import { useTimeout } from "./toast.utils";
import { useComponentStyle } from "../../customization/styles/theme.context";

const toastMotionVariants: Variants = {
  initial: (props: ToastOptions) => {
    const { position = "" } = props;

    const dir = ["top", "bottom"].includes(position) ? "y" : "x";

    let factor = ["top-right", "bottom-right"].includes(position) ? 1 : -1;
    if (position === "bottom") factor = 1;

    return {
      opacity: 0,
      [dir]: factor * 24,
    };
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.3, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1],
    },
  },
};

export interface ToastComponentProps
  extends ToastOptions,
    Pick<ToastProviderProps, "toastSpacing"> {}

export const ToastComponent = memo((props: ToastComponentProps) => {
  const theme = useComponentStyle("Toast");
  const {
    // id,
    description,
    icon,
    isClosable,
    status,
    title,
    variant,
    onCloseComplete,
    onRequestRemove,
    requestClose = false,
    position = "bottom",
    duration = 5000,
    onClick,
  } = props;

  const [delay, setDelay] = useState<number | null>(duration);
  const isPresent = useIsPresent();

  useEffect(() => {
    if (!isPresent) {
      onCloseComplete?.();
    }
  }, [isPresent]);

  useEffect(() => {
    setDelay(duration);
  }, [duration]);

  const onMouseEnter = () => setDelay(null);
  const onMouseLeave = () => setDelay(duration);

  const close = () => {
    if (isPresent) onRequestRemove?.();
  };

  useEffect(() => {
    if (isPresent && requestClose) {
      onRequestRemove?.();
    }
  }, [isPresent, requestClose, onRequestRemove]);

  useTimeout(close, delay);

  const toastClasses = useMemo(() => {
    return twMerge(theme.alert());
  }, [theme]);

  const toastContainer = useMemo(() => {
    return twMerge(
      theme.alertContainer({
        isRighty: position.includes("right"),
        isLefty: position.includes("left"),
      })
    );
  }, [theme, position]);

  return (
    <motion.div
      layout
      initial="initial"
      animate="animate"
      exit="exit"
      variants={toastMotionVariants}
      onHoverStart={onMouseEnter}
      onHoverEnd={onMouseLeave}
      custom={{ position }}
      className={toastContainer}
    >
      <div
        style={{
          pointerEvents: "auto",
        }}
      >
        <Alert
          description={description}
          title={title}
          isClosable={isClosable}
          status={status}
          icon={icon}
          variant={variant}
          className={toastClasses}
          onClose={close}
          onClick={onClick}
        />
      </div>
    </motion.div>
  );
});

ToastComponent.displayName = "ToastComponent";

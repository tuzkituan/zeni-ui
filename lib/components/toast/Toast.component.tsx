import { Variants, motion, useIsPresent } from "framer-motion";
import { memo, useEffect, useMemo, useState } from "react";
import { ToastProviderProps } from "./Toast.provider";
import { ToastOptions } from "./Toast.types";
import { getToastStyle, useTimeout } from "./Toast.utils";
import { Alert } from "../alert/Alert";

const toastMotionVariants: Variants = {
  initial: (props: ToastOptions) => {
    const { position = '' } = props
    
    const dir = ["top", "bottom"].includes(position) ? "y" : "x"

    let factor = ["top-right", "bottom-right"].includes(position) ? 1 : -1
    if (position === "bottom") factor = 1

    return {
      opacity: 0,
      [dir]: factor * 24,
    }
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
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
}

export interface ToastComponentProps
  extends ToastOptions,
    Pick<ToastProviderProps, "toastSpacing"> {}

export const ToastComponent = memo((props: ToastComponentProps) => {
  const {
    id,
    description,
    icon,
    isClosable,
    onClose,
    status,
    title,
    variant,
    onCloseComplete,
    onRequestRemove,
    requestClose = false,
    position = "bottom",
    duration = 5000,
    toastSpacing = "6px",
  } = props;
 

  const [delay, setDelay] = useState(duration);
  const isPresent = useIsPresent();

  useEffect(() => {
    if (!isPresent) {
      onCloseComplete?.();
    }
  }, [isPresent]);

  useEffect(() => {
    setDelay(duration);
  }, [duration]);

  const onMouseEnter = () => setDelay(0);
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

  const containerStyles = useMemo(
    () => ({
      margin: toastSpacing,
    }),
    [toastSpacing]
  );

  const toastStyle = useMemo(() => getToastStyle(position), [position]);

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
      style={toastStyle}
    >
      <div style={containerStyles}>
        <Alert
          description={description}
          title={title}
          id={id?.toString()}
          isClosable={isClosable}
          status={status}
          icon={icon}
          variant={variant}
          className="min-w-[250px] max-w-[500px] rounded-lg overflow-hidden shadow-sm"
          onClose={onClose}
        />
      </div>
    </motion.div>
  );
});

ToastComponent.displayName = "ToastComponent";

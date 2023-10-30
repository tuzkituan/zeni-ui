import { motion, useIsPresent } from "framer-motion";
import { memo, useEffect, useMemo, useState } from "react";
import { ToastProviderProps } from "./Toast.provider";
import { ToastOptions } from "./Toast.types";
import { runIfFn, useTimeout } from "./Toast.utils";

export interface ToastComponentProps
  extends ToastOptions,
    Pick<ToastProviderProps, "toastSpacing"> {}

export const ToastComponent = memo((props: ToastComponentProps) => {
  const {
    id,
    message,
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

  const onMouseEnter = () => setDelay(null);
  const onMouseLeave = () => setDelay(duration);

  const close = () => {
    if (isPresent) onRequestRemove();
  };

  useEffect(() => {
    if (isPresent && requestClose) {
      onRequestRemove();
    }
  }, [isPresent, requestClose, onRequestRemove]);

  useTimeout(close, delay);

  const containerStyles = useMemo(
    () => ({
      margin: toastSpacing,
    }),
    [toastSpacing]
  );

  return (
    <motion.div
      layout
      className="chakra-toast"
      initial="initial"
      animate="animate"
      exit="exit"
      onHoverStart={onMouseEnter}
      onHoverEnd={onMouseLeave}
      custom={{ position }}
    >
      <div style={containerStyles}>
        {runIfFn(message, { id, onClose: close })}
      </div>
    </motion.div>
  );
});

ToastComponent.displayName = "ToastComponent";

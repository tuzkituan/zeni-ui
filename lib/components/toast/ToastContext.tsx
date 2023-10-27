import {
  CSSProperties,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import { IToast, TOAST_PLACEMENTS } from "./Toast.types";
import { Toast } from "./Toast";
import { AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

interface ToastContextType {
  show: (toast: IToast) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<IToast[]>([]);

  const show = (toast: IToast) => {
    const newToast: IToast = {
      isClosable: true,
      ...toast,
      id: Math.random().toString(),
    };
    setToasts((prevToasts) => [...prevToasts, newToast]);
    if (toast.duration !== 0) {
      setTimeout(() => {
        removeToast(newToast.id);
      }, toast.duration || 5000);
    }
  };

  const removeToast = (id?: string) => {
    if (id) {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }
  };

  const getPosition = (placement: string) => {
    switch (placement) {
      case "top-left":
        return { top: 12, left: 12, flexDirection: "column-reverse" };
      case "top-right":
        return { top: 12, right: 12, flexDirection: "column-reverse" };
      case "bottom-left":
        return { bottom: 12, left: 12 };
      case "bottom-right":
        return { bottom: 12, right: 12 };
      default:
        return { bottom: 12, right: 12 };
    }
  };

  const renders = TOAST_PLACEMENTS.map((x) => {
    const filter = toasts.filter(
      (toast) =>
        toast.placement === x || (x === "bottom-right" && !toast.placement)
    );
    return (
      <div
        className="flex flex-col gap-2"
        style={{
          position: "fixed",
          ...(getPosition(x) as CSSProperties),
        }}
        key={x}
      >
        <AnimatePresence mode={"sync"}>
          {filter.map((toast) => (
            <Toast key={toast.id} {...toast} onClose={removeToast} />
          ))}
        </AnimatePresence>
      </div>
    );
  });

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      {createPortal(renders, document.body)}
    </ToastContext.Provider>
  );
};

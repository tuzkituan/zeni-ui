import { AnimatePresence } from "framer-motion";
import { createContext, useContext, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";
import { ToastComponent } from "./toast.component";
import { toastStore } from "./toast.store";
import { CloseAllToastsOptions, ToastId, ToastOptions } from "./toast.types";
import { useComponentStyle } from "../../customization/styles/theme.context";

export interface ToastMethods {
  notify: (options?: ToastOptions) => ToastId;
  close: (id: ToastId) => void;
  closeAll: (options?: CloseAllToastsOptions) => void;
  update: (id: ToastId, options: Omit<ToastOptions, "id">) => void;
  isActive: (id: ToastId) => boolean;
}

export type ToastProviderProps = React.PropsWithChildren<{
  defaultOptions?: ToastOptions;
  toastSpacing?: string | number;
}>;

const ToastOptionContext = createContext<ToastOptions | undefined>(undefined);

export const ToastOptionProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value?: ToastOptions;
}) => {
  return (
    <ToastOptionContext.Provider value={value || {}}>
      {children}
    </ToastOptionContext.Provider>
  );
};

export const useToastOptionContext = () => {
  const context = useContext(ToastOptionContext);
  if (context === undefined) {
    throw new Error(
      "useToastOptionContext must be used within a ToastOptionProvider"
    );
  }
  return context;
};

export const ToastProvider = (props: ToastProviderProps) => {
  const theme = useComponentStyle("Toast");
  const { toastSpacing = "6px" } = props;
  const state = useSyncExternalStore(
    toastStore.subscribe,
    toastStore.getState,
    toastStore.getState
  );

  const stateKeys = Object.keys(state) as (keyof typeof state)[];
  const toastList = stateKeys.map((position) => {
    const toasts = state[position];

    const toastContainer = twMerge(
      theme.toastsContainer({
        isTopOrBottom: position === "top" || position === "bottom",
        isRighty: position.includes("right"),
        isLefty: position.includes("left"),
        bottom: position.includes("bottom"),
        top: position.includes("top"),
        left: !position.includes("right"),
        right: !position.includes("left"),
      })
    );

    return (
      <div
        role="region"
        aria-live="polite"
        aria-label={`Notifications-${position}`}
        key={position}
        id={`chakra-toast-manager-${position}`}
        className={toastContainer}
        style={{
          ...(toastSpacing
            ? {
                gap: toastSpacing,
              }
            : null),
        }}
      >
        <AnimatePresence initial={false}>
          {toasts.map((toast) => (
            <ToastComponent key={toast.id} {...toast} />
          ))}
        </AnimatePresence>
      </div>
    );
  });

  return createPortal(toastList, document.body);
};

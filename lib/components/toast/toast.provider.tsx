import { createContext, useContext, useSyncExternalStore } from "react";
import { CloseAllToastsOptions, ToastId, ToastOptions } from "./toast.types";
import { toastStore } from "./toast.store";
import { createPortal } from "react-dom";
import { AnimatePresence } from "framer-motion";
import { ToastComponent } from "./toast.component";
import { getToastListStyle } from "./toast.utils";

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
  const { toastSpacing } = props;
  const state = useSyncExternalStore(
    toastStore.subscribe,
    toastStore.getState,
    toastStore.getState
  );

  const stateKeys = Object.keys(state) as (keyof typeof state)[];
  const toastList = stateKeys.map((position) => {
    const toasts = state[position];

    return (
      <div
        role="region"
        aria-live="polite"
        aria-label={`Notifications-${position}`}
        key={position}
        id={`chakra-toast-manager-${position}`}
        style={getToastListStyle(position)}
      >
        <AnimatePresence initial={false}>
          {toasts.map((toast) => (
            <ToastComponent
              key={toast.id}
              toastSpacing={toastSpacing}
              
              {...toast}
            />
          ))}
        </AnimatePresence>
      </div>
    );
  });

  return createPortal(toastList, document.body);
};

import { createContext, useContext, useSyncExternalStore } from "react";
import { CloseAllToastsOptions, ToastId, ToastMessage, ToastOptions } from "./Toast.types";
import { toastStore } from "./Toast.store";
import { createPortal } from "react-dom";
import { AnimatePresence } from "framer-motion";
import { UseToastOptions } from "./useToast";
import { ToastComponent, ToastComponentProps } from "./Toast.component";
import { getToastListStyle } from "./Toast.utils";

export type CreateToastOptions = Partial<
  Pick<
    ToastOptions,
    | "status"
    | "duration"
    | "position"
    | "id"
  >
>

export interface ToastMethods {
  notify: (message: ToastMessage, options?: CreateToastOptions) => ToastId;
  close: (id: ToastId) => void;
  closeAll: (options?: CloseAllToastsOptions) => void
  update: (id: ToastId, options: Omit<UseToastOptions, "id">) => void;
  isActive: (id: ToastId) => boolean;
}

export type ToastProviderProps = React.PropsWithChildren<{
  defaultOptions?: UseToastOptions;
  toastSpacing?: string | number;
  component?: React.FC<ToastComponentProps>
}>;

const ToastOptionContext = createContext<UseToastOptions | undefined>(undefined);

export const ToastOptionProvider = ({ children }: {
  children: React.ReactNode
}) => {
  const toastOptions = { /* Define your toast options here */ };
  
  return (
    <ToastOptionContext.Provider value={toastOptions}>
      {children}
    </ToastOptionContext.Provider>
  );
};

export const useToastOptionContext = () => {
  const context = useContext(ToastOptionContext);
  if (context === undefined) {
    throw new Error('useToastOptionContext must be used within a ToastOptionProvider');
  }
  return context;
};


export const ToastProvider = (props: ToastProviderProps) => {
  const state = useSyncExternalStore(
    toastStore.subscribe,
    toastStore.getState,
    toastStore.getState
  );

  const {
    component: Component = ToastComponent,
  } = props

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
            <Component key={toast.id} {...toast} />
          ))}
        </AnimatePresence>
      </div>
    );
  });

  return createPortal(toastList, document.body);
};
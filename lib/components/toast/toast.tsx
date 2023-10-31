import { toastStore } from "./toast.store";
import { ToastId, ToastOptions } from "./toast.types";


export function createToastFn(defaultOptions?: ToastOptions) {
  const normalizeToastOptions = (options?: ToastOptions) => ({
    ...defaultOptions,
    ...options,
    position: options?.position || defaultOptions?.position || "top-right",
  });

  const toast = (options?: ToastOptions) => {
    return toastStore.notify(options);
  };

  toast.update = (id: ToastId, options: Omit<ToastOptions, "id">) => {
    toastStore.update(id, normalizeToastOptions(options));
  };

  toast.closeAll = toastStore.closeAll
  toast.close = toastStore.close;
  toast.isActive = toastStore.isActive;

  return toast;
}

export type CreateToastFnReturn = ReturnType<typeof createToastFn>;

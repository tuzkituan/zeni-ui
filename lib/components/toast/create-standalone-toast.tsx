import { CreateToastFnReturn, createToastFn } from "./toast";
import { ToastProvider, ToastProviderProps } from "./toast.provider";
import { ToastOptions } from "./toast.types";

const defaults: ToastOptions = {
  duration: 5000,
};

export interface CreateStandAloneToastParam
  extends Partial<{
      defaultOptions: ToastOptions;
    }>,
    ToastProviderProps {}

export const defaultStandaloneParam: CreateStandAloneToastParam &
  Required<Omit<CreateStandAloneToastParam, keyof ToastProviderProps>> = {
  defaultOptions: defaults,
};

export interface CreateStandaloneToastReturn {
  ToastContainer: () => JSX.Element;
  toast: CreateToastFnReturn;
}

/**
 * Create a toast
 */
export function createStandaloneToast({
  defaultOptions = defaultStandaloneParam.defaultOptions,
  toastSpacing,
}: CreateStandAloneToastParam = defaultStandaloneParam): CreateStandaloneToastReturn {
  const ToastContainer = () => (
    <ToastProvider
      defaultOptions={defaultOptions}
      toastSpacing={toastSpacing}
    />
  );

  return {
    ToastContainer,
    toast: createToastFn(defaultOptions),
  };
}

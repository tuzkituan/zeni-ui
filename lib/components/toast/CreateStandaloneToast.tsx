import { CreateToastFnReturn, createToastFn } from "./Toast";
import { ToastProvider, ToastProviderProps } from "./Toast.provider";
import { UseToastOptions } from "./useToast";

const defaults: UseToastOptions = {
  duration: 5000,
};

export interface CreateStandAloneToastParam
  extends Partial<{
      defaultOptions: UseToastOptions;
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
  component,
}: CreateStandAloneToastParam = defaultStandaloneParam): CreateStandaloneToastReturn {
  const ToastContainer = () => (
    <ToastProvider
      defaultOptions={defaultOptions}
      toastSpacing={toastSpacing}
      component={component}
    />
  );

  return {
    ToastContainer,
    toast: createToastFn(defaultOptions),
  };
}

import { Alert } from "../alert/Alert";
import { toastStore } from "./Toast.store";
import { RenderProps, ToastId } from "./Toast.types";
import { UseToastOptions } from "./useToast";

export interface ToastProps extends UseToastOptions {
  onClose?: () => void;
}

export const Toast = (props: ToastProps) => {
  const { title, description, status, icon, isClosable, id } = props;
  return (
    <Alert
      description={description}
      title={title}
      id={id?.toString()}
      isClosable={isClosable}
      status={status}
      icon={icon}
      className="min-w-[250px] rounded-lg overflow-hidden shadow-sm"
    />
  );
};

export function createRenderToast(
  options: UseToastOptions & {
    toastComponent?: React.FC<ToastProps>;
  } = {}
) {
  const { render, toastComponent: ToastComponent = Toast } = options;
  const renderToast: React.FC<RenderProps> = (props) => {
    if (typeof render === "function") {
      return render({ ...props, ...options }) as JSX.Element;
    }
    return <ToastComponent {...props} {...options} />;
  };
  return renderToast;
}

export function createToastFn(defaultOptions?: UseToastOptions) {
  const normalizeToastOptions = (options?: UseToastOptions) => ({
    ...defaultOptions,
    ...options,
    position: options?.position || defaultOptions?.position,
  });

  const toast = (options?: UseToastOptions) => {
    const normalizedToastOptions = normalizeToastOptions(options);
    const Message = createRenderToast(normalizedToastOptions);
    return toastStore.notify(Message, normalizedToastOptions);
  };

  toast.update = (id: ToastId, options: Omit<UseToastOptions, "id">) => {
    toastStore.update(id, normalizeToastOptions(options));
  };

  // toast.closeAll = toastStore.closeAll
  toast.close = toastStore.close;
  toast.isActive = toastStore.isActive;

  return toast;
}

export type CreateToastFnReturn = ReturnType<typeof createToastFn>;

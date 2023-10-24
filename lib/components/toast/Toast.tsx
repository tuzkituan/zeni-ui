import { Alert } from "../alert/Alert";
import { IToast } from "./Toast.types";

interface ToastProps {
  toast: IToast;
}

const Toast = ({ toast }: ToastProps) => {
  const { description, title, status, variant } = toast;

  return (
    <div className="rounded-lg overflow-hidden">
      <Alert
        title={title}
        description={description}
        status={status}
        variant={variant}
        className="min-w-[300px]"
      />
    </div>
  );
};

export default Toast;

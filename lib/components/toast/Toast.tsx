import { Alert } from "../alert/Alert";
import { IToast } from "./Toast.types";
import { motion } from "framer-motion";

export const Toast = (props: IToast) => {
  const { id, placement, onClose, ...rest } = props;

  const isRighty = placement?.includes("right");
  return (
    <motion.div
      initial={{ opacity: 0, x: isRighty ? 20 : -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: isRighty ? 20 : -20 }}
      transition={{ duration: 0.3 }}
    >
      <Alert
        {...rest}
        className="min-w-[300px] rounded-lg overflow-hidden"
        {...(onClose && id
          ? {
              onClose: () => onClose(id),
            }
          : null)}
      />
    </motion.div>
  );
};

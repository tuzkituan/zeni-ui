import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { Arrow, useLayer } from "react-laag";
import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { ISelect } from "./select.types";
import { Input } from "../input/input";

export const Select = ({ options = [] }: ISelect) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setOpen] = useState(false);

  console.log("inputRef", inputRef);

  const theme = useComponentStyle("Select");

  const { triggerProps, layerProps, renderLayer } = useLayer({
    isOpen: isOpen,
    auto: true,
    triggerOffset: 4,
    onOutsideClick: () => {
      setOpen(false);
    },
    placement: "bottom-start",
  });

  const dropdownClasses = useMemo(() => {
    return twMerge(theme.base());
  }, [theme]);

  useEffect(() => {
    if (inputRef.current && dropdownRef.current) {
      const inputWidth = inputRef.current.offsetWidth;
      dropdownRef.current.style.width = `${inputWidth}px`;
    }
  }, [isOpen]);

  return (
    <>
      <span
        {...triggerProps}
        onClick={() => {
          const _isOpen = !isOpen;
          setOpen(_isOpen);
        }}
      >
        <Input placeholder="test" ref={inputRef} />
      </span>
      {isOpen &&
        renderLayer(
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              {...layerProps}
            >
              <div className={dropdownClasses} ref={dropdownRef}>
                Haha
              </div>
            </motion.div>
          </AnimatePresence>
        )}
    </>
  );
};

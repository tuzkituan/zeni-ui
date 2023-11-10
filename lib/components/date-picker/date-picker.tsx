import { forwardRef, useMemo, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { Box } from "../box/box";
import { IDatePicker } from "./date-picker.types";
import { useLayer } from "react-laag";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar as CalendarIcon } from "@phosphor-icons/react";
import { Calendar } from "../calendar/calendar";

export const DatePicker = forwardRef<HTMLInputElement, IDatePicker>(
  (props: IDatePicker, ref) => {
    const theme = useComponentStyle("DatePicker");
    const secContainerRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const {
      className = "",
      size,
      variant,
      isDisabled = false,
      isReadOnly = false,
      ...restProps
    } = props;

    // STATE
    const [isOpen, setOpen] = useState(false);

    const { triggerProps, layerProps, renderLayer } = useLayer({
      isOpen: isOpen,
      auto: true,
      triggerOffset: 4,
      placement: "bottom-start",
      onOutsideClick: () => {
        setOpen(false);
      },
    });

    const containerClasses = useMemo(() => {
      return twMerge(
        theme.container({
          size,
          variant,
          isDisabled,
        }),
        theme.group(),
        className
      );
    }, [theme, size, isDisabled, variant, className]);

    const dropdownClasses = useMemo(() => {
      return twMerge(theme.dropdown());
    }, [theme]);

    const inputClasses = useMemo(() => {
      return twMerge(
        theme.input({
          size,
          variant,
        }),
        className
      );
    }, [theme, size, variant, className]);

    const rightElementClasses = useMemo(() => {
      return twMerge(theme.rightElement());
    }, [theme]);

    return (
      <>
        <div
          {...triggerProps}
          onClick={() => {
            // when searching, disable closing dropdown when clicking on the input
            setOpen((prev) => {
              return !prev;
            });
            inputRef.current?.focus();
          }}
          className={containerClasses}
        >
          <input
            placeholder="Placeholder"
            className={inputClasses}
            ref={ref}
            disabled={isDisabled}
            readOnly={isReadOnly}
            {...restProps}
          />
          <Box className={rightElementClasses}>
            <CalendarIcon size={20} />
          </Box>
        </div>
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
                  <Calendar />
                </div>
              </motion.div>
            </AnimatePresence>
          )}
      </>
    );
  }
);
DatePicker.displayName = "DatePicker";

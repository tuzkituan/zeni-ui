import { format as dnsFormat } from "date-fns";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown2, ArrowUp2, Calendar2, CloseCircle } from "iconsax-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLayer } from "react-laag";
import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { Box } from "../box/box";
import { Calendar } from "../calendar/calendar";
import { IDatePicker } from "./date-picker.types";
import {
  DEFAULT_DAY_FORMAT,
  DEFAULT_MONTH_FORMAT,
  DEFAULT_YEAR_FORMAT,
} from "./date-picker.utils";

export const DatePicker = (props: IDatePicker) => {
  const theme = useComponentStyle("DatePicker");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const {
    className = "",
    size,
    variant,
    isDisabled = false,
    isReadOnly = false,
    format,
    value,
    defaultValue,
    onChange,
    icon,
    placement = "bottom-start",
    isClearable = true,
    mode = "day",
    disabledDate,
    ...restProps
  } = props;

  // STATE
  const [isOpen, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    value || defaultValue
  );
  const [hoveringDate, setHoveringDate] = useState<Date | undefined>();

  const { triggerProps, layerProps, renderLayer } = useLayer({
    isOpen: isOpen,
    auto: true,
    triggerOffset: 4,
    placement,
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
        isDisabled,
      }),
      className
    );
  }, [theme, size, isDisabled, variant, className]);

  const leftElementClasses = useMemo(() => {
    return twMerge(theme.leftElement());
  }, [theme]);

  const clearElementClasses = useMemo(() => {
    return twMerge(theme.clearElement());
  }, [theme]);

  // FUNCS
  const onClear = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setOpen(false);
    setSelectedDate(undefined);
    onChange?.(undefined);
  };

  const getFormatByMode = () => {
    switch (mode) {
      case "month":
        return format || DEFAULT_MONTH_FORMAT;

      case "year":
        return format || DEFAULT_YEAR_FORMAT;

      default:
        return format || DEFAULT_DAY_FORMAT;
    }
  };

  const finalFormat = getFormatByMode();

  // HOOKS
  useEffect(() => {
    setSelectedDate(value || defaultValue);
    onChange?.(value || defaultValue);
  }, [value, defaultValue]);

  // UI
  const renderClear = () => {
    if (isClearable && selectedDate) {
      return (
        <Box className={clearElementClasses} onClick={onClear}>
          <div>
            <CloseCircle size={20} className={theme.iconColor()} />
          </div>
        </Box>
      );
    }

    return (
      <Box className={clearElementClasses}>
        <div>
          {isOpen ? (
            <ArrowUp2 size={20} className={theme.iconColor()} />
          ) : (
            <ArrowDown2 size={20} className={theme.iconColor()} />
          )}
        </div>
      </Box>
    );
  };

  return (
    <>
      <div
        {...triggerProps}
        onClick={() => {
          if (isReadOnly || isDisabled) return;
          // when searching, disable closing dropdown when clicking on the input
          setOpen((prev) => {
            return !prev;
          });
          inputRef.current?.focus();
        }}
        className={containerClasses}
      >
        <Box className={leftElementClasses}>
          {icon || <Calendar2 size={20} />}
        </Box>
        <input
          placeholder="Select date"
          className={inputClasses}
          disabled={isDisabled}
          readOnly={isReadOnly}
          value={selectedDate ? dnsFormat(selectedDate, finalFormat) : ""}
          {...(hoveringDate
            ? {
                value: dnsFormat(hoveringDate, finalFormat),
              }
            : null)}
          {...restProps}
        />
        {renderClear()}
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
                <Calendar
                  onDateClick={(date: Date) => {
                    setSelectedDate(date);
                    onChange?.(date);
                    setOpen(false);
                  }}
                  onDateHover={(date?: Date) => {
                    setHoveringDate(date);
                  }}
                  selectedDate={selectedDate}
                  disabledDate={disabledDate}
                  mode={mode}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        )}
    </>
  );
};

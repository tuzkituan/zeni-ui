import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLayer } from "react-laag";
import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { ISelect, ISelectOption } from "./select.types";
import { Box } from "../box/box";
import { CaretDown, CaretUp, X } from "@phosphor-icons/react";

export const Select = ({
  options = [],
  variant = "outline",
  size = "md",
  value,
  defaultValue,
  onChange,
  leftElement,
  rightElement: rightElementProp,
  isClearable = false,
}: ISelect) => {
  const inputRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // STATE
  const [isOpen, setOpen] = useState(false);
  const [valueState, setValueState] = useState<ISelectOption | undefined>(
    value || defaultValue
  );

  // VARS
  const theme = useComponentStyle("Select");
  const rightElement = useMemo(() => {
    return rightElementProp || isOpen ? <CaretUp /> : <CaretDown />;
  }, [isOpen, rightElementProp]);

  const { triggerProps, layerProps, renderLayer } = useLayer({
    isOpen: isOpen,
    auto: true,
    triggerOffset: 4,
    placement: "bottom-start",
    onOutsideClick: () => {
      setOpen(false);
    },
  });

  // CLASSES
  const containerClasses = useMemo(() => {
    return twMerge(
      theme.container({
        variant,
        size,
      }),
      theme.group()
    );
  }, [size, theme, variant]);

  const secContainerClasses = useMemo(() => {
    return twMerge(
      theme.secContainer({
        addonLeft: !!leftElement,
        addonRight: !!rightElement,
      })
    );
  }, [leftElement, rightElement, theme]);

  const inputClasses = useMemo(() => {
    return twMerge(
      theme.input({
        variant,
        size,
        isInGroup: !!leftElement || !!rightElement,
      })
    );
  }, [leftElement, rightElement, size, theme, variant]);

  const dropdownClasses = useMemo(() => {
    return twMerge(theme.dropdown());
  }, [theme]);

  const leftElementClasses = useMemo(() => {
    return twMerge(theme.leftElement());
  }, [theme]);

  const rightElementClasses = useMemo(() => {
    return twMerge(theme.rightElement());
  }, [theme]);

  const clearElementClasses = useMemo(() => {
    return twMerge(theme.clearElement());
  }, [theme]);

  // FUNCTIONS
  const onClear = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    setOpen(false);
    setValueState(undefined);
  };
  useEffect(() => {
    if (inputRef.current && dropdownRef.current) {
      const inputWidth = inputRef.current.offsetWidth;
      dropdownRef.current.style.width = `${inputWidth}px`;
    }
  }, [isOpen, inputRef.current?.offsetWidth]);

  useEffect(() => {
    setValueState(value);
  }, [value]);

  // UI
  const renderOptions = () => {
    return options.map((x: ISelectOption) => (
      <li
        key={x.value}
        value={x.value}
        className={twMerge(
          theme.option({
            isSelected: x.value === valueState?.value,
          })
        )}
        onClick={() => {
          onChange?.(x);
          setValueState(x);
          setOpen(false);
        }}
      >
        {x.label}
      </li>
    ));
  };

  return (
    <>
      <div
        {...triggerProps}
        onClick={() => {
          const _isOpen = !isOpen;
          setOpen(_isOpen);
        }}
        className={containerClasses}
      >
        <div ref={inputRef} className={secContainerClasses}>
          {!!leftElement && (
            <Box className={leftElementClasses}>{leftElement}</Box>
          )}
          <div className={inputClasses}>
            {valueState?.label || (
              <span className={theme.placeholder()}>Placeholder</span>
            )}
          </div>
          {isClearable && !!valueState?.value && (
            <Box className={clearElementClasses} onClick={onClear}>
              <X />
            </Box>
          )}
          {!!rightElement && (
            <Box className={rightElementClasses}>{rightElement}</Box>
          )}
        </div>
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
                <ul>{renderOptions()}</ul>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
    </>
  );
};

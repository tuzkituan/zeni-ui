import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLayer } from "react-laag";
import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { ISelect, ISelectOption } from "./select.types";
import { Box } from "../box/box";
import { CaretDown, CaretUp, Check, Tray, X } from "@phosphor-icons/react";

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
  isSearchable = true,
  className = "",
  dropdownClassName = "",
}: ISelect) => {
  const secContainerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // STATE
  const [isOpen, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [valueState, setValueState] = useState<ISelectOption | undefined>(
    value || defaultValue
  );

  // VARS
  const theme = useComponentStyle("Select");
  const rightElement = useMemo(() => {
    return rightElementProp || isOpen ? (
      <CaretUp size={18} />
    ) : (
      <CaretDown size={18} />
    );
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
      theme.group(),
      className
    );
  }, [size, theme, variant, className]);

  const secContainerClasses = useMemo(() => {
    return twMerge(
      theme.secContainer({
        addonLeft: !!leftElement,
        addonRight: !!rightElement,
        isSearchable,
      })
    );
  }, [isSearchable, leftElement, rightElement, theme]);

  const inputGroupClasses = useMemo(() => {
    return twMerge(
      theme.inputGroup({
        variant,
        size,
        isInGroup: !!leftElement || !!rightElement,
      })
    );
  }, [leftElement, rightElement, size, theme, variant]);

  const inputClasses = useMemo(() => {
    return twMerge(theme.input());
  }, [theme]);

  const dropdownClasses = useMemo(() => {
    return twMerge(theme.dropdown(), dropdownClassName);
  }, [theme, dropdownClassName]);

  const leftElementClasses = useMemo(() => {
    return twMerge(theme.leftElement());
  }, [theme]);

  const rightElementClasses = useMemo(() => {
    return twMerge(theme.rightElement());
  }, [theme]);

  const clearElementClasses = useMemo(() => {
    return twMerge(theme.clearElement());
  }, [theme]);

  const emptyClasses = useMemo(() => {
    return twMerge(theme.empty());
  }, [theme]);

  // FUNCTIONS
  const onClear = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setOpen(false);
    setSearchValue("");
    setValueState(undefined);
  };
  useEffect(() => {
    if (secContainerRef.current && dropdownRef.current) {
      const inputWidth = secContainerRef.current.offsetWidth;
      dropdownRef.current.style.width = `${inputWidth}px`;
    }
  }, [isOpen, secContainerRef.current?.offsetWidth]);

  useEffect(() => {
    setValueState(value);
  }, [value]);

  // UI
  const renderOptions = () => {
    const _options = searchValue
      ? options.filter((x) =>
          JSON.stringify(x.label)
            .toLowerCase()
            .includes(searchValue.toLowerCase())
        )
      : options;

    if (_options.length === 0)
      return (
        <div className={emptyClasses}>
          <Tray size={40} className="text-gray-500" />
        </div>
      );

    return _options.map((x: ISelectOption) => {
      const isSelected = x.value === valueState?.value;
      return (
        <li
          key={x.value}
          value={x.value}
          className={twMerge(
            theme.option({
              isSelected,
            })
          )}
          onClick={() => {
            const newValue = isSelected ? undefined : x;
            onChange?.(newValue);
            setValueState(newValue);
            setSearchValue("");
            setOpen(false);
          }}
        >
          <span className={theme.optionLabel()}>{x.label}</span>
          {isSelected && <Check className={theme.optionCheckIcon()} />}
        </li>
      );
    });
  };

  return (
    <>
      <div
        {...triggerProps}
        onClick={() => {
          // when searching, disable closing dropdown when clicking on the input 
          setOpen((prev) => {
            if (isSearchable && !!prev) {
              return true;
            }
            return !prev;
          });

          inputRef.current?.focus();
        }}
        className={containerClasses}
      >
        <div ref={secContainerRef} className={secContainerClasses}>
          {!!leftElement && (
            <Box className={leftElementClasses}>{leftElement}</Box>
          )}
          <div className={inputGroupClasses}>
            <input
              className={inputClasses}
              ref={inputRef}
              style={{
                backgroundImage: "initial",
                backgroundPositionX: 0,
                backgroundPositionY: 0,
                backgroundSize: "initial",
                backgroundRepeat: "initial",
                backgroundAttachment: "initial",
                backgroundOrigin: "initial",
                backgroundClip: "initial",
                backgroundColor: "initial",
              }}
              readOnly={!isSearchable}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />

            {!searchValue && (
              <>
                {valueState?.label ? (
                  <span className={theme.inputLabel()}>
                    {valueState?.label}
                  </span>
                ) : (
                  <span className={theme.placeholder()}>Placeholder</span>
                )}
              </>
            )}
          </div>
          {((isClearable && !!valueState?.value) || !!searchValue) && (
            <Box className={clearElementClasses} onClick={onClear}>
              <X size={16} />
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

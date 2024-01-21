import { Check, Tray } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown2,
  CloseCircle,
  DirectNormal,
  TickCircle,
} from "iconsax-react";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLayer } from "react-laag";
import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { isEmpty } from "../../functions";
import { Box } from "../box/box";
import { ISelect, ISelectOption } from "./select.types";

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
  isSearchable: isSearchableProp = true,
  className = "",
  dropdownClassName = "",
  placeholder = "Placeholder",
  placement = "bottom",
  isMultiple = false,
  isDisabled = false,
  tagRender,
}: ISelect) => {
  const secContainerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // STATE
  const [isOpen, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [valueState, setValueState] = useState<
    ISelectOption | ISelectOption[] | undefined | []
  >(value || defaultValue);

  // VARS
  const theme = useComponentStyle("Select");

  const isValueStateArray = Array.isArray(valueState);
  const isSearchable = isSearchableProp || isMultiple;

  const rightElement = useMemo(() => {
    return (
      rightElementProp || (
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
          }}
          transition={{
            duration: 0.1,
          }}
        >
          <ArrowDown2 size={20} className={theme.iconColor()} />
        </motion.div>
      )
    );
  }, [isOpen, rightElementProp, theme]);

  const { triggerProps, layerProps, renderLayer } = useLayer({
    isOpen: isOpen,
    auto: true,
    triggerOffset: 4,
    placement: placement === "top" ? "top-start" : "bottom-start",
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
        isDisabled,
      }),
      theme.group(),
      className
    );
  }, [size, theme, isDisabled, variant, className]);

  const secContainerClasses = useMemo(() => {
    return twMerge(
      theme.secContainer({
        addonLeft: !!leftElement,
        addonRight: !!rightElement,
        isSearchable,
        isMultiple:
          isMultiple && Array.isArray(valueState) && valueState.length > 0,
      })
    );
  }, [theme, leftElement, rightElement, isSearchable, isMultiple, valueState]);

  const inputGroupClasses = useMemo(() => {
    return twMerge(
      theme.inputGroup({
        variant,
        isDisabled,
        size,
        isInGroup: !!leftElement || !!rightElement,
      })
    );
  }, [leftElement, isDisabled, rightElement, size, theme, variant]);

  const inputClasses = useMemo(() => {
    return twMerge(
      theme.input({
        isMultiple:
          isMultiple && Array.isArray(valueState) && valueState.length > 0,
      })
    );
  }, [theme, isMultiple, valueState]);

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

  const tagContainerClasses = useMemo(() => {
    return twMerge(theme.tagContainer());
  }, [theme]);

  const tagClasses = useMemo(() => {
    return twMerge(
      theme.tag({
        variant,
      })
    );
  }, [theme, variant]);

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
          <DirectNormal size={40}  />
        </div>
      );

    return _options.map((x: ISelectOption) => {
      const isSelected = isValueStateArray
        ? valueState?.some((f) => f.value === x.value)
        : x.value === valueState?.value;
      return (
        <li
          key={x.value}
          value={x.value}
          className={twMerge(
            theme.option({
              isSelected,
              isDisabled: x.isDisabled,
            })
          )}
          onClick={() => {
            if (!x.isDisabled) {
              let newValue;
              if (!isMultiple) {
                newValue = isSelected ? undefined : x;
                onChange?.(newValue);
                setValueState(newValue);
                setSearchValue("");
                setOpen(false);
              } else {
                newValue = Array.isArray(valueState) ? [...valueState] : [];
                if (isSelected)
                  newValue = newValue.filter((y) => x.value !== y.value);
                else newValue = [...newValue, x];
                onChange?.(newValue);
                setValueState(newValue);
                setSearchValue("");
                // inputRef.current?.focus();
              }
            }
          }}
        >
          <div className={theme.optionLabelContainer()}>
            {x.icon}
            <span className={theme.optionLabel()}>{x.label}</span>
          </div>
          {isSelected && (
            <TickCircle
              size={20}
              variant="Bold"
              className={theme.optionCheckIcon()}
            />
          )}
        </li>
      );
    });
  };

  const renderTags = (tags?: ISelectOption[]) => {
    const onRemoveTag = (tag: ISelectOption) => {
      setValueState((prev) => {
        const newValue = Array.isArray(prev) ? [...prev] : [];
        return newValue.filter((t) => t.value !== tag.value);
      });
    };
    if (tagRender) {
      return (tags || []).map((x) =>
        tagRender({
          item: x,
          onClose: () => onRemoveTag(x),
        })
      );
    }
    return (tags || []).map((x) => (
      <div className={tagClasses} key={x.value}>
        <span>{x.label}</span>
        {!x.isDisabled && (
          <CloseCircle
            size={12}
            className={twMerge(theme.tagX(), theme.iconColor())}
            onClick={() => onRemoveTag(x)}
          />
        )}
      </div>
    ));
  };

  const renderInput = () => {
    return (
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
          width: searchValue.length + "ch",
        }}
        readOnly={!isSearchable}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={(event) => {
          if (isMultiple && !searchValue) {
            if (event.key === "Backspace") {
              const newValue = Array.isArray(valueState) ? [...valueState] : [];
              newValue.splice(newValue.length - 1, 1);
              setValueState(newValue);
            }
          }
        }}
      />
    );
  };

  const renderPlaceholder = () => {
    return <span className={theme.placeholder()}>{placeholder}</span>;
  };

  const renderInputLabel = () => {
    if (!isMultiple) {
      if (!searchValue) {
        return (
          <>
            {renderInput()}
            {!isValueStateArray && valueState?.label ? (
              <span className={theme.inputLabel()}>{valueState?.label}</span>
            ) : (
              renderPlaceholder()
            )}
          </>
        );
      }
      return renderInput();
    } else {
      return (
        <div className={tagContainerClasses}>
          {isValueStateArray && renderTags(valueState)}
          {renderInput()}
          {isEmpty(valueState) && !searchValue && renderPlaceholder()}
        </div>
      );
    }
  };

  const renderClear = () => {
    if ((isClearable && !isEmpty(valueState)) || !!searchValue) {
      return (
        <Box className={clearElementClasses} onClick={onClear}>
          <CloseCircle size={20} className={theme.iconColor()} />
        </Box>
      );
    }

    return null;
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
          <div className={inputGroupClasses}>{renderInputLabel()}</div>
          {renderClear()}
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

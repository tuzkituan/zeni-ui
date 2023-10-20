import React, { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { getChildrenProps } from "../../functions";
import { Box } from "../box/Box";
import { IInput, IInputGroup } from "./Input.types";

const defaultProps: Partial<IInput> = {
  size: "md",
  variant: "filled",
  isInGroup: false,
};

export const InputContainer = (props: IInput) => {
  const { children, variant, size, className, isInGroup } = props;
  const theme = useComponentStyle("Input");

  const containerClasses = useMemo(() => {
    return twMerge(
      isInGroup
        ? theme.container({
            size,
          })
        : theme.container({
            variant,
            size,
          }),
      className
    );
  }, [isInGroup, theme, size, variant, className]);

  return <div className={containerClasses}>{children}</div>;
};
export const Input = (props: IInput) => {
  const theme = useComponentStyle("Input");
  const {
    className = "",
    size,
    variant,
    isInGroup,
    ...restProps
  } = { ...defaultProps, ...props };

  const inputClasses = useMemo(() => {
    return twMerge(
      theme.input({
        size,
        variant,
        isInGroup,
      }),
      className
    );
  }, [theme, size, variant, isInGroup, className]);

  return (
    <InputContainer {...props}>
      <input
        placeholder="Placeholder"
        className={inputClasses}
        {...restProps}
      />
    </InputContainer>
  );
};

export const InputGroup = (props: IInputGroup) => {
  const { children, className, ...rest } = props;
  const theme = useComponentStyle("Input");
  const childrenProps = getChildrenProps(children) as IInput;

  let hasInputLeftElement = false;
  let hasInputRightElement = false;

  if (children) {
    React.Children.forEach(children as React.ReactElement[], (child, index) => {
      if (React.isValidElement(child)) {
        if (child.type === Input) {
          // Check if the previous child is a InputLeftElement
          if (
            index - 1 >= 0 &&
            React.isValidElement(children[index - 1]) &&
            (children[index - 1] as React.ReactElement).type ===
              InputLeftElement
          ) {
            hasInputLeftElement = true;
          }
          // Check if the next child is a InputRightElement
          if (
            index + 1 < children.length &&
            React.isValidElement(children[index + 1]) &&
            (children[index + 1] as React.ReactElement).type ===
              InputRightElement
          ) {
            hasInputRightElement = true;
          }
        }
      }
    });
  }

  const classes = useMemo(() => {
    return twMerge(
      theme.group(),
      theme.container({
        variant: childrenProps.variant,
        addonRight: hasInputRightElement,
        addonLeft: hasInputLeftElement,
      }),
      className
    );
  }, [
    childrenProps.variant,
    className,
    hasInputLeftElement,
    hasInputRightElement,
    theme,
  ]);

  if (!children) {
    return null;
  }

  const modifiedChildren = React.Children.map(children, (child) => {
    if (
      React.isValidElement<{
        isInGroup: boolean;
      }>(child)
    ) {
      return React.cloneElement(child, {
        isInGroup: true,
      });
    }
    return child;
  });

  return (
    <div className={classes} {...rest}>
      {modifiedChildren}
    </div>
  );
};

export const InputLeftElement = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const theme = useComponentStyle("Input");
  const classes = useMemo(() => {
    return twMerge(theme.leftElement());
  }, [theme]);

  if (!children) {
    return null;
  }
  return <Box className={classes}>{children}</Box>;
};

export const InputRightElement = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const theme = useComponentStyle("Input");
  const classes = useMemo(() => {
    return twMerge(theme.rightElement());
  }, [theme]);

  if (!children) {
    return null;
  }
  return <Box className={classes}>{children}</Box>;
};

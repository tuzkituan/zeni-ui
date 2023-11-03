import React from "react";

export const getChildrenProps = (
  children: React.ReactNode
): Record<string, unknown> => {
  const props: Record<string, unknown> = {};

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;
    Object.assign(props, child.props);
  });

  return props;
};

export const isEmpty = (variable: any) => {
  if (!variable) return true;
  const isArray = Array.isArray(variable);
  if (isArray) return variable.length === 0;
  if (typeof variable === "object") {
    return Object.keys(variable || {}).length === 0;
  }
  return false;
};

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

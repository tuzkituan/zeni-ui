import React from "react";

export interface IModal
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "title"
  > {
  children?: React.ReactNode;
  isOpen?: boolean;
  onCancel?: () => void;
  maskClosable?: boolean;
  closeIcon?: React.ReactNode;
  isCentered?: boolean;
  showHeader?: boolean;
  title?: React.ReactNode;
  backdropClassName?: string;
  isClosable?: boolean;
}

export interface IModalCloseButton {
  icon?: React.ReactNode;
}

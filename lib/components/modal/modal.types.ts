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
  maskClosable?: boolean;
  closeIcon?: React.ReactNode;
  isCentered?: boolean;
  showHeader?: boolean;
  title?: React.ReactNode;
  customHeader?: React.ReactNode;
  footer?: React.ReactNode;
  backdropClassName?: string;
  isClosable?: boolean;
  okText?: string;
  onOk?: () => void;
  cancelText?: string;
  onCancel?: () => void;
  variant?: "info" | "success" | "warning" | "error";
}

export interface IModalCloseButton {
  icon?: React.ReactNode;
}

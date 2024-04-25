import { useEffect } from "react";
import {
  ToastOptionProvider,
  ToastProvider,
  ToastProviderProps,
} from "../main";
import { applyColor, getAccentColor } from "../customization/theme/utils";
import React from "react";

export const ZeniProvider = ({
  accentColor = "#6968AA",
  children,
  toastOptions,
}: {
  children: React.ReactNode;
  toastOptions?: ToastProviderProps;
  accentColor?: string;
}) => {
  useEffect(() => {
    const savedColor = getAccentColor();
    const color = savedColor || accentColor;
    applyColor(color);
  }, [accentColor]);

  return (
    <>
      <ToastOptionProvider value={toastOptions?.defaultOptions}>
        {children}
      </ToastOptionProvider>
      <ToastProvider toastSpacing={toastOptions?.toastSpacing} />
    </>
  );
};

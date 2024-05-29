import { useEffect } from "react";
import {
  ToastOptionProvider,
  ToastProvider,
  ToastProviderProps,
} from "../main";
import {
  applyBorderRadius,
  applyColor,
  applyThemeMode,
  getAccentColor,
  getThemeMode,
} from "../customization/theme/utils";
import React from "react";

export const ZeniProvider = ({
  themeOptions = {
    accentColor: "#6968AA",
    themeMode: "light",
    borderRadius: "lg",
  },
  children,
  toastOptions,
}: {
  children: React.ReactNode;
  toastOptions?: ToastProviderProps;
  themeOptions?: {
    themeMode?: "light" | "dark";
    accentColor?: string;
    borderRadius?: "sm" | "md" | "lg" | "xl" | number;
  };
}) => {
  const { accentColor, themeMode, borderRadius } = themeOptions;

  useEffect(() => {
    const savedColor = getAccentColor();
    const color = savedColor || accentColor || "#6968AA";
    applyColor(color);
  }, [accentColor]);

  useEffect(() => {
    const savedTheme = getThemeMode();
    const theme = savedTheme || themeMode || "light";
    applyThemeMode(theme);
  }, [themeMode]);

  useEffect(() => {
    applyBorderRadius(borderRadius);
  }, [borderRadius]);

  return (
    <>
      <ToastOptionProvider value={toastOptions?.defaultOptions}>
        {children}
      </ToastOptionProvider>
      <ToastProvider toastSpacing={toastOptions?.toastSpacing} />
    </>
  );
};

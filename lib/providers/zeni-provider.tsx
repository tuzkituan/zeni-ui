import { useEffect } from "react";
import {
  ToastOptionProvider,
  ToastProvider,
  ToastProviderProps,
} from "../main";
import { IThemeType } from "../customization/theme";
import { applyTheme } from "../customization/theme/utils";

export const ZeniProvider = ({
  initialTheme,
  children,
  toastOptions,
}: {
  initialTheme?: IThemeType;
  children: React.ReactNode;
  toastOptions?: ToastProviderProps;
}) => {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const defaultTheme =
      (savedTheme as IThemeType) || initialTheme || "baseLight";
    applyTheme(defaultTheme);
    localStorage.setItem("theme", defaultTheme);
  }, [initialTheme]);

  return (
    <>
      <ToastOptionProvider value={toastOptions?.defaultOptions}>
        {children}
      </ToastOptionProvider>
      <ToastProvider toastSpacing={toastOptions?.toastSpacing} />
    </>
  );
};

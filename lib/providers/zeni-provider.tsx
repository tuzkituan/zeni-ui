import { useEffect } from "react";
import { ToastOptionProvider, ToastProvider, ToastProviderProps, applyTheme } from "../main";
import { ThemeType } from "../customization/theme";


export const ZeniProvider = ({
  initialTheme,
  children,
  toastOptions,
}: {
  initialTheme?: ThemeType;
  children: React.ReactNode;
  toastOptions?: ToastProviderProps;
}) => {
  
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const defaultTheme =
      (savedTheme as ThemeType) || initialTheme || "baseLight";
    applyTheme(defaultTheme);
    localStorage.setItem("theme", defaultTheme);
  }, [initialTheme]);

  return (
    <>
      <ToastOptionProvider value={toastOptions?.defaultOptions}>{children}</ToastOptionProvider>
      <ToastProvider toastSpacing={toastOptions?.toastSpacing} />
    </>
  );
};

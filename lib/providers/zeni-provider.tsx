import { useEffect } from "react";
import {
  ToastOptionProvider,
  ToastProvider,
  ToastProviderProps,
} from "../main";
import { getPalette } from "../../color-generator";

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
    if (accentColor) {
      const palette = getPalette(accentColor);
      if (palette?.length === 10) {
        document.documentElement.style.setProperty(
          "--color-primary-50",
          palette[0]
        );
        document.documentElement.style.setProperty(
          "--color-primary-100",
          palette[1]
        );
        document.documentElement.style.setProperty(
          "--color-primary-200",
          palette[2]
        );
        document.documentElement.style.setProperty(
          "--color-primary-300",
          palette[3]
        );
        document.documentElement.style.setProperty(
          "--color-primary-400",
          palette[4]
        );
        document.documentElement.style.setProperty(
          "--color-primary-500",
          palette[5]
        );
        document.documentElement.style.setProperty(
          "--color-primary-600",
          palette[6]
        );
        document.documentElement.style.setProperty(
          "--color-primary-700",
          palette[7]
        );
        document.documentElement.style.setProperty(
          "--color-primary-800",
          palette[8]
        );
        document.documentElement.style.setProperty(
          "--color-primary-900",
          palette[9]
        );
      }
    }
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

import { useEffect } from "react";
import { useChangeTheme } from "../theme/themes/useChangeTheme";
import { ThemeType } from "../theme/themes";

export const SkyProvider = ({
  theme,
  children,
}: {
  theme?: ThemeType;
  children: React.ReactNode;
}) => {
  const { setTheme } = useChangeTheme();

  // Set the default theme here
  useEffect(() => {
    console.log("🚀 ~ SET THEME");
    setTheme(theme || "baseLight");
  }, [setTheme, theme]);

  return (
    <>
      {/* Any other provider components can be added here */}
      {children}
    </>
  );
};

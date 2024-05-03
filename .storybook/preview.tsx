import type { Preview } from "@storybook/react";
import "../lib/customization/global.css";
import { ZeniProvider } from "../lib/main";
import React from "react";
import { withThemeByDataAttribute } from "@storybook/addon-themes";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ZeniProvider>
        <Story />
      </ZeniProvider>
    ),
    withThemeByDataAttribute({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
      attributeName: "data-mode",
    }),
  ],
  // parameters: {
  //   actions: { argTypesRegex: "^on[A-Z].*" },
  //   controls: {
  //     matchers: {
  //       color: /(background|color)$/i,
  //       date: /Date$/,
  //     },
  //   },
  // },
};

export default preview;

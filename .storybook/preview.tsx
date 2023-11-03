import type { Preview } from "@storybook/react";
import "../lib/customization/global.css";
import { ZeniProvider } from "../lib/main";
import React from "react";
import { themes } from "@storybook/theming";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ZeniProvider initialTheme="baseLight">
        <Story />
      </ZeniProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      current: "dark",
      dark: themes.dark,
      light: themes.light,
      stylePreview: true,
      
    },
  },
};

export default preview;

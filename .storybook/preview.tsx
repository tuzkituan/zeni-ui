import type { Preview } from "@storybook/react";
import "../lib/customization/global.css";
import { ZeniProvider } from "../lib/main";
import React from "react";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ZeniProvider initialTheme="baseDark">
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
  },
};

export default preview;

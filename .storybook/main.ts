import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../lib/**/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-themes",
    "@storybook/addon-interactions",
    "@chromatic-com/storybook",
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  docs: {},

  core: {},

  async viteFinal(config, { configType }) {
    // if (configType === 'DEVELOPMENT') {
    //   // Your development configuration goes here
    // }
    // if (configType === 'PRODUCTION') {
    //   // Your production configuration goes here.
    // }
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // Add dependencies to pre-optimization
    });
  },

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
export default config;

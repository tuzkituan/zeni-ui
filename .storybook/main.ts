import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../lib/**/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  core: {
    builder: "@storybook/builder-vite", // 👈 The builder enabled here.
  },
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
      optimizeDeps: {
        include: ["storybook-dark-mode"],
      },
    });
  },
};
export default config;

import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "./box";

const meta = {
  title: "LAYOUT/Box",
  component: Box,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Actually this is a div",
    className: "zn-bg-primary-base zn-p-4 zn-text-white",
  },
};

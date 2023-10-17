import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "./Box";

const meta = {
  title: "SKY-UI/Box",
  component: Box,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Actually this is a div",
    className: "bg-green-500 p-4 text-white",
  },
};

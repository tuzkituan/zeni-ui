import type { Meta, StoryObj } from "@storybook/react";

import { Code } from "./code";

const meta = {
  title: "DATA DISPLAY/Code",
  component: Code,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Actually this is a div",
  },
};

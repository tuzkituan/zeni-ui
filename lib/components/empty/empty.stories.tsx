import type { Meta, StoryObj } from "@storybook/react";

import { Empty } from "./empty";

const meta = {
  title: "DATA DISPLAY/Empty",
  component: Empty,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

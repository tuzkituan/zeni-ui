import type { Meta, StoryObj } from "@storybook/react";

import { Tag } from "./tag";

const meta = {
  title: "DATA DISPLAY/Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Low",
    size: "md",
  },
};

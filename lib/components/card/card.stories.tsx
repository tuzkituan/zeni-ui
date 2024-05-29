import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./card";

const meta = {
  title: "LAYOUT/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Card content goes here",
    title: "Card Title",
    description: "This is the description",
    extra: "Extra",
  },
};

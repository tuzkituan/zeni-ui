import type { Meta, StoryObj } from "@storybook/react";

import { Alert } from "./Alert";

const meta = {
  title: "ATOMS/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["subtle", "solid", "left-accent", "top-accent"],
      control: { type: "radio" },
    },
    status: {
      options: ["info", "success", "warning", "error"],
      control: { type: "radio" },
    },
    iconSize: {
      control: { type: "number" },
    },
    spacing: {
      control: { type: "number" },
    },
    icon: {
      control: false,
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Data uploaded to the server. Fire on!",
    status: "info",
    variant: "subtle",
  },
};

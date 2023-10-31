import type { Meta, StoryObj } from "@storybook/react";

import { Alert } from "./alert";

const meta = {
  title: "FEEDBACK/Alert",
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
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
    isClosable: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Success",
    description: "Data uploaded to the server. Fire on!",
    status: "info",
    variant: "subtle",
    isClosable: false,
  },
};

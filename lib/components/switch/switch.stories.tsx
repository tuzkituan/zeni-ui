import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "./switch";

const meta = {
  title: "FORMS/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    isChecked: {
      control: { type: "boolean" },
    },
    isReadOnly: {
      control: { type: "boolean" },
    },
    isDisabled: {
      control: { type: "boolean" },
    },
    onChange: {
      action: "onChange",
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: "md",
    isReadOnly: undefined,
    isDisabled: undefined,
    defaultChecked: false,
    isChecked: undefined,
  },
};

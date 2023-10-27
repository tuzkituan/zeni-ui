import type { Meta, StoryObj } from "@storybook/react";

import { Radio } from "./Radio";

const meta = {
  title: "FORMS/Radio/Radio",
  component: Radio,
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
    name: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "I agree to this terms and conditions",
    size: "md",
    isReadOnly: undefined,
    isDisabled: undefined,
    defaultChecked: false,
    isChecked: undefined,
  },
};

export const DefaultChecked: Story = {
  args: {
    children: "I agree to this terms and conditions",
    size: "md",
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "I agree to this terms and conditions",
    size: "md",
    defaultChecked: true,
    isDisabled: true,
  },
};

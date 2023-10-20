import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./Checkbox";

const meta = {
  title: "ATOMS/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    isChecked: {
      control: { type: "boolean" },
    },
    onChange: {
      action: "onChange",
    },
    name: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "I agree to this terms and conditions",
    size: "md",
    isIndeterminate: false,
    isReadOnly: undefined,
    isDisabled: undefined,
    defaultChecked: false,
    isChecked: undefined,
  },
};

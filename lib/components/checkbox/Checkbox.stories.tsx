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

export const CheckboxGroup = () => {
  return (
    <Checkbox.Group
      value={["1"]}
      layout="horizontal"
      onChange={(val) => console.log("checked: ", val)}
    >
      <Checkbox value="1">Option A</Checkbox>
      <Checkbox value="2">Option B</Checkbox>
      <Checkbox value="3">Option C</Checkbox>
    </Checkbox.Group>
  );
};

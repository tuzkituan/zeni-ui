import type { Meta, StoryObj } from "@storybook/react";

import { NumberInput } from "./number-input";

const meta = {
  title: "FORMS/NumberInput",
  component: NumberInput,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["outline", "filled", "flushed", "unstyled"],
    },
    size: {
      control: "radio",
      options: ["xs", "sm", "md", "lg"],
    },
    value: {
      type: "number",
    },
    defaultValue: {
      type: "number",
    },
    onChange: {
      action: "change",
    },
    autoComplete: {
      type: "string",
    },
    isDisabled: {
      type: "boolean",
    },
    isReadOnly: {
      type: "boolean",
    },
  },
} satisfies Meta<typeof NumberInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    className: "",
    variant: "outline",
    size: "md",
    placeholder: "Enter value",
    defaultValue: 3,
    min: 0,
    max: 20,
    // showArrow: false,
    // step: 3,
  },
};

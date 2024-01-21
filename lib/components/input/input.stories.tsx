import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../button/button";
import { Input } from "./input";
import { Card } from "iconsax-react";

const meta = {
  title: "FORMS/Input",
  component: Input,
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
      type: "string",
    },
    defaultValue: {
      type: "string",
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
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "outline",
    size: "md",
    placeholder: "Input your name",
  },
};

export const InputWithLeftElement: Story = {
  render: () => {
    return (
      <Input
        leftElement={<Card size={18} />}
        size="md"
        variant="filled"
        placeholder="Enter your email"
      />
    );
  },
  args: {},
};

export const InputWithRightElement: Story = {
  render: () => {
    return (
      <Input
        rightElement={<Button size="xs">Show</Button>}
        size="md"
        variant="outline"
        placeholder="Enter your email"
      />
    );
  },
  args: {},
};

import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";

const meta = {
  title: "ZENI-UI/Input",
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
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    className: "",
    variant: "outline",
    size: "md",
  },
};

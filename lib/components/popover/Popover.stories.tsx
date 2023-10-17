import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./Popover";
import { Button } from "../button/Button";

const meta = {
  title: "LAVENDER/Popover",
  component: Popover,
  tags: ["autodocs"],
  argTypes: {
    content: {
      control: "text",
      description: "React.ReactNode",
    },
    placement: {
      description: "Popover placement",
      options: [
        "top-center",
        "top-start",
        "top-end",
        "left-start",
        "left-center",
        "left-end",
        "right-start",
        "right-center",
        "right-end",
        "bottom-start",
        "bottom-center",
        "bottom-end",
      ],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <Button>Click me</Button>,
    placement: "bottom-start",
    content: "Popover content",
  },
};

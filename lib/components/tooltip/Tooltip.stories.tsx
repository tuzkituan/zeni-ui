import type { Meta, StoryObj } from "@storybook/react";

import { Tooltip } from "./Tooltip";

const meta = {
  title: "PEACE-UI/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    placement: {
      description: "Tooltip placement",
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
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Display tooltip",
    placement: "bottom-start",
    content: "This is a tooltip",
  },
};

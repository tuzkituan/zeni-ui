import type { Meta, StoryObj } from "@storybook/react";

import { Tooltip, TooltipContent, TooltipTrigger } from "./Tooltip";

const meta = {
  title: "LAVENDER/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    placement: {
      options: [
        "top",
        "top-start",
        "top-end",
        "bottom",
        "bottom-start",
        "bottom-end",
        "left",
        "left-start",
        "left-end",
        "right",
        "right-start",
        "right-end",
      ],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => {
    const { children, placement } = args;
    return (
      <Tooltip placement={placement}>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent>This is the content of the tooltip</TooltipContent>
      </Tooltip>
    );
  },
  args: {
    children: "Display tooltip",
    placement: "top-start",
  },
};

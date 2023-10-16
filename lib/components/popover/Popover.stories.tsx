import type { Meta, StoryObj } from "@storybook/react";

import { Popover, PopoverContent, PopoverTrigger } from "./Popover";

const meta = {
  title: "LAVENDER/Popover",
  component: Popover,
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
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => {
    const { children, placement } = args;

    return (
      <Popover placement={placement}>
        <PopoverTrigger>{children}</PopoverTrigger>
        <PopoverContent>My popover description goes here</PopoverContent>
      </Popover>
    );
  },
  args: {
    children: "Display popover",
    placement: "bottom-start",
  },
};

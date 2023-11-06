import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./spinner";
import { Box } from "../box/box";

const meta = {
  title: "FEEDBACK/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: "radio",
    },
    children: {
      type: "text",
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: (
      <Box>
        Staring at the bottom of your glass
        <br />
        Hoping one day you'll make a dream last
        <br />
        But dreams come slow, and they go so fast
        <br />
        You see her when you close your eyes
      </Box>
    ),
    size: "md",
    opacity: undefined,
    icon: undefined,
    description: "Loading...",
    isLoading: false,
  },
};

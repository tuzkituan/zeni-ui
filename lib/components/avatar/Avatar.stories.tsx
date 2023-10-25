import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./Avatar";

const meta = {
  title: "MEDIA/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["2xs", "xs", "sm", "md", "lg", "xl", "2xl"],
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    src: "https://picsum.photos/200/300",
    size: "md",
    alt: "",
    name: "Lewis Nguyen",
    bgColor: "",
    borderColor: "",
  },
};

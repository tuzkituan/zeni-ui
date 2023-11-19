import type { Meta, StoryObj } from "@storybook/react";

import { Slider } from "./slider";

const meta = {
  title: "LAYOUT/Slider",
  component: Slider,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Actually this is a div",
    className: "bg-primary p-4 text-white",
  },
};

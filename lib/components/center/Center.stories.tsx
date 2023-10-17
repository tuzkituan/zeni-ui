import type { Meta, StoryObj } from "@storybook/react";

import { Center, Circle } from "./Center";

const meta = {
  title: "LAVENDER/Center",
  component: Center,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Center>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => {
    const { children, ...rest } = args;
    return (
      <Center {...rest} className="h-[100px] bg-slate-200">
        {children}
      </Center>
    );
  },
  args: {
    children: "Center",
    className: "",
  },
};

export const CircleComponent: StoryObj<typeof Circle> = {
  render: (args) => {
    const { children, ...rest } = args;
    return (
      <Circle {...rest} className="bg-slate-600 text-white">
        {children}
      </Circle>
    );
  },
  args: {
    children: "A",
  },
};

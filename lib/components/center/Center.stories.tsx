import type { Meta, StoryObj } from "@storybook/react";

import { Center, Circle } from "./Center";
import { twMerge } from "tailwind-merge";

const meta = {
  title: "LAYOUT/Center",
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
      <Center
        {...rest}
        className={twMerge("h-[100px] bg-slate-200", rest.className)}
      >
        {children}
      </Center>
    );
  },
  args: {
    children: "Center",
  },
};

export const CircleComponent: StoryObj<typeof Circle> = {
  render: (args) => {
    const { children, ...rest } = args;
    return (
      <Circle
        {...rest}
        className={twMerge("bg-slate-600 text-white", rest.className)}
      >
        {children}
      </Circle>
    );
  },
  args: {
    children: "A",
  },
};

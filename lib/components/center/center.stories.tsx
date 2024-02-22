import type { Meta, StoryObj } from "@storybook/react";

import { Center, Circle } from "./center";
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
        className={twMerge("zn-h-[100px] zn-bg-slate-200", rest.className)}
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
        className={twMerge("zn-bg-slate-600 zn-text-white", rest.className)}
      >
        {children}
      </Circle>
    );
  },
  args: {
    children: "A",
  },
};

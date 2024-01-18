import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "FORMS/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
    variant: {
      control: "radio",
      options: ["solid", "subtle", "outline", "link", "text"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Button",
    size: "md",
    variant: "solid",
    isLoading: false,
    isDisabled: false,
    // iconSpacing: 10,
    // leftIcon: <Spinner />,
    // rightIcon: <Airplane />,
    spinnerPlacement: "start",
    loadingText: "Loading...",
    isDanger: false,
  },
};

export const Subtle: Story = {
  args: {
    children: "Button",
    size: "md",
    variant: "subtle",
  },
};

export const Outline: Story = {
  args: {
    children: "Button",
    size: "md",
    variant: "outline",
  },
};

export const Link: Story = {
  args: {
    children: "Button",
    size: "md",
    variant: "link",
  },
};

export const Text: Story = {
  args: {
    children: "Button",
    size: "md",
    variant: "text",
  },
};

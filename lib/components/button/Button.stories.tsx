import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
import { Spinner, Airplane } from "@phosphor-icons/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "LAVENDER/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
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
    // isLoading: true,
    // iconSpacing: 10,
    // leftIcon: <Spinner />,
    // rightIcon: <Airplane />,
    spinnerPlacement: "start",
    loadingText: "Loading...",
  },
};

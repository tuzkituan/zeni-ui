import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./spinner";

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
      type: "string",
    },
    icon: {
      description: "Custom icon",
    },
    description: {
      control: "text",
      description: "Use with inner children",
    },
    isLoading: {
      type: "boolean",
      description: "Loading overlay. Use with inner children",
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: undefined,
    size: "md",
    icon: undefined,
    description: "Loading...",
    isLoading: false,
  },
};

export const LoadingOverlay: Story = {
  args: {
    children: (
      <div>
        Staring at the ceiling in the dark
        <br />
        Same old empty feeling in your heart
        <br />
        Cause love comes slow, and it goes so fast
        <br />
        Well, you see her when you fall asleep
        <br />
        But never to touch and never to keep
        <br />
        Cause you loved her too much, and you dived too deep
      </div>
    ),
    size: "md",
    icon: undefined,
    description: "Loading...",
    isLoading: true,
  },
};

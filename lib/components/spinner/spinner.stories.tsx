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
    opacity: {
      type: "number",
      description: "From 0 to 1",
    },
    icon: {
      description: "Custom icon",
    },
    description: {
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
    opacity: undefined,
    icon: undefined,
    description: "Loading...",
    isLoading: false,
  },
};

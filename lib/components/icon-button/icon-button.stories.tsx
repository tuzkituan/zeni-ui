import type { Meta, StoryObj } from "@storybook/react";

import { IconButton } from "./icon-button";
import { Plus } from "@phosphor-icons/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "FORMS/IconButton",
  component: IconButton,
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
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    size: "md",
    variant: "solid",
    isLoading: false,
    isDisabled: false,
    icon: <Plus fontSize={20} />,
    isDanger: false,
  },
};

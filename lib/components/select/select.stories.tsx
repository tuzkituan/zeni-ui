import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./select";
import { MapPinLine } from "@phosphor-icons/react";

const meta = {
  title: "FORMS/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "outline",
    size: "md",
    isClearable: true,
    // leftElement: <MapPinLine />,
    options: [
      {
        label: "This is a really long option label, you see?",
        value: 1,
      },
      {
        label: "Option 2",
        value: 2,
      },
      {
        label: "Option 3",
        value: 3,
      },
      {
        label: "Option 4",
        value: 4,
      },
    ],
  },
};

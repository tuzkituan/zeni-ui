import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./select";

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
    isSearchable: false,
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
      {
        label: "Option 5",
        value: 5,
      },
      {
        label: "Option 6",
        value: 6,
      },
      {
        label: "Option 7",
        value: 7,
      },
      {
        label: "Option 8",
        value: 8,
      },
      {
        label: "Option 9",
        value: 9,
      },
      {
        label: "Option 10",
        value: 10,
      },
      {
        label: "Option 11",
        value: 11,
      },
    ],
  },
};

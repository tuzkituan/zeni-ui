import type { Meta, StoryObj } from "@storybook/react";

import { DatePicker } from "./date-picker";

const meta = {
  title: "FORMS/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["outline", "filled", "flushed", "unstyled"],
    },
    size: {
      control: "radio",
      options: ["xs", "sm", "md", "lg"],
    },
    placement: {
      description: "Popover placement",
      options: [
        "top-center",
        "top-start",
        "top-end",
        "left-start",
        "left-center",
        "left-end",
        "right-start",
        "right-center",
        "right-end",
        "bottom-start",
        "bottom-center",
        "bottom-end",
      ],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "outline",
    size: "md",
    format: "dd MMM yyyy",
    placement: "bottom-start",
    defaultValue: new Date(),
    isClearable: true,
  },
};

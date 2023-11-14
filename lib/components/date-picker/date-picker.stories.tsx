import type { Meta, StoryObj } from "@storybook/react";

// import { isBefore } from "date-fns";
import { DatePicker } from "./date-picker";
import { isBefore } from "date-fns";

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
    mode: {
      control: "radio",
      options: ["day", "month", "year"],
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
    disabledDate: {
      type: "function",
    },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "outline",
    size: "md",
    format: undefined,
    placement: "bottom-start",
    defaultValue: new Date(),
    isClearable: true,
    mode: "day",
    // disabledDate: (current) => current && isBefore(current, new Date()),
  },
};

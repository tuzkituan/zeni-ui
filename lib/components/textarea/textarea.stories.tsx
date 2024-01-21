import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./textarea";

const meta = {
  title: "FORMS/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["outline", "filled", "flushed"],
    },
    value: {
      type: "string",
    },
    defaultValue: {
      type: "string",
    },
    onChange: {
      action: "change",
    },
    autoComplete: {
      type: "string",
    },
    maxLength: {
      type: "number",
    },
    minLength: {
      type: "number",
    },
    name: {
      type: "string",
    },
    rows: {
      type: "number",
    },
    isDisabled: {
      type: "boolean",
    },
    isResizable: {
      type: "boolean",
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "outline",
    placeholder: "Description",
  },
};

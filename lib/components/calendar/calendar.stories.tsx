import type { Meta, StoryObj } from "@storybook/react";

import { Calendar } from "./calendar";

const meta = {
  title: "FORMS/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../text/text";
import { Menu } from "./menu";

const meta = {
  title: "OVERLAY/Menu",
  component: Menu,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      type: "string",
    },
    placement: {
      description: "Menu placement",
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
    items: {},
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: ({
    children,
    items = [
      {
        key: 1,
        title: "Option 1",
      },
      {
        key: 2,
        title: "Option 2",
      },
      {
        key: 3,
        title: "Option 3",
      },
    ],
    ...rest
  }) => (
    <Menu items={items} {...rest}>
      <Text className="underline cursor-pointer">{children}</Text>
    </Menu>
  ),
  args: {
    children: "Open menu",
    placement: "bottom-start",
    onMenuClick: (key) => alert(`You clicked: ${key}`),
  },
};

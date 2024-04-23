import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../text/text";
import { Menu } from "./menu";
import { Key, Logout, User } from "iconsax-react";

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
    showArrow: {
      control: "boolean",
    },
    trigger: {
      description: "Menu trigger",
      options: ["hover", "click"],
      control: { type: "radio" },
    },
    items: {},
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: ({ children, ...rest }) => (
    <Menu {...rest}>
      <Text className="zn-underline zn-cursor-pointer">{children}</Text>
    </Menu>
  ),
  args: {
    children: "Open menu",
    placement: "bottom-start",
    onMenuClick: (key) => alert(`You clicked: ${key}`),
    items: [
      {
        key: 1,
        title: "View profile",
        icon: <User size={20} />,
      },
      {
        key: 2,
        title: "Change password",
        icon: <Key size={20} />,
      },
      {
        key: 3,
        title: "Logout",
        icon: <Logout size={20} />,
        isDisabled: true,
      },
    ],
  },
};

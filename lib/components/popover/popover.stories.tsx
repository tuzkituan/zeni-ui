import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./popover";
import { Text } from "../text/text";
import { Box } from "../box/box";

const meta = {
  title: "OVERLAY/Popover",
  component: Popover,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    content: {
      control: "text",
      description: "React.ReactNode",
    },
    children: {
      type: "string",
    },
    trigger: {
      description: "Popover trigger",
      options: ["hover", "click"],
      control: { type: "radio" },
    },
    showArrow: {
      control: "boolean",
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
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: ({ children, content, ...rest }) => (
    <Popover
      {...rest}
      content={<Box className="zn-max-w-[250px] zn-p-4">{content}</Box>}
    >
      <Text className="zn-underline zn-cursor-pointer">{children}</Text>
    </Popover>
  ),
  args: {
    children: "Click me",
    placement: "bottom-start",
    trigger: "hover",
    content:
      "Well, you only need the light when it's burning low. Only miss the sun when it starts to snow",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./Popover";
import { Text } from "../text/Text";
import { Box } from "../box/Box";

const meta = {
  title: "TOOLTIP & POPOVER/Popover",
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
    <Popover {...rest} content={<Box className="max-w-[250px]">{content}</Box>}>
      <Text className="underline cursor-pointer">{children}</Text>
    </Popover>
  ),
  args: {
    children: "Click me",
    placement: "bottom-start",
    content:
      "Well, you only need the light when it's burning low. Only miss the sun when it starts to snow",
  },
};

import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "../box/Box";
import { Flex } from "./Flex";

const meta = {
  title: "SKY-UI/Flex",
  component: Flex,
  tags: ["autodocs"],
  argTypes: {
    justify: {
      control: { type: "radio" },
    },
    align: {
      control: { type: "radio" },
    },
    wrap: {
      control: { type: "radio" },
    },
    direction: {
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => {
    return (
      <Flex className="bg-slate-300 h-[200px]" {...args}>
        <Box className="bg-red-300 p-4">Block 1</Box>
        {/* <Spacer /> */}
        <Box className="bg-teal-300 p-4">Block 2</Box>
      </Flex>
    );
  },
  args: {
    children: "",
    justify: "flex-start",
    align: "center",
    direction: "row",
    wrap: "nowrap",
    gap: 0,
  },
};

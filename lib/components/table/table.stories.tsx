import type { Meta, StoryObj } from "@storybook/react";

import { Table } from "./table";

const meta = {
  title: "DATA DISPLAY/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: "radio",
    },
    onRow: {
      type: "function",
    },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    columns: [
      {
        dataIndex: "name",
        key: "name",
        title: "Name",
      },
      {
        dataIndex: "age",
        key: "age",
        title: "Age",
      },
      {
        dataIndex: "address",
        key: "Address",
        title: "Address",
      },
    ],
    data: [
      {
        name: "Lewis",
        age: 25,
        address: "HCM City",
      },
      {
        name: "Helen Le",
        age: 23,
        address: "Dak Nong",
      },
    ],
    size: "md",
    isBordered: true,
    showHeader: true,
    isLoading: false,
    onRow: undefined,
  },
};

import type { Meta, StoryObj } from "@storybook/react";

import { Tabs } from "./Tabs";

const meta = {
  title: "DISCLOSURE/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    activeKey: {
      control: {
        type: "text",
      },
    },
    defaultActiveKey: {
      control: {
        type: "text",
      },
    },
    variant: {
      control: {
        type: "radio",
      },
      options: ["solid", "underline", "outline"],
    },
    isFitted: {
      control: {
        type: "boolean",
      },
    },
    onTabChange: {
      control: {
        type: "function",
      },
    },
    contentClassName: {
      control: {
        type: "text",
      },
    },
    ulClassName: {
      control: {
        type: "text",
      },
    },
    navClassName: {
      control: {
        type: "text",
      },
    },
    tabClassName: {
      control: {
        type: "text",
      },
    },
    items: {
      control: {
        type: "object",
      },
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    items: [
      {
        content: "Tab 1",
        label: "Tab 1",
        key: "1",
      },
      {
        content: "Tab 2",
        label: "Tab 2",
        key: "2",
      },
      {
        content: "Tab 3",
        label: "Tab 3",
        key: "3",
        disabled: true,
      },
    ],
    variant: "underline",
    isFitted: false,
    defaultActiveKey: "1",
  },
};

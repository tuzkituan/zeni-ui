import type { Meta, StoryObj } from "@storybook/react";

import { Toast } from "./Toast";
import { Button } from "../button/Button";
import { useToast } from "./ToastContext";

const meta = {
  title: "ATOMS/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PushToast: Story = {
  render: (args) => {
    const { show } = useToast();
    return (
      <Button variant="outline" onClick={() => show(args)}>
        Show Toast
      </Button>
    );
  },
  args: {
    variant: "solid",
    status: "success",
    duration: 7000,
    title: "Hi there!",
    description: "Welcome to Zeni UI",
    isClosable: true,
    placement: "bottom-right",
  },
};

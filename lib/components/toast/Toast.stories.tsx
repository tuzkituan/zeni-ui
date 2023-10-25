import type { Meta, StoryObj } from "@storybook/react";

import { Toast } from "./Toast";
import { Button } from "../button/Button";
import { useToast } from "./ToastContext";
import { IToast } from "./Toast.types";

const meta = {
  title: "SYSTEM/Toast/useToast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

const args: IToast = {
  variant: "solid",
  status: "success",
  duration: 7000,
  title: "Hi there!",
  description: "Welcome to Zeni UI",
  isClosable: true,
  placement: "bottom-right",
};

export const PushToast = (props: Story) => {
  const allProps = { ...args, ...props };
  const { show } = useToast();
  return (
    <Button variant="outline" onClick={() => show(allProps)}>
      Show Toast
    </Button>
  );
};
PushToast.args = args;

import type { Meta, StoryObj } from "@storybook/react";
import {
  ToastComponent,
  ToastOptions,
  createStandaloneToast,
  useToast,
} from ".";
import { Button } from "../button/button";
import { Flex } from "../flex/flex";

const meta = {
  title: "FEEDBACK/Toast/useToast",
  component: ToastComponent,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      type: "string",
    },
    variant: {
      options: ["subtle", "solid", "left-accent", "top-accent"],
      control: { type: "radio" },
    },
    description: {
      type: "string",
    },
    duration: {
      type: "number",
    },
    icon: {},
    isClosable: {
      type: "boolean",
    },
    position: {
      options: [
        "top",
        "bottom",
        "bottom-left",
        "bottom-right",
        "top-left",
        "top-right",
      ],
      control: { type: "radio" },
    },
    status: {
      options: ["success", "error", "warning", "info"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<ToastOptions>;

export default meta;
type Story = StoryObj<typeof meta>;

const args: ToastOptions = {
  variant: "solid",
  status: "success",
  duration: 7000,
  title: "Hi there!",
  description: "Welcome to Zeni UI",
  isClosable: false,
  position: "bottom",
  onClick: () => {
    alert("Clicked");
  },
};

export const PushToast = (props: Story) => {
  const allProps = { ...args, ...props };
  const toast = useToast();
  return (
    <Flex direction="column" gap={20}>
      <Button variant="outline" onClick={() => toast(allProps)}>
        Show Toast
      </Button>
      <Button onClick={() => toast.closeAll()}>Close all toast</Button>
    </Flex>
  );
};
PushToast.args = args;

export const StandaloneToast = (props: Story) => {
  const allProps = {
    ...args,
    ...props,
    description: "You can create toast outside components",
    title: "Success",
  };
  const standaloneToast = createStandaloneToast();

  return (
    <Flex direction="column" gap={20}>
      <Button variant="outline" onClick={() => standaloneToast.toast(allProps)}>
        Show Standalone Toast
      </Button>
    </Flex>
  );
};
StandaloneToast.args = args;

import type { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";
import { Button } from "../button/button";
import { Modal } from "./modal";

const meta = {
  title: "OVERLAY/Modal",
  component: Modal,
  argTypes: {
    className: {
      description: "Modal class name",
    },
    backdropClassName: {
      description: "Background class name",
    },
    isOpen: {
      description: "Modal open state",
      control: {
        type: "boolean",
      },
    },
    variant: {
      options: ["info", "success", "warning", "error"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Hey, this is your modal mate!",
    maskClosable: true,
    isCentered: false,
    title: "Modal Title",
    showHeader: true,
    backdropClassName: "",
    className: "zn-w-[500px]",
    closeIcon: null,
    isOpen: true,
  },
};

export const OpenWithButton = (props: Story) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Modal
        {...props}
        title="Modal Title"
        isOpen={open}
        onCancel={() => setOpen(false)}
      >
        Hey, this is your modal mate!
      </Modal>
      <Button onClick={() => setOpen((prev) => !prev)}>Show Modal</Button>
    </>
  );
};

export const CenteredModal: Story = {
  args: {
    children: "Hey, this is your modal mate!",
    isCentered: true,
    isOpen: true,
    title: "Modal Title",
    showHeader: true,
    className: "zn-w-[500px]",
  },
};

export const NoHeaderModal: Story = {
  args: {
    children: "Hey, this is your modal mate!",
    isOpen: true,
    showHeader: false,
    className: "zn-w-[400px]",
  },
};

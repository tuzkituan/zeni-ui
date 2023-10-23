import type { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";
import { Button } from "../button/Button";
import { Modal } from "./Modal";

const meta = {
  title: "ATOMS/Modal",
  component: Modal,
  tags: ["autodocs"],
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
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: ({ children, ...args }) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Modal isOpen={open} onCancel={() => setOpen(false)} {...args}>
          {children}
        </Modal>
        <Button onClick={() => setOpen((prev) => !prev)}>Show Modal</Button>
      </>
    );
  },
  args: {
    children: "Hey, this is your modal mate!",
    maskClosable: true,
    isCentered: false,
    title: "Modal Title",
    showHeader: true,
    backdropClassName: "",
    className: "w-[500px]",
    closeIcon: null,
  },
};

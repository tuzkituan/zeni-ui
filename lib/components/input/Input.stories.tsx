import type { Meta, StoryObj } from "@storybook/react";

import { Activity, Check } from "@phosphor-icons/react";
import {
  Input,
  InputLeftElement,
  InputGroup as InputGroup,
  InputRightElement,
} from "./Input";
import { Button } from "../button/Button";

const meta = {
  title: "INPUTS/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["outline", "filled", "flushed", "unstyled"],
    },
    size: {
      control: "radio",
      options: ["xs", "sm", "md", "lg"],
    },
    value: {
      control: "text",
    },
    onChange: {
      action: "change",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    className: "",
    variant: "outline",
    size: "md",
    placeholder: "Input your name",
  },
};

type InputGroupStory = StoryObj<typeof InputGroup>;

export const InputGroupWithLeftElement: InputGroupStory = {
  render: ({ ...args }) => {
    return (
      <InputGroup {...args}>
        <InputLeftElement>
          <Check />
        </InputLeftElement>
        <Input size="md" variant="filled" placeholder="Enter your email" />
      </InputGroup>
    );
  },
  args: {},
};

export const InputGroupWithRightElement: InputGroupStory = {
  render: ({ ...args }) => {
    return (
      <InputGroup {...args}>
        <Input
          size="md"
          variant="outline"
          placeholder="Enter your value here"
        />
        <InputRightElement>
          <Button size="xs">Show</Button>
        </InputRightElement>
      </InputGroup>
    );
  },
  args: {},
};

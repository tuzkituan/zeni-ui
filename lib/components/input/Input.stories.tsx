import type { Meta, StoryObj } from "@storybook/react";

import { Check } from "@phosphor-icons/react";
import { Input, InputLeftElement, InputGroup as TInputGroup } from "./Input";

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
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    className: "w-[200px]",
    variant: "outline",
    size: "md",
    placeholder: "Input your name",
  },
};

type InputGroupStory = StoryObj<typeof TInputGroup>;

export const InputGroup: InputGroupStory = {
  render: ({ ...args }) => {
    return (
      <TInputGroup {...args}>
        <InputLeftElement>
          <Check />
        </InputLeftElement>
        <Input size="md" variant="filled" placeholder="Enter your email" />
      </TInputGroup>
    );
  },
  args: {},
};

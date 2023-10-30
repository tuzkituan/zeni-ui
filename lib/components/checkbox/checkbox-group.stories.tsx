import type { Meta, StoryObj } from "@storybook/react";

import { ICheckboxGroup } from "./checkbox.types";
import { Checkbox, CheckboxGroup } from "./checkbox";

const meta = {
  title: "FORMS/Checkbox/CheckboxGroup",
  component: CheckboxGroup,
  tags: ["autodocs"],
  argTypes: {
    layout: {
      options: ["horizontal", "vertical"],
      control: { type: "radio" },
    },
    defaultValue: {
      control: { type: "text" },
    },
    spacing: {
      control: { type: "number" },
    },
    value: {
      control: { type: "text" },
    },
    onChange: {
      action: "onChange",
    },
  },
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<ICheckboxGroup>;

const radioGroupArgs: ICheckboxGroup = {
  value: ["1"],
  layout: "horizontal",
  onChange: (val) => console.log("checked: ", val),
};

export const Primary: Story = (props: ICheckboxGroup) => {
  const all = { ...radioGroupArgs, ...props };
  return (
    <CheckboxGroup {...all}>
      <Checkbox value="1">Option A</Checkbox>
      <Checkbox value="2">Option B</Checkbox>
      <Checkbox value="3">Option C</Checkbox>
    </CheckboxGroup>
  );
};

Primary.args = radioGroupArgs;

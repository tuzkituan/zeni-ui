import type { Meta, StoryObj } from "@storybook/react";

import { IRadioGroup } from "./Radio.types";
import { Radio, RadioGroup } from "./Radio";

const meta = {
  title: "FORMS/Radio/RadioGroup",
  component: RadioGroup,
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
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<IRadioGroup>;

const radioGroupArgs: IRadioGroup = {
  value: "1",
  layout: "horizontal",
  onChange: (val) => console.log("checked: ", val),
};

export const Primary: Story = (props: IRadioGroup) => {
  const all = { ...radioGroupArgs, ...props };
  return (
    <RadioGroup {...all}>
      <Radio value="1">Option A</Radio>
      <Radio value="2">Option B</Radio>
      <Radio value="3">Option C</Radio>
    </RadioGroup>
  );
};

Primary.args = radioGroupArgs;

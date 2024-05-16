import type { Meta, StoryObj } from "@storybook/react";

import { Carousel } from "./carousel";

const meta = {
  title: "MEDIA/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    items: [
      <div className="zn-bg-red-400 zn-w-[200px] zn-h-[100px]" key={1}>
        <h3>FIRST SLIDE</h3>
      </div>,
      <div className="zn-bg-red-400 zn-w-[200px] zn-h-[100px]" key={2}>
        <h3>SECOND SLIDE</h3>
      </div>,
      <div className="zn-bg-red-400 zn-w-[200px] zn-h-[100px]" key={3}>
        <h3>THIRD SLIDE</h3>
      </div>,
      <div className="zn-bg-red-400 zn-w-[200px] zn-h-[100px]" key={4}>
        <h3>FORTH SLIDE</h3>
      </div>,
    ],
  },
};

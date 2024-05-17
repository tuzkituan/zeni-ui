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
    images: [
      "https://picsum.photos/1024/400",
      "https://picsum.photos/1024/400",
      "https://picsum.photos/1024/400",
      "https://picsum.photos/1024/400",
    ],
    height: 300,
  },
};

import type { Meta, StoryObj } from "@storybook/react";

import ImageCarousel from "./image-carousel";

const meta = {
  title: "MEDIA/ImageCarousel",
  component: ImageCarousel,
  tags: ["autodocs"],
  argTypes: {
    src: {
      type: "string",
    },
    fallbackSrc: {
      type: "string",
    },
    boxSize: {
      type: "number",
    },
    alt: {
      type: "string",
    },
    borderRadius: {
      type: "number",
    },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    images: [
      "https://picsum.photos/640/320",
      "https://picsum.photos/640/320",
      "https://picsum.photos/640/320",
      "https://picsum.photos/640/320",
      "https://picsum.photos/640/320",
      "https://picsum.photos/640/320",
      "https://picsum.photos/640/320",
    ],
  },
};

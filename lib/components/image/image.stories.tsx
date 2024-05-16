import type { Meta, StoryObj } from "@storybook/react";

import { Image } from "./image";

const meta = {
  title: "MEDIA/Image",
  component: Image,
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
    src: "https://picsum.photos/640/320",
    fallbackSrc: "",
    boxSize: undefined,
    borderRadius: 4,
    alt: "",
  },
};

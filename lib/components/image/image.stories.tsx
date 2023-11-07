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
    isPreviewable: {
      type: "boolean",
      description: "Can click to preview?",
    },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    src: "https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg",
    fallbackSrc: "",
    boxSize: undefined,
    borderRadius: 4,
    alt: "",
  },
};

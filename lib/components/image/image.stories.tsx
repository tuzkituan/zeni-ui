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
    src: "https://vcdn1-dulich.vnecdn.net/2022/05/22/2-Mui-Dien-xa-Hoa-Tam-TX-Dong-6646-7108-1653188298.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=1WMz2rYu5f7tVd1uv6dDMQ",
    fallbackSrc: "",
    boxSize: undefined,
    borderRadius: 4,
    alt: "",
  },
};

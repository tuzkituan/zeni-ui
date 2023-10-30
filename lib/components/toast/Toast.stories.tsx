import type { Meta, StoryObj } from "@storybook/react";

import { Flex } from "../flex/Flex";
import { Toast } from ".";

const meta = {
  title: "FEEDBACK/Toast/useToast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

const args: IToast = {
  id: "1",
  variant: "solid",
  status: "success",
  duration: 7000,
  title: "Hi there!",
  description: "Welcome to Zeni UI",
  isClosable: true,
  placement: "bottom-right",
};

// export const PushToast = (props: Story) => {
//   const allProps = { ...args, ...props };
//   const { show, closeAll } = useToast();
//   return (
//     <Flex direction="column" gap={20} >
//       <Button variant="outline" onClick={() => show(allProps)}>
//         Show Toast
//       </Button>
//       <Button onClick={() => closeAll()}>Close all toast</Button>
//     </Flex>
//   );
// };
// PushToast.args = args;


// export const StandaloneToast = (props: Story) => {
//   const allProps = { ...args, ...props };
//   const { show } = useToast();
//   return (
//     <Flex direction="column" gap={20} >
//       <Button variant="outline" onClick={() => show(allProps)}>
//         Show Toast
//       </Button>
//     </Flex>
//   );
// };
// StandaloneToast.args = args;

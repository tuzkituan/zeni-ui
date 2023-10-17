import {
  Box,
  Button,
  Center,
  Flex,
  Popover,
  Text,
  ThemeType,
} from "../lib/main";
import { useChangeTheme } from "../lib/customization/theme/useChangeTheme";
import { twMerge } from "tailwind-merge";

function App() {
  const { theme, setTheme } = useChangeTheme();

  const items: {
    label: string;
    value: ThemeType;
  }[] = [
    {
      label: "Sky Light",
      value: "baseLight",
    },
    {
      label: "Green Light",
      value: "greenLight",
    },
    {
      label: "Pink Light",
      value: "pinkLight",
    },
    {
      label: "Sky Dark",
      value: "baseDark",
    },
  ];

  return (
    <Center className="bg-primary-background min-h-screen">
      <Box className="flex justify-center flex-col items-center h-full gap-4">
        <Flex className="card">
          {items.map((x) => (
            <Button
              key={x.value}
              variant={x.value === theme ? "solid" : "ghost"}
              className={twMerge(
                "px-4 py-1 block cursor-pointer rounded",
                x.value === theme ? "border-2 border-primary bg-primary" : ""
              )}
              onClick={() => setTheme(x.value)}
            >
              <Text>{x.label}</Text>
            </Button>
          ))}
        </Flex>
        <Text className="text-primary">
          This is a button. Its color is based on the theme
        </Text>
        <Popover content="Popover content" placement="bottom-start">
          <Button variant="outline">Click me</Button>
        </Popover>
      </Box>
    </Center>
  );
}

export default App;

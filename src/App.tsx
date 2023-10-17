import { Box } from "../lib/components/box/Box";
import { Popover } from "../lib/components/popover/Popover";
import { Text } from "../lib/components/text/Text";
import { Button, Center } from "../lib/main";
import { useChangeTheme } from "../lib/utils/hooks/useChangeTheme";

function App() {
  const { theme, setTheme } = useChangeTheme();

  return (
    <Center className="bg-primary-background min-h-screen">
      <Box className="flex justify-center flex-col items-center h-full gap-4">
        <Box className="card">
          {theme === "baseLight" ? (
            <Button onClick={() => setTheme("baseDark")}>
              Apply Dark Theme
            </Button>
          ) : (
            <Button onClick={() => setTheme("baseLight")}>
              Apply Light Theme
            </Button>
          )}
        </Box>
        <Text>Click to toggle the theme</Text>
        <Popover content="Popover content" placement="bottom-start">
          <Button variant="outline">Click me</Button>
        </Popover>
      </Box>
    </Center>
  );
}

export default App;

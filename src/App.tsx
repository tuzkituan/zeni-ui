import { Box, Button, Center, Popover, Text } from "../lib/main";
import { useChangeTheme } from "../lib/customization/theme/useChangeTheme";

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

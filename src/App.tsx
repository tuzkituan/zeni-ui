import { twMerge } from "tailwind-merge";
import { Box } from "../lib/components/box/Box";
import { Text } from "../lib/components/text/Text";
import { Button } from "../lib/main";
import { useDarkMode } from "../lib/utils/hooks/useDarkMode";
import { Popover } from "../lib/components/popover/Popover";

function App() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <Box
      className={twMerge(
        isDark ? "bg-gray-900" : "bg-white",
        "w-full h-screen"
      )}
    >
      <Box className="flex justify-center flex-col items-center h-full gap-4">
        <Box className="card">
          <Button size="md" onClick={() => setIsDark(!isDark)}>
            {isDark ? "Dark Mode" : "Light Mode"}
          </Button>
        </Box>
        <Text>Click to toggle the theme</Text>
        <Popover content="Popover content" placement="bottom-start">
          <Button variant="outline">Click me</Button>
        </Popover>
      </Box>
    </Box>
  );
}

export default App;

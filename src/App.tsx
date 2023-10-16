import { twMerge } from "tailwind-merge";
import { Box } from "../lib/components/box/Box";
import { Text } from "../lib/components/text/Text";
import { Button } from "../lib/main";
import { useDarkMode } from "../lib/utils/hooks/useDarkMode";

function App() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <Box
      className={twMerge(
        isDark ? "t-bg-gray-900" : "t-bg-white",
        "t-w-full t-h-screen"
      )}
    >
      <Box className="t-flex t-justify-center t-flex-col t-items-center t-h-full t-gap-4">
        <Box className="card">
          <Button size="md" onClick={() => setIsDark(!isDark)}>
            {isDark ? "Dark Mode" : "Light Mode"}
          </Button>
        </Box>
        <Text>Click to toggle the theme</Text>
      </Box>
    </Box>
  );
}

export default App;

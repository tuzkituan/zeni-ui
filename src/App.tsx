import { Button } from "../lib/main";
import { useDarkMode } from "../lib/utils/hooks/useDarkMode";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <>
      <div className="card">
        <Button size="md" onClick={() => setIsDark(!isDark)}>
          {isDark ? "Dark Mode" : "Light Mode"}
        </Button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import { ZeniProvider } from "../lib/main.ts";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ZeniProvider initialTheme="baseDark">
      <App />
    </ZeniProvider>
  </React.StrictMode>
);

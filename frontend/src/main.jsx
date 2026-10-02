//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MotionConfig } from "motion/react";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <MotionConfig viewport={{ once: true }}>
      <App />
    </MotionConfig>
  </ThemeProvider>,
);

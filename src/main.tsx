import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import "./i18n";

import { ThemeProvider } from "./components/theme-provider";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" attribute="class">
      <App />
    </ThemeProvider>
  </HashRouter>
);
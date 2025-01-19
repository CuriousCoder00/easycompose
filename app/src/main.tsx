import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "@/App.tsx";
import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter } from "react-router";
import { Toaster } from "@/components/ui/toaster.tsx";
import { RecoilRoot } from "recoil";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark" storageKey="easy-compose-ui-theme">
          <App />
          <Toaster />
        </ThemeProvider>
      </BrowserRouter>
    </RecoilRoot>
  </StrictMode>
);

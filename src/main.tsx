import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import App from "./App.tsx";
import "./index.css";
import TanStackProvider from "./providers/TanStackProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastContainer />
    <TanStackProvider>
      <App />
    </TanStackProvider>
  </StrictMode>,
);

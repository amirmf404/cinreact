import { createRoot } from "react-dom/client";
import "./index.css";
import { CinReactProvider } from "cinreact";
import testCom from "./components/test.tsx";
import { routes } from "./router.ts";
import { RouterProvider } from "react-router-dom";
import { StrictMode } from "react";

const messages = { fa: { tes: "تست" } };

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CinReactProvider translateMessages={messages} pageLayout={testCom}>
      <RouterProvider router={routes} />
    </CinReactProvider>
  </StrictMode>
);

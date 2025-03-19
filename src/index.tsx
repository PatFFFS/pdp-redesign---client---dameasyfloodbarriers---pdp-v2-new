import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PdpNew } from "./screens/PdpNew";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <PdpNew />
  </StrictMode>,
);

import { StrictMode, startTransition } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const container = document.getElementById("root");
if (!container) throw new Error("Elemento #root não encontrado no index.html");

const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// The production build ships the page already rendered (scripts/prerender.js); the dev server does not.
// Hydrating inside a transition lets React split the work into small chunks instead of
// one long task, so the page stays responsive on slow phones.
if (container.firstElementChild) {
  startTransition(() => {
    hydrateRoot(container, app);
  });
} else {
  createRoot(container).render(app);
}

console.info(
  "%cOi! O código deste site está em github.com/rafnaves/rafnaves.github.io",
  "font: 500 13px 'IBM Plex Mono', monospace; color: #1d4ed8",
);

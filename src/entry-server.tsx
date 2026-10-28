import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

/** Used at build time by scripts/prerender.js to put the page content in dist/index.html. */
export function render(): string {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

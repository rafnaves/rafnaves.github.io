// Renders the React app to HTML at build time and writes it into dist/index.html,
// so the content, title and meta tags are there before any JavaScript runs.
import { readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const templatePath = path.join(root, "dist", "index.html");
const serverDir = path.join(root, "dist-ssr");
const marker = "<!--app-html-->";

const { render } = await import(pathToFileURL(path.join(serverDir, "entry-server.js")).href);
const template = await readFile(templatePath, "utf8");

if (!template.includes(marker)) {
  throw new Error(`Marcador ${marker} não encontrado em dist/index.html`);
}

await writeFile(templatePath, template.replace(marker, render()));
await rm(serverDir, { recursive: true, force: true });

console.log("dist/index.html pré-renderizado");

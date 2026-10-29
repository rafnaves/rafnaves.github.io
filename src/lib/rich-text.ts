import type { RichText } from "@/types";

/** The text without formatting, e.g. to use as a React key. */
export function toPlainText(text: RichText): string {
  if (typeof text === "string") return text;
  return text.map((part) => (typeof part === "string" ? part : part.strong)).join("");
}

import type { RichText } from "@/types";

/** Renders inline text, with the `{ strong }` pieces in bold. */
export function RichTextView({ text }: { text: RichText }) {
  if (typeof text === "string") return text;

  return text.map((part, index) =>
    typeof part === "string" ? (
      part
    ) : (
      // Parts never move, so their position is a stable key.
      <strong key={index} className="font-semibold">
        {part.strong}
      </strong>
    ),
  );
}

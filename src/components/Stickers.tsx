import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import type { Sticker } from "@/types";

type StickersProps = {
  items: readonly Sticker[];
  className?: string;
};

const toneClass: Record<Sticker["tone"], string> = {
  paper: "bg-card text-foreground",
  accent: "border-primary/40 bg-secondary text-foreground",
  ink: "border-foreground bg-foreground text-background",
};

const offsets = ["ml-6", "ml-0", "ml-12"];

/** Decorative notes: every fact here is repeated in the project sections. */
export function Stickers({ items, className }: StickersProps) {
  return (
    <ul aria-hidden="true" className={cn("flex flex-col items-start gap-5 pt-10", className)}>
      {items.map((sticker, index) => (
        <li
          key={sticker.text}
          style={{ "--tilt": `${sticker.rotation}deg` } as CSSProperties}
          className={cn(
            "max-w-[15rem] rotate-(--tilt) rounded-md border px-4 py-3 shadow-[0_1px_2px_rgb(0_0_0/0.06)] select-none motion-safe:transition-transform motion-safe:duration-300 hover:rotate-0",
            toneClass[sticker.tone],
            offsets[index % offsets.length],
          )}
        >
          <span className="block font-mono text-[0.7rem] tracking-[0.08em] uppercase opacity-70">
            {sticker.kicker}
          </span>
          <span className="mt-0.5 block font-display text-lg leading-tight font-bold [font-stretch:104%]">
            {sticker.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

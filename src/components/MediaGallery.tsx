import type { Media } from "@/types";
import { MediaPlayer } from "./MediaPlayer";

type MediaGalleryProps = {
  items: readonly Media[];
  note?: string;
};

export function MediaGallery({ items, note }: MediaGalleryProps) {
  return (
    <div className="grid gap-3">
      {note && <p className="text-sm text-muted-foreground">{note}</p>}
      <div className="grid gap-6 sm:grid-cols-2">
        {items.map((media) => (
          <MediaPlayer key={media.id} media={media} />
        ))}
      </div>
    </div>
  );
}

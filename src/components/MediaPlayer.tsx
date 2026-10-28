import { Maximize2 } from "lucide-react";
import { useCallback, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useReducedMotion } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";
import type { Media } from "@/types";
import { LoopClip } from "./LoopClip";
import { VideoClip } from "./VideoClip";

type MediaPlayerProps = {
  media: Media;
  className?: string;
};

/**
 * A product screen: dotted panel, thin frame, mono caption and a button that opens it larger.
 * If the file fails to load the whole block disappears instead of leaving a hole.
 */
export function MediaPlayer({ media, className }: MediaPlayerProps) {
  const [failed, setFailed] = useState(false);
  const handleError = useCallback(() => setFailed(true), []);

  if (failed) return null;

  return (
    <figure className={cn("min-w-0", className)}>
      <div className="stage rounded-lg border p-2.5 sm:p-4">
        <div
          className="relative overflow-hidden rounded-md border bg-card"
          style={{ aspectRatio: `${media.width} / ${media.height}` }}
        >
          <MediaSurface media={media} onError={handleError} />
          <Dialog>
            <DialogTrigger asChild>
              <button
                type="button"
                aria-label={`Ampliar: ${media.label}`}
                className="absolute top-2 right-2 z-10 grid size-8 place-items-center rounded-md border bg-background/85 backdrop-blur-sm transition-colors hover:border-primary hover:text-primary"
              >
                <Maximize2 aria-hidden="true" className="size-4" />
              </button>
            </DialogTrigger>
            <DialogContent className="w-[calc(100%-2rem)] max-w-5xl gap-3 p-3 pt-12 sm:max-w-5xl sm:p-4 sm:pt-12">
              <DialogTitle className="sr-only">{media.label}</DialogTitle>
              <EnlargedMedia media={media} />
              <DialogDescription className="font-mono text-xs leading-relaxed">
                <span className="text-foreground">{media.label}</span> · {media.caption}
              </DialogDescription>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <figcaption className="mt-2.5 font-mono text-xs leading-relaxed text-muted-foreground">
        <span className="text-foreground">{media.label}</span> · {media.caption}
      </figcaption>
    </figure>
  );
}

type MediaSurfaceProps = {
  media: Media;
  onError: () => void;
};

function MediaSurface({ media, onError }: MediaSurfaceProps) {
  switch (media.kind) {
    case "video":
      return <VideoClip media={media} onError={onError} />;
    case "loop":
      return <LoopClip media={media} onError={onError} />;
    case "image":
      return (
        <img
          src={media.src}
          alt={media.alt}
          width={media.width}
          height={media.height}
          loading="lazy"
          decoding="async"
          onError={onError}
          className="absolute inset-0 size-full object-cover"
        />
      );
  }
}

function EnlargedMedia({ media }: { media: Media }) {
  const reducedMotion = useReducedMotion();
  const className = "max-h-[78vh] w-full rounded-md bg-black object-contain";

  switch (media.kind) {
    case "video":
      return (
        <video className={className} controls autoPlay={!reducedMotion} playsInline poster={media.poster} aria-label={media.alt}>
          {media.sources.map((source) => (
            <source key={source.src} src={source.src} type={source.type} />
          ))}
        </video>
      );
    case "loop":
      return (
        <video
          className={className}
          src={media.src}
          poster={media.poster}
          controls
          loop
          muted
          playsInline
          autoPlay={!reducedMotion}
          aria-label={media.alt}
        />
      );
    case "image":
      return (
        <img src={media.src} alt={media.alt} width={media.width} height={media.height} className={className} />
      );
  }
}

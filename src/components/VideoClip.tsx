import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import type { VideoMedia } from "@/types";

type VideoClipProps = {
  media: VideoMedia;
  onError: () => void;
};

/** Video with controls. Until it gets close to the screen, only a lazy poster image loads. */
export function VideoClip({ media, onError }: VideoClipProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isNear = useInView(containerRef, { rootMargin: "400px 0px", once: true });
  const lastSource = media.sources.length - 1;

  return (
    <div ref={containerRef} className="absolute inset-0">
      {isNear ? (
        <video
          className="size-full bg-black object-contain"
          controls
          preload="metadata"
          playsInline
          poster={media.poster}
          aria-label={media.alt}
        >
          {media.sources.map((source, index) => (
            <source
              key={source.src}
              src={source.src}
              type={source.type}
              // The video element only reports a failure on its last source.
              onError={index === lastSource ? onError : undefined}
            />
          ))}
        </video>
      ) : (
        <img
          src={media.poster}
          alt={media.alt}
          width={media.width}
          height={media.height}
          loading="lazy"
          decoding="async"
          className="size-full object-cover"
        />
      )}
    </div>
  );
}

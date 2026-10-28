import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useMediaQuery";
import type { LoopMedia } from "@/types";

type LoopClipProps = {
  media: LoopMedia;
  onError: () => void;
};

/**
 * Muted looping clip. It loads when close to the screen and plays only while visible.
 * With reduced motion nothing plays by itself: the poster stays with a play button.
 */
export function LoopClip({ media, onError }: LoopClipProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = useReducedMotion();
  const isNear = useInView(containerRef, { rootMargin: "300px 0px", once: true });
  const isVisible = useInView(containerRef, { threshold: 0.35 });
  const [playRequested, setPlayRequested] = useState(false);

  const shouldMount = reducedMotion ? playRequested : isNear;
  const shouldPlay = isVisible && (reducedMotion ? playRequested : true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (shouldPlay) {
      video.play().catch(() => {
        // The browser may refuse to play (data saver, power saving); the poster stays.
      });
    } else {
      video.pause();
    }
  }, [shouldPlay, shouldMount]);

  return (
    <div ref={containerRef} className="absolute inset-0">
      <img
        src={media.poster}
        alt={media.alt}
        width={media.width}
        height={media.height}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 size-full object-cover"
      />
      {shouldMount && (
        <video
          ref={videoRef}
          src={media.src}
          poster={media.poster}
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          onError={onError}
          className="absolute inset-0 size-full object-cover"
        />
      )}
      {reducedMotion && (
        <button
          type="button"
          onClick={() => setPlayRequested((requested) => !requested)}
          aria-label={`${playRequested ? "Pausar" : "Reproduzir"}: ${media.label}`}
          className="absolute bottom-2 left-2 z-10 inline-flex items-center gap-1.5 rounded-md border bg-background/90 px-2.5 py-1.5 font-mono text-xs backdrop-blur-sm hover:border-primary"
        >
          {playRequested ? (
            <Pause aria-hidden="true" className="size-3.5" />
          ) : (
            <Play aria-hidden="true" className="size-3.5" />
          )}
          {playRequested ? "Pausar" : "Reproduzir"}
        </button>
      )}
    </div>
  );
}

import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useMediaQuery";
import type { VideoMedia } from "@/types";
import { mediaControlClass } from "./mediaControl";

type AutoplayVideoProps = {
  media: VideoMedia;
  onError: () => void;
};

/**
 * Muted looping video: loads when close to the screen and plays only while visible.
 * With reduced motion nothing plays by itself: the poster stays until the visitor presses play.
 */
export function AutoplayVideo({ media, onError }: AutoplayVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = useReducedMotion();
  const isNear = useInView(containerRef, { rootMargin: "300px 0px", once: true });
  const isVisible = useInView(containerRef, { threshold: 0.35 });
  // null until the visitor presses play or pause; after that their choice wins over autoplay.
  const [playChoice, setPlayChoice] = useState<boolean | null>(null);

  const wantsToPlay = playChoice ?? !reducedMotion;
  const shouldMount = isNear && (playChoice !== null || !reducedMotion);
  const shouldPlay = isVisible && wantsToPlay;
  const lastSource = media.sources.length - 1;

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
          poster={media.poster}
          autoPlay={wantsToPlay}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 size-full object-cover"
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
      )}
      <button
        type="button"
        onClick={() => setPlayChoice(!wantsToPlay)}
        aria-label={`${wantsToPlay ? "Pausar" : "Reproduzir"}: ${media.label}`}
        // Sits left of the enlarge button that MediaPlayer places in the top-right corner.
        className={`absolute top-2 right-12 z-10 ${mediaControlClass}`}
      >
        {wantsToPlay ? <Pause aria-hidden="true" className="size-4" /> : <Play aria-hidden="true" className="size-4" />}
      </button>
    </div>
  );
}

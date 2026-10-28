import { ArrowRight } from "lucide-react";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import type { Metric } from "@/types";

type MetricValueProps = {
  metric: Metric;
  size: "lg" | "md";
  /** Position in a row, used to stagger the entrance animation. */
  index?: number;
  /** Keep the baseline line's height when there is none, so values in a row line up. */
  reserveBefore?: boolean;
};

const valueSize = {
  lg: "text-[clamp(2.1rem,5vw,3.4rem)]",
  md: "text-[clamp(1.6rem,3.2vw,2.1rem)]",
};

/**
 * "Before → after" result. The baseline gets an orange strike that draws itself in;
 * the animation only moves things, so the numbers are readable without it.
 */
export function MetricValue({ metric, size, index = 0, reserveBefore = false }: MetricValueProps) {
  const delay: CSSProperties = { animationDelay: `${120 + index * 110}ms` };

  return (
    <div className="min-w-0">
      {!metric.before && reserveBefore && (
        <p aria-hidden="true" className="invisible font-mono text-[0.8125rem] leading-snug">
          –
        </p>
      )}
      {metric.before && (
        <p className="font-mono text-[0.8125rem] leading-snug text-muted-foreground">
          <span className="sr-only">Antes: </span>
          <span className="relative inline-block">
            {metric.before}
            <span
              aria-hidden="true"
              style={delay}
              className="absolute inset-x-0 top-1/2 h-[1.5px] origin-left -translate-y-1/2 bg-signal motion-safe:animate-strike"
            />
          </span>
        </p>
      )}
      <p
        style={delay}
        className={cn(
          "mt-1 font-display leading-none font-extrabold tabular-nums [font-stretch:110%] motion-safe:animate-rise",
          valueSize[size],
        )}
      >
        {metric.before && (
          <>
            {/* An icon, not "→": the arrow glyph is missing from the Google Fonts latin subset. */}
            <ArrowRight aria-hidden="true" strokeWidth={2.5} className="mr-1 inline size-[0.7em] align-[0.04em] text-signal" />
            <span className="sr-only">Depois: </span>
          </>
        )}
        {metric.value}
      </p>
      <p className="mt-2 text-[0.8125rem] leading-snug text-muted-foreground">{metric.label}</p>
    </div>
  );
}

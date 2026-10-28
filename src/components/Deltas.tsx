import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Delta } from "@/types";
import { MetricValue } from "./MetricValue";

type DeltasProps = {
  items: readonly Delta[];
  className?: string;
};

// Two columns on phones, four on wide screens; rules only between cells.
const cellBorders = [
  "",
  "border-l pl-4 lg:pl-5",
  "border-t lg:border-t-0 lg:border-l lg:pl-5",
  "border-t border-l pl-4 lg:border-t-0 lg:pl-5",
];

export function Deltas({ items, className }: DeltasProps) {
  return (
    <ul
      aria-label="Resultados em produção"
      className={cn("grid grid-cols-2 border-t-2 border-b border-t-foreground lg:grid-cols-4", className)}
    >
      {items.map((delta, index) => (
        <li key={delta.label} className={cn("flex min-w-0 flex-col justify-between gap-3 py-5 pr-3", cellBorders[index])}>
          <MetricValue metric={delta} index={index} />
          <a
            href={`#${delta.projectId}`}
            className="inline-flex w-fit items-center gap-1 font-mono text-xs text-primary hover:underline"
          >
            {delta.projectLabel}
            <ArrowDown aria-hidden="true" className="size-3" />
          </a>
        </li>
      ))}
    </ul>
  );
}

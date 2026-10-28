import { ArrowDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Flow } from "@/types";

type FlowDiagramProps = {
  flow: Flow;
};

/** Steps of a pipeline: a row on wide screens, a column on phones and tablets. */
export function FlowDiagram({ flow }: FlowDiagramProps) {
  const lastIndex = flow.steps.length - 1;

  return (
    <figure className="min-w-0 rounded-lg border bg-card p-4 sm:p-5">
      <figcaption className="eyebrow mb-4 text-xs">{flow.caption}</figcaption>
      <ol className="flex flex-col lg:flex-row">
        {flow.steps.map((step, index) => (
          <li key={step.title} className="flex min-w-0 flex-col lg:flex-1 lg:flex-row">
            <div
              className={cn(
                "min-w-0 rounded-md border px-3 py-2.5 lg:flex-1",
                step.highlight ? "border-primary bg-secondary" : "bg-background",
              )}
            >
              <span className="flex items-center justify-between gap-2 font-mono text-[0.7rem] text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
                {step.highlight && <span className="text-secondary-foreground">etapa-chave</span>}
              </span>
              <b className="mt-0.5 block font-display text-[0.9375rem] leading-snug font-bold">{step.title}</b>
              <small className="mt-0.5 block font-mono text-[0.7rem] leading-snug break-words text-muted-foreground">
                {step.detail}
              </small>
            </div>
            {index < lastIndex && (
              <span aria-hidden="true" className="flex items-center justify-center py-1 text-signal lg:px-1.5 lg:py-0">
                <ArrowDown className="size-4 lg:hidden" />
                <ArrowRight className="hidden size-4 lg:block" />
              </span>
            )}
          </li>
        ))}
      </ol>
    </figure>
  );
}

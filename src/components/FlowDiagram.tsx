import { ArrowDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FlowStep } from "@/types";

type FlowDiagramProps = {
  steps: readonly FlowStep[];
  /** Read by screen readers only, e.g. "Etapas do AVA". */
  label: string;
};

/**
 * Steps of a pipeline: a row on wide screens, a column on phones and tablets.
 * The main step stands out only by its border and background.
 */
export function FlowDiagram({ steps, label }: FlowDiagramProps) {
  const lastIndex = steps.length - 1;

  return (
    <ol aria-label={label} className="flex min-w-0 flex-col rounded-lg border bg-card p-3 sm:p-4 lg:flex-row">
      {steps.map((step, index) => (
        <li key={step.title} className="flex min-w-0 flex-col lg:flex-1 lg:flex-row">
          <div
            className={cn(
              "min-w-0 rounded-md border px-3 py-2.5 lg:flex-1",
              step.highlight ? "border-primary bg-secondary" : "bg-background",
            )}
          >
            <b className="block font-display text-[0.9375rem] leading-snug font-bold">{step.title}</b>
            <small className="mt-0.5 block font-mono text-[0.7rem] leading-snug break-words text-muted-foreground">
              {step.detail}
            </small>
            {step.highlight && <span className="sr-only">(etapa principal)</span>}
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
  );
}

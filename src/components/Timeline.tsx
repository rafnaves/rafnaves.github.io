import type { Experience } from "@/types";

type TimelineProps = {
  items: readonly Experience[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <ol className="border-t">
      {items.map((item) => (
        <li
          key={item.role}
          className="grid gap-1.5 border-b py-6 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-6"
        >
          <span className="font-mono text-[0.8125rem] text-muted-foreground tabular-nums">{item.period}</span>
          <div className="measure">
            <h3 className="text-xl font-bold [font-stretch:104%]">{item.role}</h3>
            <p className="mt-0.5 mb-2 text-[0.9375rem] text-muted-foreground">{item.org}</p>
            <p>{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

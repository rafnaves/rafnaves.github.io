import type { ResearchItem } from "@/types";

type ResearchListProps = {
  items: readonly ResearchItem[];
};

export function ResearchList({ items }: ResearchListProps) {
  return (
    <ul className="border-t">
      {items.map((item) => (
        <li
          key={item.title}
          className="grid gap-3 border-b py-7 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-6"
        >
          <div>
            <p className="eyebrow text-xs">{item.tag}</p>
            {item.metric && (
              <p className="mt-2 flex items-baseline gap-2">
                <span className="font-display text-3xl font-extrabold tabular-nums [font-stretch:110%]">
                  {item.metric.value}
                </span>
                <span className="text-sm text-muted-foreground">{item.metric.label}</span>
              </p>
            )}
          </div>
          <div className="measure">
            <h3 className="text-[1.375rem] font-bold [font-stretch:104%]">{item.title}</h3>
            <p className="mt-2 text-muted-foreground">{item.description}</p>
            <p className="mt-3">
              <span aria-hidden="true" className="mr-1.5 text-signal">
                →
              </span>
              {item.result}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

import { Badge } from "@/components/ui/badge";
import type { DetailBlock, FeaturedProject, Metric, StatGroup } from "@/types";
import { FlowDiagram } from "./FlowDiagram";
import { MediaGallery } from "./MediaGallery";
import { MediaPlayer } from "./MediaPlayer";
import { MetricValue } from "./MetricValue";

type ProjectFeaturedProps = {
  project: FeaturedProject;
};

export function ProjectFeatured({ project }: ProjectFeaturedProps) {
  const [firstDetail, ...otherDetails] = project.details;
  const titleId = `${project.id}-titulo`;

  return (
    <article
      id={project.id}
      aria-labelledby={titleId}
      className="grid scroll-mt-28 gap-9 border-t border-dashed pt-14 first:border-t-0 first:pt-0 md:scroll-mt-20"
    >
      <header className="grid gap-6">
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
          <h3 id={titleId} className="text-[clamp(1.9rem,4.5vw,2.75rem)] font-extrabold [font-stretch:108%]">
            {project.name}
            <span className="block text-[0.55em] font-semibold text-muted-foreground [font-stretch:100%] sm:inline">
              <span aria-hidden="true" className="hidden sm:inline">
                {" · "}
              </span>
              {project.subtitle}
            </span>
          </h3>
          <Badge variant="secondary" className="gap-1.5 rounded-full px-2.5 py-1 font-mono font-normal">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
            {project.status}
          </Badge>
        </div>
        <KeyFacts facts={project.facts} />
        <p className="measure text-lg leading-relaxed">{project.summary}</p>
      </header>

      {project.showcase.length === 1 && <MediaPlayer media={project.showcase[0]} />}
      {project.showcase.length > 1 && <MediaGallery items={project.showcase} note={project.showcaseNote} />}

      <FlowDiagram flow={project.flow} />

      <div className="grid gap-10 md:grid-cols-2 md:gap-12">
        <div className="grid content-start gap-8">
          <DetailBlockView block={firstDetail} />
          {project.aside && <MediaPlayer media={project.aside} />}
        </div>
        {otherDetails.map((block) => (
          <DetailBlockView key={block.heading} block={block} />
        ))}
      </div>

      {project.stats && <StatGrid group={project.stats} />}

      <p className="font-mono text-[0.8125rem] leading-relaxed text-muted-foreground">
        Stack: <span className="text-foreground">{project.stack}</span>
      </p>
    </article>
  );
}

function KeyFacts({ facts }: { facts: readonly Metric[] }) {
  const anyBefore = facts.some((fact) => fact.before);

  return (
    <ul aria-label="Resultados" className="grid grid-cols-2 gap-y-5 border-y py-5 lg:grid-cols-4">
      {facts.map((fact, index) => (
        <li key={fact.label} className="min-w-0 pr-4 [&:nth-child(even)]:border-l [&:nth-child(even)]:pl-4 lg:[&:not(:first-child)]:border-l lg:[&:not(:first-child)]:pl-5">
          <MetricValue metric={fact} size="md" index={index} reserveBefore={anyBefore} />
        </li>
      ))}
    </ul>
  );
}

function DetailBlockView({ block }: { block: DetailBlock }) {
  return (
    <div className="min-w-0">
      <h4 className="eyebrow mb-3 font-mono font-medium">{block.heading}</h4>
      {block.kind === "text" ? (
        <p className="measure leading-relaxed">{block.body}</p>
      ) : (
        <ul className="measure grid gap-3">
          {block.items.map((item) => (
            <li
              key={item}
              className="relative pl-5 leading-relaxed before:absolute before:top-[0.8em] before:left-0 before:h-px before:w-2.5 before:bg-signal"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function StatGrid({ group }: { group: StatGroup }) {
  return (
    <div>
      <h4 className="eyebrow mb-3 font-mono font-medium">{group.heading}</h4>
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-3 lg:grid-cols-6">
        {group.items.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse justify-end gap-1 bg-card px-4 py-3.5">
            <dt className="font-mono text-xs leading-snug text-muted-foreground">{stat.label}</dt>
            <dd className="font-display text-2xl font-extrabold tabular-nums [font-stretch:108%]">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

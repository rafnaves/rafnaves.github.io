import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { DetailBlock, FeaturedProject, HowItWorks } from "@/types";
import { FlowDiagram } from "./FlowDiagram";
import { MediaGallery } from "./MediaGallery";
import { MediaPlayer } from "./MediaPlayer";

type ProjectFeaturedProps = {
  project: FeaturedProject;
};

/**
 * Reading order: what it is (summary), seeing it work (media), how it works in plain words,
 * the technical pipeline, then the details for whoever wants to dig in.
 */
export function ProjectFeatured({ project }: ProjectFeaturedProps) {
  const [lead, ...rest] = project.summary;
  const titleId = `${project.id}-titulo`;

  return (
    <article
      id={project.id}
      aria-labelledby={titleId}
      className="anchor-offset grid gap-9 border-t border-dashed pt-14 first:border-t-0 first:pt-0"
    >
      <header className="grid gap-5">
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
          <Badge
            variant="secondary"
            className="h-auto gap-1.5 rounded-md px-2.5 py-1 text-left font-mono font-normal whitespace-normal"
          >
            {/* TODO: logo da Mitsubishi aqui, se houver autorização de uso da marca. Por ora, só texto. */}
            <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-primary" />
            {project.status}
          </Badge>
        </div>
        <div className="measure grid gap-4">
          <p className="text-lg leading-relaxed sm:text-xl">{lead}</p>
          {rest.map((paragraph) => (
            <p key={paragraph} className="leading-relaxed sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </header>

      {project.showcase.length === 1 && <MediaPlayer media={project.showcase[0]} />}
      {project.showcase.length > 1 && <MediaGallery items={project.showcase} note={project.showcaseNote} />}

      {project.howItWorks && <HowItWorksView block={project.howItWorks} />}

      <FlowDiagram steps={project.flow} label={`Etapas do ${project.name}`} />

      {project.details.map((block, index) => (
        <div
          key={block.heading}
          className={cn(
            "grid gap-8",
            index === 0 && project.aside && "md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:gap-12",
          )}
        >
          <DetailBlockView block={block} />
          {index === 0 && project.aside && <MediaPlayer media={project.aside} className="md:mt-10" />}
        </div>
      ))}

      <div className="grid gap-1.5 font-mono text-xs leading-relaxed text-muted-foreground">
        {project.figures && <p>{project.figures}</p>}
        <p>Stack: {project.stack}</p>
      </div>
    </article>
  );
}

function HowItWorksView({ block }: { block: HowItWorks }) {
  return (
    <div>
      <h4 className="mb-4 font-display text-lg font-bold">{block.heading}</h4>
      <ol className="grid gap-6 md:grid-cols-3 md:gap-8">
        {block.steps.map((step) => (
          <li key={step.title} className="border-t-2 border-t-foreground pt-3">
            <p className="font-display text-xl font-extrabold [font-stretch:108%]">{step.title}</p>
            <p className="mt-1.5 leading-relaxed">{step.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function DetailBlockView({ block }: { block: DetailBlock }) {
  return (
    <div className="min-w-0">
      <h4 className="mb-3 font-display text-lg font-bold">{block.heading}</h4>
      <ul className="grid max-w-[72ch] gap-2.5">
        {block.items.map((item) => (
          <li
            key={item.text}
            className="relative pl-5 leading-relaxed before:absolute before:top-[0.8em] before:left-0 before:h-px before:w-2.5 before:bg-signal"
          >
            {item.lead && <strong className="font-semibold">{item.lead}: </strong>}
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { DetailBlock, FeaturedProject } from "@/types";
import { FlowDiagram } from "./FlowDiagram";
import { MediaGallery } from "./MediaGallery";
import { MediaPlayer } from "./MediaPlayer";

type ProjectFeaturedProps = {
  project: FeaturedProject;
};

export function ProjectFeatured({ project }: ProjectFeaturedProps) {
  const [firstDetail, ...otherDetails] = project.details;
  const twoColumns = otherDetails.length > 0;
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
        <p className="measure text-lg leading-relaxed">{project.summary}</p>
      </header>

      {project.showcase.length === 1 && <MediaPlayer media={project.showcase[0]} />}
      {project.showcase.length > 1 && <MediaGallery items={project.showcase} note={project.showcaseNote} />}

      <FlowDiagram steps={project.flow} label={`Etapas do ${project.name}`} />

      <div className={cn("grid gap-10", twoColumns && "md:grid-cols-2 md:gap-12")}>
        <div className="grid content-start gap-8">
          <DetailBlockView block={firstDetail} />
          {project.aside && <MediaPlayer media={project.aside} />}
        </div>
        {otherDetails.map((block) => (
          <DetailBlockView key={block.heading} block={block} />
        ))}
      </div>

      <div className="grid gap-1.5 font-mono text-xs leading-relaxed text-muted-foreground">
        {project.figures && <p>{project.figures}</p>}
        <p>Stack: {project.stack}</p>
      </div>
    </article>
  );
}

function DetailBlockView({ block }: { block: DetailBlock }) {
  return (
    <div className="min-w-0">
      <h4 className="mb-3 font-display text-lg font-bold">{block.heading}</h4>
      {block.kind === "text" ? (
        <p className="measure leading-relaxed">{block.body}</p>
      ) : (
        <ul className="grid max-w-[72ch] gap-2.5">
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

import type { SideProject } from "@/types";

type ProjectCardProps = {
  project: SideProject;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="grid min-w-0 content-start gap-2 rounded-lg border bg-card p-5 transition-colors hover:border-primary/50">
      <span className="font-mono text-[0.8125rem] text-muted-foreground">{project.tag}</span>
      <h3 className="text-xl font-bold [font-stretch:104%]">{project.title}</h3>
      <p className="text-[0.9375rem] text-muted-foreground">{project.description}</p>
      <p className="text-[0.9375rem]">
        <span aria-hidden="true" className="mr-1.5 text-signal">
          →
        </span>
        {project.result}
      </p>
      <p className="mt-1 font-mono text-xs text-muted-foreground">{project.stack}</p>
    </article>
  );
}

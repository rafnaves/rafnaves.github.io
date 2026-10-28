import { ArrowUpRight } from "lucide-react";
import type { OpenSourceProject } from "@/types";
import { FlowDiagram } from "./FlowDiagram";

type OpenSourceProjectViewProps = {
  project: OpenSourceProject;
};

export function OpenSourceProjectView({ project }: OpenSourceProjectViewProps) {
  return (
    <article
      id={project.id}
      className="anchor-offset grid gap-5 border-t border-dashed pt-10 first:border-t-0 first:pt-0"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
        <h3 className="text-[1.5rem] font-extrabold [font-stretch:105%]">{project.title}</h3>
        <a
          href={project.repo.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-mono text-[0.8125rem] text-primary hover:underline"
        >
          {project.repo.label}
          <ArrowUpRight aria-hidden="true" className="size-3.5" />
        </a>
      </div>
      <p className="measure">{project.summary}</p>
      <FlowDiagram steps={project.flow} label={`Etapas do ${project.title}`} />
      <p className="font-mono text-xs leading-relaxed text-muted-foreground">Stack: {project.stack}</p>
    </article>
  );
}

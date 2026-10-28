import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { OpenSourceProjectView } from "@/components/OpenSourceProjectView";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectFeatured } from "@/components/ProjectFeatured";
import { ResearchList } from "@/components/ResearchList";
import { Section } from "@/components/Section";
import { Skills } from "@/components/Skills";
import { Timeline } from "@/components/Timeline";
import { certifications } from "@/data/certifications";
import { experience } from "@/data/experience";
import { navItems, observedSectionIds } from "@/data/navigation";
import { openSourceProjects } from "@/data/open-source";
import { deltas, profile } from "@/data/profile";
import { featuredProjects, sideProjects } from "@/data/projects";
import { research } from "@/data/research";
import { skills } from "@/data/skills";

export default function App() {
  return (
    <>
      <a
        href="#projetos"
        className="sr-only z-50 rounded-md bg-primary px-3 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Pular para os projetos
      </a>
      <Navbar name={profile.name} items={navItems} observedSectionIds={observedSectionIds} />

      {/* Room for the fixed navbar, so the hero starts below it. */}
      <main className="pt-(--header-h)">
        <Hero profile={profile} deltas={deltas} />

        <Section id="projetos" title="Projetos principais">
          <div className="grid gap-14">
            {featuredProjects.map((project) => (
              <ProjectFeatured key={project.id} project={project} />
            ))}
          </div>
        </Section>

        <Section id="outros" title="Outros projetos">
          <div className="grid gap-3.5 md:grid-cols-2">
            {sideProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        <Section id="open-source" title="Projetos open source">
          <div className="grid gap-10">
            {openSourceProjects.map((project) => (
              <OpenSourceProjectView key={project.id} project={project} />
            ))}
          </div>
        </Section>

        <Section id="pesquisa" title="Pesquisa">
          <ResearchList items={research} />
        </Section>

        <Section id="trajetoria" title="Trajetória">
          <Timeline items={experience} />
        </Section>

        <Section id="habilidades" title="Habilidades">
          <Skills groups={skills} />
        </Section>

        <Section id="certificacoes" title="Certificações">
          <Certifications items={certifications} />
        </Section>

        <Contact profile={profile} />
      </main>

      <Footer profile={profile} />
    </>
  );
}

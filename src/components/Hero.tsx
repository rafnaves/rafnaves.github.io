import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Delta, Profile } from "@/types";
import { Deltas } from "./Deltas";

type HeroProps = {
  profile: Profile;
  deltas: readonly Delta[];
};

// Phones show the numbers right after the opening sentence, so they fit in the first screen;
// wider screens keep the reading order.
const heroAreas =
  "[grid-template-areas:'intro'_'deltas'_'more'] lg:[grid-template-areas:'intro'_'more'_'deltas']";

export function Hero({ profile, deltas }: HeroProps) {
  const { headline } = profile;

  return (
    <section id="topo" aria-labelledby="hero-titulo" className="anchor-offset pt-8 pb-14 sm:pt-14">
      <div className={`wrap grid ${heroAreas}`}>
        <div className="min-w-0 [grid-area:intro]">
          <p className="eyebrow">
            {profile.location} · {profile.education}
          </p>

          <h1
            id="hero-titulo"
            className="mt-4 text-[clamp(2.6rem,8vw,5.2rem)] leading-[1.02] font-[850] tracking-[-0.01em] [font-stretch:118%]"
          >
            {profile.name}
          </h1>
          <p className="mt-2 font-display text-[clamp(1.25rem,3vw,1.75rem)] font-semibold text-primary sm:mt-3">
            {profile.role}
          </p>

          <ul aria-label="Áreas de atuação" className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
            {profile.areas.map((area) => (
              <li
                key={area}
                className="rounded-md border bg-card px-2.5 py-1 text-[0.8125rem] leading-tight text-muted-foreground"
              >
                {area}
              </li>
            ))}
          </ul>

          <p className="measure mt-6 text-[1.0625rem] leading-relaxed sm:text-xl">
            {headline.before}
            <span className="font-semibold underline decoration-primary decoration-[3px] underline-offset-[6px]">
              {headline.highlight}
            </span>
            {headline.after} {profile.opening}
          </p>
        </div>

        <div className="min-w-0 [grid-area:more]">
          <p className="measure mt-8 text-[0.9375rem] text-muted-foreground sm:text-base lg:mt-4">
            {profile.context}
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-7">
            <Button asChild className="font-semibold sm:h-10 sm:px-6">
              <a href="#projetos">
                Ver projetos
                <ArrowDown aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="outline" className="sm:h-10 sm:px-6">
              <a href={profile.linkedin.href} target="_blank" rel="noopener noreferrer">
                LinkedIn
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="outline" className="sm:h-10 sm:px-6">
              <a href={profile.github.href} target="_blank" rel="noopener noreferrer">
                GitHub
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>

        <Deltas items={deltas} className="mt-7 [grid-area:deltas] lg:mt-12" />
      </div>
    </section>
  );
}

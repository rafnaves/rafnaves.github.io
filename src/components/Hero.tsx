import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Delta, Profile, Sticker } from "@/types";
import { Deltas } from "./Deltas";
import { Stickers } from "./Stickers";

type HeroProps = {
  profile: Profile;
  deltas: readonly Delta[];
  stickers: readonly Sticker[];
};

// Phones show the numbers right after the opening sentence, so they fit in the first screen;
// wider screens keep the reading order and put the stickers beside the text.
const heroAreas =
  "[grid-template-areas:'intro'_'deltas'_'more'] lg:[grid-template-areas:'intro'_'more'_'deltas'] xl:grid-cols-[minmax(0,1fr)_17rem] xl:[grid-template-areas:'intro_stickers'_'more_stickers'_'deltas_deltas']";

export function Hero({ profile, deltas, stickers }: HeroProps) {
  const { headline } = profile;

  return (
    <section
      id="topo"
      aria-labelledby="hero-titulo"
      className="scroll-mt-28 pt-8 pb-14 sm:pt-14 md:scroll-mt-20"
    >
      <div className={`wrap grid xl:gap-x-10 ${heroAreas}`}>
        <div className="min-w-0 [grid-area:intro]">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="eyebrow">
              {profile.location} · {profile.education}
            </p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full border bg-card px-2.5 py-0.5 font-mono text-xs transition-colors hover:border-primary"
            >
              <span aria-hidden="true" className="relative flex size-2">
                <span className="absolute inset-0 rounded-full bg-primary opacity-60 motion-safe:animate-ping" />
                <span className="relative size-2 rounded-full bg-primary" />
              </span>
              {profile.availabilityTag}
            </a>
          </div>

          <h1
            id="hero-titulo"
            className="mt-4 text-[clamp(2.6rem,8vw,5.2rem)] leading-[1.02] font-[850] tracking-[-0.01em] [font-stretch:118%]"
          >
            {profile.name}
          </h1>
          <p className="mt-2 font-display text-[clamp(1.25rem,3vw,1.75rem)] font-semibold text-primary sm:mt-3">
            {profile.role}
          </p>

          <p className="measure mt-5 text-[1.0625rem] leading-relaxed sm:mt-6 sm:text-xl">
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
            <Button asChild className="sm:h-10 sm:px-6">
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

        <Stickers items={stickers} className="hidden [grid-area:stickers] xl:flex" />

        <Deltas items={deltas} className="mt-7 [grid-area:deltas] lg:mt-12" />
      </div>
    </section>
  );
}

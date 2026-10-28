import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Profile } from "@/types";
import { CopyEmail } from "./CopyEmail";

type ContactProps = {
  profile: Profile;
};

export function Contact({ profile }: ContactProps) {
  const links = [profile.linkedin, profile.github];

  return (
    <section
      id="contato"
      aria-labelledby="contato-titulo"
      className="below-fold scroll-mt-28 border-t-2 border-t-foreground py-16 sm:py-20 md:scroll-mt-20"
    >
      <div className="wrap grid gap-3 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-6">
        <p className="eyebrow lg:pt-4">Contato</p>
        <div className="min-w-0">
          <h2
            id="contato-titulo"
            className="text-[clamp(2.6rem,7vw,4.5rem)] leading-none font-[850] [font-stretch:115%]"
          >
            Vamos conversar
          </h2>
          <p className="measure mt-5 text-lg text-muted-foreground">{profile.availability}</p>
          <CopyEmail email={profile.email} />
          <div className="mt-6 flex flex-wrap gap-2.5">
            {links.map((link) => (
              <Button key={link.href} asChild variant="outline">
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

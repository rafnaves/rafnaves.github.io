import type { Profile } from "@/types";

type FooterProps = {
  profile: Profile;
};

export function Footer({ profile }: FooterProps) {
  return (
    <footer className="border-t py-6">
      <div className="wrap flex flex-col gap-2 font-mono text-xs leading-relaxed text-muted-foreground sm:flex-row sm:justify-between sm:gap-6">
        <p>
          {profile.name} · {profile.footnote}
        </p>
        <a href="#topo" className="shrink-0 text-foreground underline hover:text-primary">
          voltar ao topo ↑
        </a>
      </div>
    </footer>
  );
}

import type { NavItem } from "@/types";

export const navItems: readonly NavItem[] = [
  { href: "#projetos", label: "Projetos", sectionIds: ["projetos", "outros"] },
  { href: "#open-source", label: "Open source", sectionIds: ["open-source"] },
  { href: "#pesquisa", label: "Pesquisa", sectionIds: ["pesquisa"] },
  {
    href: "#trajetoria",
    label: "Trajetória",
    sectionIds: ["trajetoria", "habilidades", "certificacoes"],
  },
  { href: "#contato", label: "Contato", sectionIds: ["contato"] },
];

export const observedSectionIds: readonly string[] = [
  "topo",
  ...navItems.flatMap((item) => item.sectionIds),
];

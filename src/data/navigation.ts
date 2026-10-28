import type { NavItem } from "@/types";

export const navItems: readonly NavItem[] = [
  { href: "#projetos", label: "Projetos", sectionIds: ["projetos", "outros", "open-source"] },
  { href: "#pesquisa", label: "Pesquisa", sectionIds: ["pesquisa"] },
  { href: "#trajetoria", label: "Trajetória", sectionIds: ["trajetoria"] },
  { href: "#habilidades", label: "Habilidades", sectionIds: ["habilidades", "certificacoes"] },
  { href: "#contato", label: "Contato", sectionIds: ["contato"] },
];

export const observedSectionIds: readonly string[] = [
  "topo",
  ...navItems.flatMap((item) => item.sectionIds),
];

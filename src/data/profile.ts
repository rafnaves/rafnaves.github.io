import type { Delta, Profile, Sticker } from "@/types";

export const profile: Profile = {
  name: "Rafael Naves",
  role: "Engenheiro de IA e Dados",
  location: "Catalão, GO",
  education: "Ciência da Computação, UFCAT",
  headline: {
    before: "Construo sistemas de IA que saem do protótipo e entram em ",
    highlight: "produção",
    after: ".",
  },
  opening:
    "Numa montadora, já são dois: um estudo de produtividade que levava 2–3 meses passou a levar 30 minutos (+6% de valor agregado na linha), e indicadores que levavam 6–7 horas passaram a sair em 5 minutos.",
  context:
    "Trabalho no grupo de inovação da área industrial, com visão computacional, agentes de IA e engenharia de dados aplicados a processos reais da fábrica.",
  availabilityTag: "Aberto a vagas",
  availability:
    "Estou aberto a vagas de engenharia de IA, dados e software, remotas ou nas regiões de Goiânia, Triângulo Mineiro, Belo Horizonte e Campinas.",
  email: "contatorafaelnaves@icloud.com",
  linkedin: {
    label: "linkedin.com/in/rafael-naves-ai",
    href: "https://www.linkedin.com/in/rafael-naves-ai",
  },
  github: { label: "github.com/rafnaves", href: "https://github.com/rafnaves" },
  sourceCode: {
    label: "código deste site",
    href: "https://github.com/rafnaves/rafnaves.github.io",
  },
  footnote: "Projetos da HPE Automotores descritos com autorização para divulgação.",
};

export const deltas: readonly Delta[] = [
  {
    before: "2–3 meses",
    value: "30 min",
    label: "por estudo de valor agregado da linha de montagem",
    projectId: "ava",
    projectLabel: "AVA",
  },
  {
    before: "6–7 horas",
    value: "5 min",
    label: "para fechar indicadores da Diretoria Industrial",
    projectId: "firebreak",
    projectLabel: "Firebreak",
  },
  {
    before: "linha base",
    value: "+6%",
    label: "de valor agregado na linha, após mudança sugerida pelos dados",
    projectId: "ava",
    projectLabel: "AVA",
  },
  {
    before: "60% de precisão",
    value: "80%",
    label: "na identidade de operadores com re-identificação própria",
    projectId: "ava",
    projectLabel: "AVA",
  },
];

/** Tilted notes next to the hero: real facts, said informally. */
export const stickers: readonly Sticker[] = [
  { kicker: "AVA", text: "roda sem GPU", tone: "paper", rotation: -5 },
  {
    kicker: "Firebreak",
    text: "nenhum agente escreve sem um humano aprovar",
    tone: "accent",
    rotation: 3,
  },
  { kicker: "Firebreak", text: "443 testes automatizados", tone: "ink", rotation: -2 },
];

import type { Delta, Profile } from "@/types";

export const profile: Profile = {
  name: "Rafael Naves",
  role: "Engenheiro de IA e Dados",
  location: "Catalão, GO",
  education: "Ciência da Computação, UFCAT",
  areas: [
    "Visão computacional",
    "IA generativa e LLMs",
    "Agentes de IA",
    "Engenharia de dados",
    "Machine learning",
  ],
  headline: {
    before: "Construo sistemas de IA que saem do protótipo e entram em ",
    highlight: "produção",
    after: ".",
  },
  opening:
    "Numa montadora, já são dois: indicadores que levavam 6–7 horas passaram a sair em 5 minutos, e um estudo de produtividade que levava 2–3 meses passou a levar 30 minutos (+6% de valor agregado na linha).",
  context:
    "Trabalho no grupo de inovação da área industrial, com visão computacional, agentes de IA e engenharia de dados aplicados a processos reais da fábrica.",
  email: "contatorafaelnaves@icloud.com",
  linkedin: {
    label: "linkedin.com/in/rafael-naves-ai",
    href: "https://www.linkedin.com/in/rafael-naves-ai",
  },
  github: { label: "github.com/rafnaves", href: "https://github.com/rafnaves" },
  footnote: "Projetos da HPE Automotores descritos com autorização para divulgação.",
};

// Same order as the projects below: Firebreak first, then AVA.
export const deltas: readonly Delta[] = [
  {
    before: "6–7 horas",
    value: "5 min",
    label: "para fechar indicadores da Diretoria Industrial",
    projectId: "firebreak",
    projectLabel: "Firebreak",
  },
  {
    before: "2–3 meses",
    value: "30 min",
    label: "por estudo de balanceamento da linha de montagem",
    projectId: "ava",
    projectLabel: "AVA",
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

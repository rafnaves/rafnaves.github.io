import type { ResearchItem } from "@/types";

export const research: readonly ResearchItem[] = [
  {
    tag: "TCC · machine learning",
    title: "Stalker Detector",
    description:
      "Detecção de rastreadores Bluetooth maliciosos, como AirTags usados para seguir pessoas, com um motor de três filtros em cascata: frequência de exposição, co-movimento por distância de Haversine e persistência temporal.",
    result:
      "F1 de 82,1% no dataset de campo BLE-Doubt, superando em recall o estado da arte, com validação estratificada 70/30.",
    metric: { value: "98%", label: "de recall" },
  },
  {
    tag: "Artigo · LLMs",
    title: "Sumarização com LLMs",
    description:
      "Aplicação full-stack para comparar sumarização extrativa e abstrativa com engenharia de prompt orientada ao domínio acadêmico, do protótipo em Figma à análise dos resultados.",
    result:
      "Superou ChatGPT e DeepSeek em ROUGE-1 e ROUGE-L em textos acadêmicos. Apresentado em evento da UFCAT.",
  },
];

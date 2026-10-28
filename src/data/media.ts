import type { ImageMedia, VideoMedia } from "@/types";

// Every file here was reviewed before publishing: operator faces in the AVA video were
// already blurred, the audio was removed, and the Firebreak screens use demo data
// (the chassis number on the Apollo screen is blurred anyway).

export const avaLineVideo: VideoMedia = {
  id: "ava-linha",
  kind: "video",
  label: "AVA na linha",
  caption:
    "Cada operador recebe um ID e uma atividade: instalando peça, coletando peça, se movimentando ou parado. Rostos borrados.",
  alt: "Vista de cima de uma estação da linha de montagem, com caixas coloridas em volta de cada operador e a atividade de cada um escrita sobre a caixa.",
  sources: [
    { src: "/assets/ava/ava-linha.webm", type: "video/webm" },
    { src: "/assets/ava/ava-linha.mp4", type: "video/mp4" },
  ],
  poster: "/assets/ava/ava-linha-poster.webp",
  width: 1160,
  height: 552,
};

export const avaAssistantScreen: ImageMedia = {
  id: "ava-assistente",
  kind: "image",
  label: "Assistente via MCP",
  caption: "O assistente consulta as atividades de um estudo e compara com outro estudo.",
  alt: "Tela escura do assistente do AVA mostrando as chamadas de ferramenta consultar_atividades_parquet e comparar_com_outro_estudo concluídas.",
  src: "/assets/ava/assistente-mcp.webp",
  width: 1170,
  height: 617,
};

export const firebreakClips: readonly VideoMedia[] = [
  {
    id: "firebreak-copiloto",
    kind: "video",
    label: "Copiloto",
    caption: "O agente monta planilhas, reports e relatórios, e nada sai sem aprovação humana.",
    alt: "Copiloto do Firebreak com um plano de quatro passos, o último aguardando revisão, ao lado da prévia de um relatório com gráfico de barras.",
    sources: [{ src: "/assets/firebreak/copiloto.mp4", type: "video/mp4" }],
    poster: "/assets/firebreak/copiloto-poster.webp",
    width: 900,
    height: 598,
  },
  {
    id: "firebreak-apollo",
    kind: "video",
    label: "Apollo",
    caption: "Uma fonte nova de dados entra e é ligada sozinha aos objetos certos, sem configuração manual.",
    alt: "Tela do Apollo ligando fontes como ERP e planilhas a um objeto Veículo, com o aviso de fonte nova entendida.",
    sources: [{ src: "/assets/firebreak/apollo.mp4", type: "video/mp4" }],
    poster: "/assets/firebreak/apollo-poster.webp",
    width: 900,
    height: 598,
  },
  {
    id: "firebreak-painel",
    kind: "video",
    label: "Painel",
    caption: "Com os dados modelados como uma ontologia, a busca é ampla e rápida.",
    alt: "Painel da Manufatura com indicadores, um gráfico de avanço semanal abaixo do limiar e a lista de projetos em risco.",
    sources: [{ src: "/assets/firebreak/painel.mp4", type: "video/mp4" }],
    poster: "/assets/firebreak/painel-poster.webp",
    width: 900,
    height: 598,
  },
  {
    id: "firebreak-visao-geral",
    kind: "video",
    label: "Visão geral",
    caption: "Uma pergunta em linguagem natural cruza três fontes e mostra como os dados se ligam.",
    alt: "Página do Firebreak com o Copiloto respondendo uma pergunta sobre veículos e um grafo de como as fontes se ligam.",
    sources: [{ src: "/assets/firebreak/visao-geral.mp4", type: "video/mp4" }],
    poster: "/assets/firebreak/visao-geral-poster.webp",
    width: 1000,
    height: 624,
  },
];

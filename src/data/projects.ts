import type { FeaturedProject, SideProject } from "@/types";
import { avaAssistantScreen, avaLineVideo, firebreakClips } from "./media";

// Each number appears at most twice per section: once in the facts row and once in the text.

export const ava: FeaturedProject = {
  id: "ava",
  name: "AVA",
  subtitle: "Análise de Valor Agregado",
  status: "em produção · HPE Automotores",
  facts: [
    { before: "2–3 meses", value: "30 min", label: "por estudo de valor agregado" },
    { value: "+6%", label: "de valor agregado na linha" },
    { value: "99%", label: "de acurácia na detecção de operadores" },
    { before: "60%", value: "80%", label: "de precisão de identidade" },
  ],
  summary:
    "Automatizei a cronoanálise da linha de montagem com visão computacional. O sistema mede quanto do tempo de cada operador é trabalho produtivo e quanto se perde em deslocamento e espera, rodando em computadores da fábrica sem GPU.",
  showcase: [avaLineVideo],
  flow: {
    caption: "Pipeline em cascata",
    steps: [
      { title: "Vídeo da linha", detail: "quadros extraídos" },
      { title: "Detecção", detail: "YOLO · PyTorch" },
      { title: "Re-identificação", detail: "OSNet · recupera o ID", highlight: true },
      { title: "Tracker próprio", detail: "ByteTrack · tentative → confirmed → lost → deleted" },
      { title: "Pós-processamento", detail: "valida e agrupa trilhas" },
      { title: "Métricas e relatórios", detail: "heatmap · dashboard · PDF" },
    ],
  },
  details: [
    {
      kind: "text",
      heading: "O problema",
      body: "Detectar uma pessoa num quadro é fácil. O difícil é garantir que a pessoa do quadro 100 é a mesma do quadro 4.000. Na fábrica todos usam o mesmo uniforme, com piso e iluminação uniformes, e os trackers prontos trocavam a identidade de quem saía e voltava ao enquadramento.",
    },
    {
      kind: "list",
      heading: "O que eu fiz",
      items: [
        "Automatizei com visão computacional uma cronoanálise feita à mão: o estudo de valor agregado da linha de montagem caiu de 2–3 meses para 30 minutos, e uma mudança sugerida pelos dados gerou +6% de valor agregado.",
        "Atingi 99% de acurácia na detecção de operadores, do dataset anotado no Roboflow, com scripts de data augmentation, ao treino do YOLO em PyTorch.",
        "Elevei de 60% para 80% a precisão de identidade num ambiente em que todos usam o mesmo uniforme. Quando os trackers prontos falharam, treinei re-identificação (OSNet) e construí um tracker próprio sobre ByteTrack, com máquina de estados.",
        "Coloquei o pipeline para rodar sem GPU, com a inferência otimizada em OpenVINO.",
        "Criei um assistente de IA via MCP que gera relatórios, PDFs e planilhas automaticamente.",
      ],
    },
  ],
  aside: avaAssistantScreen,
  stack:
    "Python, PyTorch, Ultralytics YOLO, torchreid (OSNet), ByteTrack, OpenCV, OpenVINO, Roboflow, FastAPI, React, MCP",
};

export const firebreak: FeaturedProject = {
  id: "firebreak",
  name: "Firebreak",
  subtitle: "Plataforma de dados e agentes de IA",
  status: "em produção · Diretoria Industrial",
  facts: [
    {
      before: "6–7 h",
      value: "5 min",
      label: "por processo, como o cálculo de indicadores e o acompanhamento de carros e containers",
    },
    { value: "27", label: "pipelines ETL unificando 8 fontes num modelo único em PostgreSQL" },
    { value: "31", label: "indicadores monitorados com alerta automático" },
    { value: "47", label: "ações que os agentes de IA executam, com aprovação humana" },
  ],
  summary:
    "Na Diretoria Industrial, cada área tinha seus dados num sistema diferente, e fechar um indicador exigia juntar tudo à mão. Construí um sistema de registro único que lê os sistemas existentes sem migração, calcula cada indicador num só lugar e avisa sozinho quando um número cruza um limiar.",
  showcase: firebreakClips,
  showcaseNote: "Telas do Firebreak · dados fictícios de demonstração",
  flow: {
    caption: "Fluxo de dado padronizado",
    steps: [
      { title: "Fonte", detail: "ERP Oracle · MES SQL Server · SharePoint · Dataverse · PDFs" },
      { title: "Ingestão", detail: "pipelines ETL · proveniência selada" },
      { title: "Objeto", detail: "ontologia · 41 tipos", highlight: true },
      { title: "Indicador", detail: "calculado num só lugar" },
      { title: "Aviso", detail: "limiar por métrica" },
      { title: "Tela e agentes", detail: "React · agentes com aprovação humana" },
    ],
  },
  details: [
    {
      kind: "list",
      heading: "O que eu fiz",
      items: [
        "Levantei as necessidades com qualidade, logística e manufatura e unifiquei ERP (Oracle), MES (SQL Server), SharePoint, OneDrive, Planner e Dataverse com 27 pipelines ETL num modelo único em PostgreSQL. O cálculo de indicadores da Diretoria Industrial caiu de 6–7 horas para 5 minutos.",
        "Modelei o negócio como uma ontologia: cada objeto tem descrição, propriedades, relações e ações.",
        "Garanti dados confiáveis: cada carga registra o que entrou, quando, de onde e por quem, com linhagem até a fonte, e 31 indicadores têm alerta automático.",
        "Implementei agentes de IA (MCP, LLMs locais) que respondem em linguagem natural e executam até 47 ações, sempre com aprovação humana antes de qualquer escrita, além de RAG sobre documentação técnica.",
        "Entreguei a plataforma de ponta a ponta: microsserviços em FastAPI com 11 domínios e front-end em React e TypeScript com design system próprio.",
      ],
    },
    {
      kind: "list",
      heading: "Qualidade e segurança",
      items: [
        "443 testes automatizados em 34 arquivos.",
        "Aprovação nos scanners de segurança da TI, sem achado crítico: 0 segredos expostos, 0 bibliotecas vulneráveis em 60 pacotes, 0 problemas de configuração.",
        "Docker multi-estágio e CI/CD no GitLab.",
      ],
    },
  ],
  stats: {
    heading: "Em números",
    items: [
      { value: "270", label: "rotas de API" },
      { value: "73", label: "tabelas" },
      { value: "41", label: "tipos de objeto" },
      { value: "~67 mil", label: "linhas de Python e TypeScript" },
      { value: "443", label: "testes automatizados" },
      { value: "~3 meses", label: "de desenvolvimento" },
    ],
  },
  stack:
    "Python, FastAPI, SQLModel, PostgreSQL, Alembic, Oracle, SQL Server, Microsoft Graph, React, TypeScript, Tailwind, MCP, LangChain, Ollama, ChromaDB, Docker, GitLab CI, pytest",
};

export const featuredProjects: readonly FeaturedProject[] = [ava, firebreak];

export const sideProjects: readonly SideProject[] = [
  {
    tag: "LLM · RAG",
    title: "Assistente de manual técnico (SAC)",
    description:
      "Chatbot que responde especificações de veículos consultando o manual técnico, com resposta fundamentada no documento e indicação da página de origem.",
    result:
      "474 páginas indexadas em 796 blocos, rodando 100% local para manter o dado do fabricante dentro da empresa.",
    stack: "LangChain, LangGraph, ChromaDB, Hugging Face, Ollama",
  },
  {
    tag: "Automação",
    title: "Relatórios industriais automatizados",
    description:
      "Coleta dados de Oracle, SQL Server, intranet e pastas de rede e distribui relatórios de faturamento, liberações, reparos e alertas climáticos por e-mail.",
    result: "Elimina a consolidação manual com execução agendada.",
    stack: "Python, SQL, Pandas, Polars, Plotly, uv",
  },
  {
    tag: "Dashboard",
    title: "Painel gerencial serverless",
    description:
      "Dashboard estático gerado a partir de planilhas e publicado numa pasta de rede, para contornar o bloqueio do firewall corporativo sem servidor rodando.",
    result: "Planilha → Parquet → JSON → build estático, sob demanda.",
    stack: "Polars, Next.js, React",
  },
  {
    tag: "App desktop",
    title: "Data Workspace",
    description:
      "Aplicação para acompanhar programas de engenharia, substituindo planilhas complexas por métricas em tempo real, auto-save e lixeira com restauração.",
    result: "Desenhada a partir da rotina da usuária final.",
    stack: "Tauri (Rust), React, Recharts",
  },
];

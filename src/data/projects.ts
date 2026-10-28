import type { FeaturedProject, SideProject } from "@/types";
import { avaAssistantScreen, avaLineVideo, firebreakClips } from "./media";

// The before/after results live in the hero (profile.ts); the bullets here add what is not there.

export const firebreak: FeaturedProject = {
  id: "firebreak",
  name: "Firebreak",
  subtitle: "Plataforma de dados e agentes de IA",
  status: "em produção · HPE Automotores (Mitsubishi) · Diretoria Industrial",
  summary:
    "Na Diretoria Industrial, cada área tinha seus dados num sistema diferente, e fechar um indicador exigia juntar tudo à mão. Construí um sistema de registro único que lê os sistemas existentes sem migração, calcula cada indicador num só lugar e avisa sozinho quando um número cruza um limiar.",
  showcase: firebreakClips,
  showcaseNote: "As telas abaixo usam dados fictícios de demonstração.",
  flow: [
    {
      title: "Fonte",
      detail: "ERP Oracle · MES SQL Server · SharePoint · OneDrive · Planner · Dataverse · PDFs",
    },
    { title: "Ingestão", detail: "pipelines ETL · proveniência selada" },
    { title: "Objeto", detail: "ontologia", highlight: true },
    { title: "Indicador", detail: "calculado num só lugar" },
    { title: "Aviso", detail: "limiar por métrica" },
    { title: "Tela e agentes", detail: "React · agentes com aprovação humana" },
  ],
  details: [
    {
      kind: "list",
      heading: "O que eu fiz",
      items: [
        "Levantei as necessidades com qualidade, logística e manufatura e unifiquei 8 fontes com 27 pipelines ETL num modelo único em PostgreSQL.",
        "Modelei o negócio como uma ontologia: cada objeto tem descrição, propriedades, relações e ações.",
        "Cada carga registra o que entrou, quando, de onde e por quem, e 31 indicadores têm alerta automático.",
        "Agentes de IA (MCP, LLMs locais, RAG) respondem em linguagem natural e executam até 47 ações, sempre com aprovação humana.",
        "Entreguei de ponta a ponta: microsserviços em FastAPI com 11 domínios e front-end em React com design system próprio.",
        "Passou nos scanners de segurança da TI sem achado crítico; Docker multi-estágio e CI/CD no GitLab.",
      ],
    },
  ],
  figures:
    "270 rotas de API · 73 tabelas · 41 tipos de objeto · ~67 mil linhas de Python e TypeScript · 443 testes · ~3 meses de desenvolvimento",
  stack:
    "Python, FastAPI, SQLModel, PostgreSQL, Alembic, Oracle, SQL Server, Microsoft Graph, React, TypeScript, Tailwind, MCP, LangChain, Ollama, ChromaDB, Docker, GitLab CI, pytest",
};

export const ava: FeaturedProject = {
  id: "ava",
  name: "AVA",
  subtitle: "Análise de Valor Agregado",
  status: "em produção · HPE Automotores (Mitsubishi)",
  summary:
    "Automatizei a cronoanálise da linha de montagem com visão computacional. O sistema mede quanto do tempo de cada operador é trabalho produtivo e quanto se perde em deslocamento e espera, rodando em computadores da fábrica sem GPU.",
  showcase: [avaLineVideo],
  flow: [
    { title: "Vídeo da linha", detail: "quadros extraídos" },
    { title: "Detecção", detail: "YOLO · PyTorch" },
    { title: "Re-identificação", detail: "OSNet · recupera o ID", highlight: true },
    { title: "Tracker próprio", detail: "ByteTrack · tentative → confirmed → lost → deleted" },
    { title: "Pós-processamento", detail: "valida e agrupa trilhas" },
    { title: "Métricas e relatórios", detail: "heatmap · dashboard · PDF" },
  ],
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
        "Atingi 99% de acurácia na detecção de operadores: dataset anotado no Roboflow, data augmentation e YOLO treinado em PyTorch.",
        "Treinei re-identificação (OSNet) e construí um tracker próprio sobre ByteTrack, com máquina de estados.",
        "Otimizei a inferência com OpenVINO para o pipeline caber em CPU.",
        "Criei um assistente de IA via MCP que gera relatórios, PDFs e planilhas automaticamente.",
      ],
    },
  ],
  aside: avaAssistantScreen,
  stack:
    "Python, PyTorch, Ultralytics YOLO, torchreid (OSNet), ByteTrack, OpenCV, OpenVINO, Roboflow, FastAPI, React, MCP",
};

export const featuredProjects: readonly FeaturedProject[] = [firebreak, ava];

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

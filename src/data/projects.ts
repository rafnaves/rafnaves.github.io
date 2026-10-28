import type { FeaturedProject, SideProject } from "@/types";
import { avaAssistantScreen, avaLineVideo, firebreakClips } from "./media";

// The before/after results live in the hero (profile.ts); the bullets here add what is not there.

export const firebreak: FeaturedProject = {
  id: "firebreak",
  name: "Firebreak",
  subtitle: "Plataforma de dados e agentes de IA",
  status: "em produção · HPE Automotores (Mitsubishi) · Diretoria Industrial",
  summary: [
    "Na Diretoria Industrial, cada área tinha seus dados num sistema diferente, e calcular os indicadores era complexo: era preciso juntar tudo à mão, em softwares que travavam, e o processo levava em torno de 6 horas. Construí um sistema de registro único que lê os sistemas existentes sem migração, calcula cada indicador num só lugar e avisa sozinho quando um número cruza um limiar.",
  ],
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
      heading: "O que eu fiz",
      items: [
        // ~30 h/month: two 6-7 h processes, one weekly and one monthly (4 x 6 h + 1 x 6 h, rounded down).
        { text: "Devolvi cerca de 30 horas de trabalho manual por mês à Diretoria Industrial: os dois processos mais demorados, um semanal e um mensal, passaram a sair em minutos." },
        { text: "Levantei as necessidades com qualidade, logística e manufatura e unifiquei 8 fontes com 27 pipelines ETL num modelo único em PostgreSQL." },
        { text: "Modelei o negócio como uma ontologia: cada objeto tem descrição, propriedades, relações e ações." },
        { text: "Cada carga registra o que entrou, quando, de onde e por quem, e 31 indicadores têm alerta automático." },
        { text: "Agentes de IA (MCP, LLMs locais, RAG) respondem em linguagem natural e executam até 47 ações, sempre com aprovação humana." },
        { text: "Entreguei de ponta a ponta: microsserviços em FastAPI com 11 domínios e front-end em React com design system próprio." },
        { text: "Passou nos scanners de segurança da TI sem achado crítico; Docker multi-estágio e CI/CD no GitLab." },
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
  summary: [
    "O AVA mede, com visão computacional, quanto do tempo de cada operador da linha de montagem é trabalho que agrega valor e quanto se perde em deslocamento e espera. Com esses dados, LLMs analisam os padrões de montagem e propõem melhorias no balanceamento da linha, ou seja, como redistribuir as tarefas entre os postos para montar mais carros no mesmo tempo.",
    "Antes, esse estudo (a cronoanálise) era feito à mão: levava de 2 a 3 meses, dependia da observação de cada analista e travava as decisões de balanceamento. Com o AVA, sai em 30 minutos, rodando nos computadores da própria fábrica, sem GPU. Uma mudança sugerida pelos dados do sistema gerou +6% de valor agregado na linha.",
  ],
  showcase: [avaLineVideo],
  howItWorks: {
    heading: "Como funciona",
    steps: [
      {
        title: "Mede",
        text: "Câmeras na linha registram o trabalho, e a visão computacional identifica cada operador e classifica o que ele está fazendo: instalando peça, coletando peça, se movimentando ou parado.",
      },
      {
        title: "Analisa",
        text: "O sistema calcula o tempo produtivo e o tempo perdido de cada posto, e LLMs encontram padrões de montagem e gargalos.",
      },
      {
        title: "Propõe",
        text: "O AVA sugere ajustes no balanceamento da linha e gera automaticamente o estudo completo, com relatórios, PDFs e planilhas, sem a redação manual do analista.",
      },
    ],
  },
  flow: [
    { title: "Vídeo da linha", detail: "quadros extraídos" },
    { title: "Detecção", detail: "YOLO" },
    { title: "Re-identificação", detail: "OSNet", highlight: true },
    { title: "Tracker próprio", detail: "ByteTrack com máquina de estados" },
    { title: "Tempos por atividade", detail: "produtivo, deslocamento, espera" },
    { title: "Análise por LLM", detail: "padrões e propostas de balanceamento" },
    { title: "Relatórios", detail: "heatmap, dashboard, PDF e planilhas" },
  ],
  details: [
    {
      heading: "Por dentro",
      items: [
        {
          lead: "Detecção",
          text: "anotei o dataset no Roboflow, criei scripts de data augmentation e treinei o YOLO em PyTorch, chegando a 99% de acurácia na detecção de operadores.",
        },
        {
          lead: "Identidade",
          text: "na fábrica, todos usam o mesmo uniforme, sob a mesma iluminação, e os trackers prontos erravam cerca de 40% das associações de ID. Treinei re-identificação (OSNet) e construí um tracker próprio sobre ByteTrack, elevando a precisão de identidade de cerca de 60% para 80%.",
        },
        {
          lead: "Validação",
          text: "um pós-processamento com múltiplos modelos confere os resultados e consolida trilhas fragmentadas antes de gerar as métricas.",
        },
        {
          lead: "Sem GPU",
          text: "otimizei a inferência com OpenVINO até o pipeline inteiro caber no hardware da fábrica.",
        },
        {
          lead: "Análise e relatórios",
          text: "LLMs, integrados via MCP, leem os resultados do estudo, comparam estudos e geram relatórios, PDFs e planilhas automaticamente.",
        },
      ],
    },
  ],
  aside: avaAssistantScreen,
  stack:
    "Python, PyTorch, Ultralytics YOLO, torchreid (OSNet), ByteTrack, OpenCV, OpenVINO, Roboflow, LLMs, MCP, FastAPI, React",
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

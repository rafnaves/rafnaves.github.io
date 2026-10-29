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
      heading: "Impacto",
      items: [
        {
          text: [
            "Processos de ",
            { strong: "6–7 horas caíram para cerca de 5 minutos, com acesso instantâneo" },
            ", como o cálculo de indicadores da Diretoria Industrial e o rastreamento total de carros e containers, do início do processo ao fim.",
          ],
        },
        {
          // ~30 h/month: two 6-7 h processes, one weekly and one monthly (4 x 6 h + 1 x 6 h, rounded down).
          text: [
            { strong: "Cerca de 30 horas de trabalho manual devolvidas por mês" },
            " à Diretoria Industrial, somando um processo semanal e um mensal.",
          ],
        },
        {
          text: [
            "Indicadores que levavam ",
            { strong: "meses de coleta manual em planilha" },
            " agora saem do sistema com origem rastreável.",
          ],
        },
        {
          text: [
            { strong: "27 pipelines de ingestão unificando 8 fontes" },
            " num modelo único em PostgreSQL.",
          ],
        },
        {
          text: [{ strong: "31 métricas monitoradas por limiar" }, ", com aviso automático."],
        },
        {
          text: [
            "Agentes de IA com ",
            { strong: "até 47 ações no sistema" },
            ", sempre com aprovação humana antes de qualquer escrita.",
          ],
        },
        {
          text: [
            "Aprovado nos scanners de segurança da TI, ",
            { strong: "sem achado crítico pendente" },
            ".",
          ],
        },
      ],
    },
    {
      heading: "O que eu fiz",
      items: [
        { text: "Levantei as necessidades com qualidade, logística e manufatura e conectei ERP (Oracle), MES (SQL Server), SharePoint, OneDrive, Planner e Dataverse." },
        { text: "Modelei o negócio como uma ontologia: cada objeto tem descrição, propriedades, relações e ações." },
        { text: "Cada carga registra o que entrou, quando, de onde e por quem, com linhagem até a fonte." },
        { text: "Implementei os agentes de IA com MCP, LLMs locais e RAG, que respondem em linguagem natural." },
        { text: "Entreguei de ponta a ponta: microsserviços em FastAPI com 11 domínios, front-end em React com design system próprio, Docker multi-estágio e CI/CD no GitLab." },
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
    "Antes, esse estudo (a cronoanálise) era feito à mão: levava meses, dependia da observação de cada analista e travava as decisões de balanceamento. Com o AVA, ele sai em minutos.",
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
      heading: "Impacto",
      items: [
        {
          text: ["A cronoanálise caiu de ", { strong: "2–3 meses para 30 minutos" }, " por estudo."],
        },
        {
          text: [{ strong: "+6% de valor agregado" }, " na linha com uma mudança sugerida pelos dados do sistema."],
        },
        {
          text: [{ strong: "99% de acurácia" }, " na detecção de operadores."],
        },
        {
          text: [
            "Precisão de identidade de ",
            { strong: "cerca de 60% para 80%" },
            ", onde os trackers prontos erravam cerca de 40% das associações de ID.",
          ],
        },
        {
          text: ["Roda ", { strong: "sem GPU" }, ", nos computadores da própria fábrica."],
        },
      ],
    },
    {
      heading: "Por dentro",
      aside: avaAssistantScreen,
      items: [
        {
          lead: "Detecção",
          text: "anotei o dataset no Roboflow, criei scripts de data augmentation e treinei o YOLO em PyTorch.",
        },
        {
          lead: "Identidade",
          text: "na fábrica, todos usam o mesmo uniforme, sob a mesma iluminação, e os trackers prontos trocavam o ID de quem saía e voltava ao enquadramento. Treinei re-identificação (OSNet) e construí um tracker próprio sobre ByteTrack.",
        },
        {
          lead: "Validação",
          text: "um pós-processamento com múltiplos modelos confere os resultados e consolida trilhas fragmentadas antes de gerar as métricas.",
        },
        {
          lead: "Inferência",
          text: "otimizei com OpenVINO até o pipeline inteiro caber no hardware da fábrica.",
        },
        {
          lead: "Análise e relatórios",
          text: "LLMs, integrados via MCP, leem os resultados do estudo, comparam estudos e geram relatórios, PDFs e planilhas automaticamente.",
        },
      ],
    },
  ],
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

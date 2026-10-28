import type { OpenSourceProject } from "@/types";

export const openSourceProjects: readonly OpenSourceProject[] = [
  {
    id: "zeitgeist",
    title: "Zeitgeist · Análise de sentimento em tempo real",
    repo: { label: "github.com/rafnaves/zeitgeist", href: "https://github.com/rafnaves/zeitgeist" },
    summary:
      "Pipeline de engenharia de dados de ponta a ponta, com ETL e streaming, que captura notícias em tempo real, analisa o sentimento de cada texto com um modelo de NLP e mostra os resultados num dashboard interativo.",
    flow: [
      { title: "Notícias", detail: "RSS · Feedparser" },
      { title: "Kafka", detail: "mensageria · modo KRaft" },
      { title: "Spark + BERT", detail: "Structured Streaming · Transformers multilíngue", highlight: true },
      { title: "PostgreSQL", detail: "armazenamento" },
      { title: "Dashboard", detail: "Streamlit · Plotly" },
    ],
    stack:
      "Python 3.11, uv, Apache Kafka, Apache Spark (PySpark Structured Streaming), Hugging Face Transformers (BERT multilíngue), PostgreSQL, Streamlit, Plotly, Docker Compose",
  },
  {
    id: "zig",
    title: "Analisador léxico e sintático para Zig",
    // TODO: link do repositório do analisador de Zig. Hoje aponta para o perfil, como no site antigo.
    repo: { label: "github.com/rafnaves", href: "https://github.com/rafnaves" },
    summary:
      "Analisador para a linguagem Zig escrito em Go. Lê o código-fonte, transforma cada número, operador, palavra-chave e símbolo em um token com tipo e valor, monta a árvore de sintaxe abstrata (AST) e imprime os tokens e a árvore no console.",
    flow: [
      { title: "Código Zig", detail: "lido como string" },
      { title: "Lexer", detail: "expressões regulares" },
      { title: "Tokens", detail: "tipo e valor" },
      { title: "Parser", detail: "monta a AST", highlight: true },
      { title: "Saída", detail: "tokens e AST no console" },
    ],
    stack: "Go, expressões regulares, análise léxica e sintática",
  },
];

import type { SkillGroup } from "@/types";

export const skills: readonly SkillGroup[] = [
  {
    label: "IA e LLMs",
    items: ["Agentes", "MCP", "RAG", "LangChain", "LangGraph", "Ollama", "function calling", "engenharia de prompt"],
  },
  {
    label: "Visão, ML e NLP",
    items: ["PyTorch", "Hugging Face Transformers", "BERT", "YOLO", "OpenCV", "OpenVINO", "scikit-learn", "séries temporais"],
  },
  {
    label: "Dados",
    items: ["SQL", "PostgreSQL", "Oracle", "SQL Server", "ETL/ELT", "streaming com Kafka", "PySpark", "modelagem de dados", "Pandas", "Polars"],
  },
  {
    label: "Software",
    items: ["Python", "TypeScript", "Go", "FastAPI", "React", "Streamlit", "APIs REST", "testes automatizados"],
  },
  {
    label: "Infra",
    items: ["Docker", "Docker Compose", "Linux", "Git", "CI/CD", "AWS"],
  },
  {
    label: "Desenvolvimento com IA",
    items: ["Claude Code", "Cursor", "GitHub Copilot"],
  },
];

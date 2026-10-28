import type { Certification } from "@/types";

// Thumbnails were rendered from the original PDFs, with the student ID (RA) blurred.

export const certifications: readonly Certification[] = [
  {
    issuer: "Anthropic",
    title: "Model Context Protocol: Advanced Topics",
    href: "https://verify.skilljar.com/c/sdctmyezz6cz",
    meta: "abr 2026",
    thumbnail: { src: "/assets/certificacoes/anthropic-mcp.webp", width: 640, height: 453, shape: "document" },
  },
  {
    issuer: "Amazon Web Services",
    title: "AWS MLOps Demonstrated",
    href: "https://www.credly.com/badges/dd132434-2c2c-40c1-aa9d-1128e2bb001f/linked_in_profile",
    meta: "microcredencial",
    thumbnail: { src: "/assets/certificacoes/aws-mlops.webp", width: 320, height: 320, shape: "badge" },
  },
  {
    issuer: "Google · Coursera",
    title: "Cybersecurity Professional Certificate",
    href: "https://www.coursera.org/account/accomplishments/professional-cert/785Q4G3GPIJC",
    meta: "ago 2025 · 9 cursos",
    thumbnail: { src: "/assets/certificacoes/google-cybersecurity.webp", width: 640, height: 495, shape: "document" },
  },
  {
    issuer: "Rocketseat",
    title: "Especialização em Machine Learning e IA",
    href: "https://app.rocketseat.com.br/certificates/a1b8a65b-a7cc-41df-81eb-c2d0b91a8d19",
    meta: "set 2025 · 100 h",
    thumbnail: { src: "/assets/certificacoes/rocketseat-ml.webp", width: 640, height: 453, shape: "document" },
  },
  {
    issuer: "Rocketseat",
    title: "Especialização em Python",
    href: "https://app.rocketseat.com.br/certificates/0d871a9d-8bf4-4ef4-8e06-0f71c1383cd2",
    meta: "set 2025 · 100 h",
    thumbnail: { src: "/assets/certificacoes/rocketseat-python.webp", width: 640, height: 453, shape: "document" },
  },
  {
    issuer: "DIO",
    title: "Inteligência Artificial aplicada a Dados",
    href: "https://www.dio.me/certificate/PO5JALPA/share",
  },
  {
    issuer: "Cisco Networking Academy",
    title: "Conceitos de Redes",
    href: "https://www.netacad.com/certificates/?issuanceId=d2055d44-6c67-4706-a855-5242c9f458ad",
  },
];

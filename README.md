# rafnaves.github.io

Portfólio de Rafael Naves, engenheiro de IA e dados: [rafnaves.github.io](https://rafnaves.github.io).

Uma página só, em React + TypeScript + Tailwind CSS + shadcn/ui, pré-renderizada no build para que o conteúdo e as metatags já estejam no HTML.

## Rodar localmente

```bash
npm install
npm run dev       # servidor de desenvolvimento
npm run build     # type-check, build do cliente e pré-renderização em dist/
npm run preview   # serve o dist/ gerado
npm run lint
```

## Estrutura

```
src/
  data/          conteúdo tipado (projetos, trajetória, certificações, mídias...)
  components/    componentes que só renderizam o que recebem por props
  components/ui/ componentes do shadcn/ui usados (button, badge, dialog)
  hooks/         tema, seção ativa, visibilidade e media queries
  types.ts       tipos do conteúdo
  entry-server.tsx + scripts/prerender.js   pré-renderização do index.html
public/assets/   vídeo e clipes dos projetos, miniaturas de certificados
legacy/          o site estático anterior, guardado como referência
```

Para mudar um texto, edite o arquivo em `src/data/`; nenhum componente tem conteúdo fixo.

## Deploy

Cada push na `main` roda `.github/workflows/deploy.yml`: instala, roda o lint, faz o build e publica `dist/` no GitHub Pages. Em **Settings → Pages**, a fonte precisa estar em **GitHub Actions**.

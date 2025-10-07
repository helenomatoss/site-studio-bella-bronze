# Studio Bela Bronze

Site institucional desenvolvido em React, Vite, TypeScript e Tailwind CSS para apresentar os serviços do Studio Bela Bronze.

## Requisitos

- Node.js 18 ou superior
- npm 9 ou superior

## Instalação

```bash
npm install
```

## Scripts

- `npm run dev` – inicia o ambiente de desenvolvimento com Vite.
- `npm run build` – gera os arquivos otimizados para produção.
- `npm run preview` – executa o preview local do build.
- `npm run lint` – executa o ESLint nos arquivos do projeto.

## Estrutura

- `src/` – código-fonte da aplicação.
  - `assets/` – imagens utilizadas nas seções.
  - `components/` – componentes reutilizáveis (incluindo UI base).
  - `config/` – configurações compartilhadas (ex.: `siteConfig`).
  - `pages/` – páginas do roteamento (`Index` e `NotFound`).
  - `lib/` – utilitários e helpers.
- `public/` – arquivos estáticos servidos pelo Vite (favicon, robots.txt).

## Convenções

- Utilize o alias `@/` para importar módulos a partir de `src/`.
- Textos exibidos no site devem permanecer exatamente iguais aos aprovados pelo cliente.
- Imagens não críticas utilizam `loading="lazy"` para preservar desempenho.

## Variáveis de Ambiente

Caso sejam necessárias variáveis públicas, declare-as no formato `VITE_*` e inclua-as em `.env` (veja `.env.example`).

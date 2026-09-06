# Suraj Yadav — Portfolio

A production-grade personal portfolio built with React, TypeScript, and Tailwind CSS.

## Features

- Light / dark mode with system-preference detection, persisted in `localStorage`, no flash on load
- Categorized tech stack (Frontend, Backend, Cloud & DevOps, AI & Automation)
- Projects section with sample/placeholder data ready to swap for real projects
- Contact section (mailto-based form, no backend required)
- SEO: meta tags, Open Graph/Twitter cards, JSON-LD structured data, `robots.txt`, `sitemap.xml`
- Scroll-triggered animations via Framer Motion
- ESLint (flat config) + Prettier (with `prettier-plugin-tailwindcss`) enforced

## Tech Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
- Framer Motion
- react-helmet-async

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Script                 | Description                         |
| ---------------------- | ----------------------------------- |
| `npm run dev`          | Start the dev server                |
| `npm run build`        | Type-check and build for production |
| `npm run preview`      | Preview the production build        |
| `npm run lint`         | Run ESLint                          |
| `npm run lint:fix`     | Run ESLint with auto-fix            |
| `npm run format`       | Format all files with Prettier      |
| `npm run format:check` | Check formatting without writing    |

## License

MIT

# Portfolio

Personal portfolio website showcasing my projects, skills, and experience — built with Next.js and a fully typed, static content architecture.

---

## Overview

This is my personal portfolio, designed to be fast, accessible, and easy to maintain. 

## Features

- ⚡ Built on the Next.js App Router with server components
- 🎨 Styled with Tailwind CSS and shadcn/ui for a consistent, accessible design system
- 🌗 Light/dark theme support
- 📱 Fully responsive layout
- 🧩 Dynamic project pages via `[slug]` routing
- 🗂️ Content-as-code — projects, skills, and experience managed in `src/data/`
- 🔍 SEO-friendly metadata and Open Graph image support
- ✉️ Contact form section (email service optional, see below)

## Tech Stack

| Category      | Tools                                  |
|---------------|-----------------------------------------|
| Framework     | [Next.js](https://nextjs.org) (App Router) |
| Language      | [TypeScript](https://www.typescriptlang.org) |
| Styling       | [Tailwind CSS](https://tailwindcss.com) |
| Components    | [shadcn/ui](https://ui.shadcn.com)      |
| Deployment    | [Vercel](https://vercel.com)            |

## Project Structure

```
src/
├── app/            # Routes: home, about, projects, contact
├── components/
│   ├── layout/     # Navbar, Footer, ThemeToggle
│   ├── sections/   # Hero, About, Skills, Projects, Experience, Contact
│   └── ui/         # shadcn/ui components
├── data/           # Site content: projects, skills, experience, socials
├── lib/            # Shared utilities (cn, formatters, etc.)
└── types/          # Shared TypeScript interfaces
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
npm run start
```

## Environment Variables

Only required if the contact form is wired up to an email service (e.g. Resend, EmailJS).

```bash
# .env.local
EMAIL_SERVICE_API_KEY=your_key_here
```

## Updating Content

All portfolio content is managed in `src/data/`:

| File               | Purpose                          |
|--------------------|-----------------------------------|
| `projects.ts`      | Project entries shown in the grid and detail pages |
| `skills.ts`         | Skills/tech list                 |
| `experience.ts`     | Work experience timeline         |
| `socials.ts`        | Social media links               |

Edit the relevant file and the site will reflect the change on next build — no other code changes needed.

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

```bash
vercel deploy
```

Any platform that supports Next.js (Netlify, AWS, self-hosted Node) will also work.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

**Nethma Kannangara** — [nethmakannangara007@gmail.com](mailto:nethmakannangara007@gmail.com) — [LinkedIn](https://www.linkedin.com/in/nethma-chathuranga/) — [GitHub](https://github.com/nethmakannangara)

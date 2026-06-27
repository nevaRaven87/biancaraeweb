# Made By Bianca Rae

A modern, SEO-optimized Next.js website for [Made By Bianca Rae](https://bybiancarae.com) — handmade ceramics from the mountains of Tennessee.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy to GitHub Pages (free)

1. Create a GitHub repo named **`biancaraeweb`** (must match `github-pages.config.ts`).
2. Push this project to the `main` branch.
3. In the repo go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
4. Push to `main` (or run the **Deploy to GitHub Pages** workflow manually).

Your site will be live at:

**`https://YOUR_GITHUB_USERNAME.github.io/biancaraeweb/`**

The workflow sets the site URL automatically. To test a GitHub Pages build locally (PowerShell):

```powershell
$env:GITHUB_PAGES = "true"
$env:NEXT_PUBLIC_SITE_URL = "https://YOUR_GITHUB_USERNAME.github.io/biancaraeweb"
npm run build
npx serve out
```

If you rename the repo, update `GITHUB_REPO` in `github-pages.config.ts`.

## Pages

- **Home** — Hero, shop links, announcements, about teaser
- **About** — Bianca's story, credentials, team
- **Stockists** — Retail partners by state + market schedule
- **Wholesale** — Product catalog with category filters
- **Blog** — Studio updates and reflections
- **Contact** — Email, social links, newsletter signup

## SEO Features

- Per-page metadata (title, description, Open Graph, Twitter cards)
- `sitemap.xml` and `robots.txt` auto-generated
- JSON-LD structured data (LocalBusiness + BlogPosting)
- Semantic HTML, skip-to-content link, accessible navigation

## Tech Stack

- Next.js 16 (App Router, static export)
- React 19
- TypeScript
- Tailwind CSS 4
- Google Fonts (Fredoka + DM Sans)

## Node.js

Requires Node.js **20.9+** (see `.nvmrc`).

## Production build

```bash
npm run build
```

Static files are output to the `out/` folder. GitHub Actions deploys that folder automatically.

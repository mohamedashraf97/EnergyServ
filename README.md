# Energy Serv — Corporate Portfolio Website

Premium industrial corporate portfolio website for **Energy Serv**, Riyadh, Kingdom of Saudi Arabia.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- **Lucide React**

## Features

- 6 pages: Home, About, Services, Products, Projects, Contact
- Responsive design with sticky navigation and mobile menu
- Scroll animations, animated counters, and interactive filters
- SEO metadata and Open Graph tags
- Frontend-only contact form (no backend)
- Industrial imagery via Unsplash

## Prerequisites

- Node.js 18.17 or later
- npm 9+

## Product catalog (WooCommerce import)

Products are imported from [A ONE Resources](https://aoneresources.com/products/) via the public WooCommerce **Store API** (no API keys required):

```
GET https://aoneresources.com/wp-json/wc/store/v1/products
```

Data is saved to `src/data/products.json`. Refresh anytime:

```bash
npm run fetch:products
```

If the API is blocked, use the Playwright fallback:

```bash
npm install -D playwright
npx playwright install chromium
node scripts/scrape-products.mjs
```

## Installation

```bash
cd d:\EnergyServ
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push the project to GitHub, GitLab, or Bitbucket.
2. Sign in at [vercel.com](https://vercel.com) and click **Add New Project**.
3. Import your repository.
4. Vercel auto-detects Next.js — keep default settings:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next` (default)
5. Click **Deploy**.

### Deploy via Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

Follow the prompts. For production:

```bash
vercel --prod
```

## Project Structure

```
src/
├── app/              # Pages and layouts
├── components/
│   ├── contact/      # Contact form
│   ├── home/         # Homepage sections
│   ├── icons/        # Dynamic icon helper
│   ├── layout/       # Header, footer, logo
│   ├── motion/       # Framer Motion wrappers
│   ├── products/     # Product catalog filter
│   ├── projects/     # Projects gallery filter
│   ├── sections/     # Shared sections
│   ├── services/     # Services grid
│   └── ui/           # Button, section heading
└── lib/
    ├── site.ts       # Content and configuration
    └── utils.ts      # Tailwind class merge helper
```

## Company Information

| Field | Value |
|-------|-------|
| Company | Energy Serv |
| Location | Riyadh, Kingdom of Saudi Arabia |
| Phone | +966 50 257 4196 |
| CR | 7054254151 |

## License

Private — All rights reserved.

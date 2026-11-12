# stateofmind.es

Website for State Of Mind — Barcelona-based DJ duo. Built with Next.js (App Router) + Tailwind CSS v4, exported as a static site and hosted on Cloudflare Pages (see Hosting).

The homepage mirrors the 2026 press kit: About · The Sound · Formats · Where we've played · Live · Why book us · Listen · Support · Bookings. All copy lives in `lib/constants.ts`; photos and the wordmark are in `public/images`.

## Develop

```bash
npm install
npm run dev
```

`npm run dev` shows the site; the Support button needs the Cloudflare function below, so try payments on a preview deployment instead.

## Hosting

Cloudflare Pages, free plan, since November 2026 (before that, Vercel). The Pages project `stateofmind-web` is connected to this repo: every push to `main` builds it (`npm run build`, output `out/`) and publishes it to stateofmind.es; other branches get a preview at `<branch>.stateofmind-web.pages.dev`.

- `next.config.ts` sets `output: 'export'`: plain HTML, no Next.js server. Images in `public/images` go out as they are.
- `/presskit` → the press-kit PDF is in `public/_redirects`.
- www.stateofmind.es → stateofmind.es is a Redirect Rule on the Cloudflare zone (the domain is registered at Hostinger, DNS on Cloudflare).

## Stripe (Support section)

`functions/api/checkout.ts` is a Cloudflare Pages Function: `POST /api/checkout` with `{ amount }` creates a Stripe Checkout Session (card, EUR, the chosen amount) through Stripe's REST API and returns its URL. It reads `STRIPE_SECRET_KEY`, a secret on the Pages project (Settings › Variables and secrets), never in the repo. Payments show in the Stripe dashboard; there's no webhook (the old one only logged them).

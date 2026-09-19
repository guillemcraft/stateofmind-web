# stateofmind.es

Website for State Of Mind — Barcelona-based DJ duo. Built with Next.js (App Router) + Tailwind CSS v4, deployed on Vercel.

The homepage mirrors the 2026 press kit: About · The Sound · Formats · Where we've played · Live · Why book us · Listen · Support · Bookings. All copy lives in `lib/constants.ts`; photos and the wordmark are in `public/images`.

## Develop

```bash
npm install
npm run dev
```

## Stripe (Support section)

`app/api/checkout` creates a Checkout Session and `app/api/webhooks/stripe` verifies payments. Requires `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET` in the environment.

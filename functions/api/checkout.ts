// Cloudflare Pages Function: POST /api/checkout starts a Stripe Checkout
// payment for the amount picked in the Support section (it was
// app/api/checkout/route.ts on Vercel). It calls Stripe's REST API directly,
// so the site needs no Stripe package. STRIPE_SECRET_KEY is a secret on the
// Pages project (Settings › Variables and secrets), never in the repo.

interface Env {
  STRIPE_SECRET_KEY?: string;
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

export const onRequestPost = async ({ request, env }: { request: Request; env: Env }) => {
  let amount: unknown;
  try {
    ({ amount } = (await request.json()) as { amount?: unknown });
  } catch {
    amount = undefined;
  }
  if (!amount || typeof amount !== "number" || !Number.isFinite(amount) || amount < 1) {
    return json({ error: "Amount must be at least 1€" }, 400);
  }
  if (!env.STRIPE_SECRET_KEY) {
    console.error("Stripe checkout error: STRIPE_SECRET_KEY is not set");
    return json({ error: "Failed to create checkout session: payments aren't set up" }, 500);
  }

  const origin = request.headers.get("origin") || new URL(request.url).origin;
  const form = new URLSearchParams({
    "payment_method_types[0]": "card",
    mode: "payment",
    "line_items[0][price_data][currency]": "eur",
    "line_items[0][price_data][product_data][name]": "Support State Of Mind",
    "line_items[0][price_data][product_data][description]": "Thank you for supporting independent music!",
    "line_items[0][price_data][unit_amount]": String(Math.round(amount * 100)),
    "line_items[0][quantity]": "1",
    success_url: `${origin}/support/success`,
    cancel_url: `${origin}/#support`,
  });

  const res = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.STRIPE_SECRET_KEY}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: form,
  });
  const session = (await res.json()) as { url?: string; error?: { message?: string } };
  if (!res.ok || !session.url) {
    const message = session.error?.message ?? `Stripe answered ${res.status}`;
    console.error("Stripe checkout error:", message);
    return json({ error: `Failed to create checkout session: ${message}` }, 500);
  }
  return json({ url: session.url });
};

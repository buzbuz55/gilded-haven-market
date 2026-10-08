import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { type StripeEnv, createStripeClient } from "../_shared/stripe.ts";

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);
  try {
    const { priceId, returnUrl, environment, customerEmail } = await req.json();
    if (typeof priceId !== "string" || !/^[a-zA-Z0-9_-]+$/.test(priceId)) return json({ error: "Invalid priceId" }, 400);
    if (environment !== "sandbox" && environment !== "live") return json({ error: "Invalid environment" }, 400);
    if (typeof returnUrl !== "string" || !/^https?:\/\//.test(returnUrl)) return json({ error: "Invalid returnUrl" }, 400);
    const env: StripeEnv = environment;
    const stripe = createStripeClient(env);

    const prices = await stripe.prices.list({ lookup_keys: [priceId] });
    if (!prices.data.length) return json({ error: "Price not found" }, 404);
    const stripePrice = prices.data[0];
    const productId = typeof stripePrice.product === "string" ? stripePrice.product : stripePrice.product.id;
    const product = await stripe.products.retrieve(productId);

    const params: Record<string, unknown> = {
      line_items: [{ price: stripePrice.id, quantity: 1 }],
      mode: "payment",
      ui_mode: "embedded_page",
      return_url: returnUrl,
      automatic_tax: { enabled: true },
      shipping_address_collection: { allowed_countries: ["US", "CA", "GB", "AU", "FR", "DE", "IT", "ES", "NL", "CH", "AE"] },
      phone_number_collection: { enabled: true },
      payment_intent_data: { description: product.name },
      metadata: { priceId, managed_payments: "false" },
      ...(typeof customerEmail === "string" && customerEmail.includes("@") ? { customer_email: customerEmail } : {}),
    };
    let session;
    try {
      session = await stripe.checkout.sessions.create(params as any);
    } catch (err) {
      // Tax needs a business address on the payments account; until that's set, check out without tax.
      if (err instanceof Error && /automatic tax|head office address/i.test(err.message)) {
        console.warn("Automatic tax unavailable, continuing without it:", err.message);
        const { automatic_tax: _t, ...rest } = params;
        session = await stripe.checkout.sessions.create(rest as any);
      } else throw err;
    }
    return json({ clientSecret: session.client_secret });
  } catch (e) {
    console.error(e);
    return json({ error: e instanceof Error ? e.message : "Checkout failed" }, 500);
  }
});

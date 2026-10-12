import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { createStripeClient, type StripeEnv } from "../_shared/stripe.ts";

const cors = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type" };
const json = (b: unknown, s = 200) => new Response(JSON.stringify(b), { status: s, headers: { ...cors, "Content-Type": "application/json" } });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: cors });
  try {
    const token = req.headers.get("Authorization")?.replace("Bearer ", "");
    if (!token) return json({ error: "Sign in required" }, 401);
    const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_ANON_KEY")!);
    const { data: { user } } = await sb.auth.getUser(token);
    if (!user?.email) return json({ error: "Sign in required" }, 401);
    if (!user.email_confirmed_at) return json({ error: "Please confirm your email to see your orders" }, 403);
    const { environment } = await req.json().catch(() => ({}));
    const env: StripeEnv = environment === "live" ? "live" : "sandbox";
    const stripe = createStripeClient(env);
    const list = await stripe.checkout.sessions.list({ limit: 100, expand: ["data.line_items"] });
    const email = user.email.toLowerCase();
    const orders = list.data
      .filter((s) => s.payment_status === "paid" && (s.customer_details?.email ?? s.customer_email ?? "").toLowerCase() === email)
      .map((s) => ({ id: s.id, date: s.created, total: (s.amount_total ?? 0) / 100, items: (s.line_items?.data ?? []).map((l) => l.description) }));
    return json({ orders });
  } catch (e) {
    return json({ error: e instanceof Error ? e.message : "Failed" }, 500);
  }
});

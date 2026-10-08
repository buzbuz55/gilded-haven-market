import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { z } from "npm:zod@3";
import {
  createLovableAiGatewayRunIdFetch,
  getLovableAiGatewayRunId,
  getLovableAiGatewayResponseHeaders,
} from "../_shared/run-id.ts";

const Painting = z.object({
  id: z.string().max(20),
  title: z.string().max(200),
  description: z.string().max(500),
  materials: z.string().max(200),
  dimensions: z.string().max(100),
  styles: z.array(z.string().max(40)).max(10),
  colors: z.array(z.string().max(40)).max(10),
  rooms: z.array(z.string().max(40)).max(10),
});
const Body = z.object({
  preferences: z.string().trim().min(3).max(1000),
  paintings: z.array(Painting).min(1).max(50),
});

const schema = {
  type: "object",
  additionalProperties: false,
  required: ["summary", "recommendations"],
  properties: {
    summary: { type: "string" },
    recommendations: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["id", "reason"],
        properties: { id: { type: "string" }, reason: { type: "string" } },
      },
    },
  },
};

const json = (body: unknown, status = 200, extra?: Headers) => {
  const h = new Headers({ ...corsHeaders, "Content-Type": "application/json" });
  extra?.forEach((v, k) => h.set(k, v));
  return new Response(JSON.stringify(body), { status, headers: h });
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  try {
    const parsed = Body.safeParse(await req.json().catch(() => null));
    if (!parsed.success) return json({ error: "Please describe what you're looking for." }, 400);
    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) return json({ error: "AI is not configured." }, 500);
    const { preferences, paintings } = parsed.data;

    const gateway = createLovableAiGatewayRunIdFetch(getLovableAiGatewayRunId(req));
    const res = await gateway.fetch("https://ai.gateway.lovable.dev/v1/responses", {
      method: "POST",
      signal: req.signal,
      headers: { "Content-Type": "application/json", "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "fetch" },
      body: JSON.stringify({
        model: "openai/gpt-6-astra",
        stream: true,
        store: false,
        reasoning: { effort: "low", summary: "auto" },
        include: ["reasoning.encrypted_content"],
        text: { format: { type: "json_schema", name: "recommendations", strict: true, schema } },
        input: [
          {
            role: "system",
            content:
              "You are an art advisor for a luxury gallery. Recommend up to 4 paintings from the provided catalog that best match the shopper's described styles, colors and room setting, ordered best first. Only use ids from the catalog. Give each a warm, specific one or two sentence reason. Write a one sentence summary of their taste. If nothing fits well, return the closest matches and say so.",
          },
          { role: "user", content: `Shopper preferences: ${preferences}\n\nCatalog:\n${JSON.stringify(paintings)}` },
        ],
      }),
    });

    const aigHeaders = getLovableAiGatewayResponseHeaders(res.headers);
    if (!res.ok || !res.body) {
      const status = res.status;
      const msg =
        status === 429 ? "Too many requests right now. Please try again in a moment."
        : status === 402 ? "AI credits have run out. Please add credits to continue."
        : "The advisor is unavailable right now.";
      console.error("gateway error", status, await res.text().catch(() => ""));
      return json({ error: msg }, status, aigHeaders);
    }

    const reader = res.body.pipeThrough(new TextDecoderStream()).getReader();
    let buf = "", text = "", failed = "";
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buf += value;
      const lines = buf.split("\n");
      buf = lines.pop() ?? "";
      for (const line of lines) {
        if (!line.startsWith("data:")) continue;
        const data = line.slice(5).trim();
        if (!data || data === "[DONE]") continue;
        try {
          const ev = JSON.parse(data);
          if (ev.type === "response.output_text.delta") text += ev.delta ?? "";
          else if (ev.type === "response.failed" || ev.type === "error") failed = ev.error?.message ?? ev.response?.error?.message ?? "failed";
        } catch { /* partial */ }
      }
    }
    if (failed || !text) return json({ error: "The advisor couldn't produce a recommendation. Please try again." }, 502, aigHeaders);

    const out = JSON.parse(text);
    const ids = new Set(paintings.map((p) => p.id));
    out.recommendations = (out.recommendations ?? []).filter((r: { id: string }) => ids.has(r.id)).slice(0, 4);
    return json(out, 200, aigHeaders);
  } catch (e) {
    if (req.signal.aborted) return new Response(null, { status: 499, headers: corsHeaders });
    console.error(e);
    return json({ error: "Something went wrong." }, 500);
  }
});

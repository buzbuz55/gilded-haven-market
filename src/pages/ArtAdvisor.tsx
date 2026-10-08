import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Sparkles, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { paintingsProducts } from "@/data/products/paintings";
import { paintingDetails } from "@/data/products/paintingDetails";

interface Result {
  summary: string;
  recommendations: { id: string; reason: string }[];
}

const examples = [
  "Warm gold tones for a modern living room",
  "Moody, dramatic landscapes for my bedroom",
  "Spiritual calligraphy in green for an entryway",
];

const ArtAdvisor = () => {
  const navigate = useNavigate();
  const [prefs, setPrefs] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);

  const submit = async () => {
    if (prefs.trim().length < 3 || loading) return;
    setLoading(true);
    setError(null);
    setResult(null);
    const paintings = paintingsProducts.map((p) => {
      const d = paintingDetails[p.id];
      return {
        id: p.id, title: p.title, description: d.description, materials: d.materials,
        dimensions: d.dimensions, styles: d.styles, colors: d.colors, rooms: d.rooms,
      };
    });
    const { data, error } = await supabase.functions.invoke("recommend-paintings", {
      body: { preferences: prefs.trim().slice(0, 1000), paintings },
    });
    setLoading(false);
    if (error || data?.error) {
      let msg = data?.error;
      try { msg = msg ?? (await (error as any)?.context?.json())?.error; } catch { /* ignore */ }
      setError(msg ?? "The advisor is unavailable right now.");
      return;
    }
    setResult(data as Result);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 bg-background/90 backdrop-blur border-b border-border">
        <div className="max-w-md mx-auto px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} aria-label="Back" className="p-2 rounded-full hover:bg-muted">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="font-playfair text-xl font-semibold">Art Advisor</h1>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 py-6 space-y-6">
        <div>
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> AI-powered
          </p>
          <h2 className="font-playfair text-2xl font-bold mb-2">Find your painting</h2>
          <p className="text-muted-foreground text-sm">
            Describe the styles, colors, or room you have in mind and we'll match you with pieces from our collection.
          </p>
        </div>

        <div className="space-y-3">
          <Textarea
            value={prefs}
            onChange={(e) => setPrefs(e.target.value)}
            maxLength={1000}
            rows={4}
            placeholder="e.g. Something gold and serene above a cream sofa in a bright living room"
          />
          <div className="flex flex-wrap gap-2">
            {examples.map((ex) => (
              <button key={ex} onClick={() => setPrefs(ex)}
                className="text-xs px-3 py-1.5 rounded-full border border-border hover:bg-muted">
                {ex}
              </button>
            ))}
          </div>
          <Button className="w-full" onClick={submit} disabled={loading || prefs.trim().length < 3}>
            {loading ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Finding matches…</> : "Recommend paintings"}
          </Button>
        </div>

        {error && <p className="text-sm text-destructive">{error}</p>}

        {result && (
          <div className="space-y-4">
            <p className="font-playfair italic text-foreground">{result.summary}</p>
            {result.recommendations.map((r) => {
              const p = paintingsProducts.find((x) => x.id === r.id);
              if (!p) return null;
              return (
                <button key={r.id} onClick={() => navigate(`/product/${p.id}`)}
                  className="w-full text-left flex gap-3 p-3 rounded-xl border border-border hover:shadow-md transition">
                  <img src={p.image} alt={p.title} className="w-24 h-24 object-cover rounded-lg" loading="lazy" />
                  <div className="flex-1 min-w-0">
                    <p className="font-playfair font-semibold leading-tight">{p.title}</p>
                    <p className="text-sm font-medium mt-1">{p.price}</p>
                    <p className="text-xs text-muted-foreground mt-1">{r.reason}</p>
                  </div>
                </button>
              );
            })}
          </div>
        )}
        <div className="h-20" />
      </main>
    </div>
  );
};

export default ArtAdvisor;

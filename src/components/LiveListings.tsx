import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";

type Row = { id: string; title: string; category: string; brand: string | null; asking_price: number; image_path: string | null; url?: string };

const LiveListings = () => {
  const [rows, setRows] = useState<Row[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await supabase.from("listings").select("id,title,category,brand,asking_price,image_path").eq("status", "live").order("created_at", { ascending: false });
      const r = (data ?? []) as Row[];
      await Promise.all(r.map(async (x) => { if (x.image_path) x.url = (await supabase.storage.from("listing-photos").createSignedUrl(x.image_path, 3600)).data?.signedUrl; }));
      setRows(r);
    })();
  }, []);
  if (rows.length === 0) return null;
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="font-playfair text-3xl font-bold mb-1">Newly Consigned</h2>
      <p className="text-muted-foreground mb-6">Examined and priced by our experts.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {rows.map((r) => (
          <Card key={r.id} className="overflow-hidden">
            {r.url ? <img src={r.url} alt={r.title} className="w-full aspect-square object-cover" loading="lazy" /> : <div className="aspect-square bg-muted" />}
            <div className="p-3">
              <p className="text-xs text-muted-foreground">{r.brand || r.category}</p>
              <p className="font-medium truncate">{r.title}</p>
              <p className="font-semibold">{Number(r.asking_price).toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
export default LiveListings;

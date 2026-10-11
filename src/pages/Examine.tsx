import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

type Row = { id: string; title: string; category: string; brand: string | null; description: string; condition: string | null; asking_price: number; status: string; image_path: string | null; url?: string };
const usd = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

const Examine = () => {
  const { user, loading } = useAuth();
  const [admin, setAdmin] = useState<boolean | null>(null);
  const [rows, setRows] = useState<Row[]>([]);
  const [prices, setPrices] = useState<Record<string, string>>({});
  const [tab, setTab] = useState("pending_review");

  const checkRole = async () => {
    if (!user) return;
    const { data } = await supabase.from("user_roles").select("role").eq("user_id", user.id).eq("role", "admin");
    setAdmin((data ?? []).length > 0);
  };
  const load = async () => {
    const { data } = await supabase.from("listings").select("*").eq("status", tab).order("created_at", { ascending: false });
    const r = (data ?? []) as Row[];
    await Promise.all(r.map(async (x) => { if (x.image_path) x.url = (await supabase.storage.from("listing-photos").createSignedUrl(x.image_path, 3600)).data?.signedUrl; }));
    setRows(r);
  };
  useEffect(() => { checkRole(); }, [user]);
  useEffect(() => { if (admin) load(); }, [admin, tab]);

  if (loading) return null;
  if (!user) return <Navigate to="/login?next=/examine" replace />;

  const claim = async () => {
    const { data } = await supabase.rpc("claim_owner");
    if (data) { toast.success("You're now the owner."); checkRole(); } else toast.error("An owner already exists.");
  };
  const setStatus = async (r: Row, status: string) => {
    const p = Number((prices[r.id] ?? String(r.asking_price)).replace(/[^0-9.]/g, ""));
    if (!(p > 0)) return toast.error("Enter a valid price.");
    const { error } = await supabase.from("listings").update({ status, asking_price: p }).eq("id", r.id);
    if (error) return toast.error(error.message);
    toast.success(status === "live" ? "Approved — now for sale." : "Updated.");
    load();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="font-playfair text-3xl font-bold mb-2">Examination</h1>
        {admin === false ? (
          <Card className="p-6"><p className="mb-4">Only the shop owner can examine items. If this is your shop and no owner is set yet, claim it now.</p><Button onClick={claim}>I'm the owner</Button></Card>
        ) : (
          <>
            <div className="flex gap-2 mb-6">
              {[["pending_review", "Waiting"], ["live", "For sale"], ["rejected", "Declined"], ["sold", "Sold"]].map(([v, l]) => (
                <Button key={v} variant={tab === v ? "default" : "outline"} size="sm" onClick={() => setTab(v)}>{l}</Button>
              ))}
            </div>
            {rows.length === 0 && <p className="text-muted-foreground">Nothing here.</p>}
            <div className="space-y-4">
              {rows.map((r) => (
                <Card key={r.id} className="p-4 grid gap-4 sm:grid-cols-[140px_1fr]">
                  {r.url ? <img src={r.url} alt={r.title} className="w-full h-36 object-cover rounded" /> : <div className="h-36 rounded bg-muted" />}
                  <div>
                    <p className="font-semibold text-lg">{r.title}</p>
                    <p className="text-sm text-muted-foreground">{r.category}{r.brand ? ` · ${r.brand}` : ""}{r.condition ? ` · ${r.condition}` : ""}</p>
                    <p className="text-sm my-2 whitespace-pre-line">{r.description}</p>
                    <p className="text-sm">Seller asked {usd(Number(r.asking_price))}</p>
                    <div className="flex flex-wrap gap-2 mt-3 items-center">
                      <Input className="w-36" placeholder="Our price" value={prices[r.id] ?? String(r.asking_price)} onChange={(e) => setPrices({ ...prices, [r.id]: e.target.value })} />
                      {r.status !== "live" && <Button onClick={() => setStatus(r, "live")}>Approve & list</Button>}
                      {r.status === "live" && <Button variant="outline" onClick={() => setStatus(r, "sold")}>Mark sold</Button>}
                      {r.status === "pending_review" && <Button variant="outline" onClick={() => setStatus(r, "rejected")}>Decline</Button>}
                      {r.status === "live" && <Button variant="ghost" onClick={() => setStatus(r, "pending_review")}>Take down</Button>}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
};
export default Examine;

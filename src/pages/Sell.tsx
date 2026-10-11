import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import Header from "@/components/Header";
import MobileNavigation from "@/components/MobileNavigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

type Listing = { id: string; title: string; asking_price: number; status: string; image_path: string | null; url?: string };

const statusLabel: Record<string, string> = { pending_review: "Waiting for examination", live: "For sale", sold: "Sold" };
const usd = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

const Sell = () => {
  const { user, loading } = useAuth();
  const [f, setF] = useState({ title: "", category: "", brand: "", description: "", condition: "", price: "" });
  const [file, setFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  const [mine, setMine] = useState<Listing[]>([]);

  const load = async () => {
    if (!user) return;
    const { data } = await supabase.from("listings").select("id,title,asking_price,status,image_path").eq("seller_id", user.id).order("created_at", { ascending: false });
    const rows = (data ?? []) as Listing[];
    await Promise.all(rows.map(async (r) => {
      if (r.image_path) r.url = (await supabase.storage.from("listing-photos").createSignedUrl(r.image_path, 3600)).data?.signedUrl;
    }));
    setMine(rows);
  };
  useEffect(() => { load(); }, [user]);

  if (loading) return null;
  if (!user) return <Navigate to="/login?next=/sell" replace />;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const price = Number(f.price.replace(/[^0-9.]/g, ""));
    if (!f.category) return toast.error("Please choose a category.");
    if (!(price > 0)) return toast.error("Please enter a valid price.");
    if (file && file.size > 10 * 1024 * 1024) return toast.error("Photo must be under 10 MB.");
    setBusy(true);
    let image_path: string | null = null;
    if (file) {
      const ext = file.name.split(".").pop()?.toLowerCase().replace(/[^a-z0-9]/g, "") || "jpg";
      image_path = `${user.id}/${crypto.randomUUID()}.${ext}`;
      const { error } = await supabase.storage.from("listing-photos").upload(image_path, file);
      if (error) { setBusy(false); return toast.error("Photo upload failed: " + error.message); }
    }
    const { error } = await supabase.from("listings").insert({
      seller_id: user.id, title: f.title.trim(), category: f.category, brand: f.brand.trim() || null,
      description: f.description.trim(), condition: f.condition || null, asking_price: price, image_path,
    });
    setBusy(false);
    if (error) return toast.error(error.message);
    toast.success("Submitted! We'll contact you to examine your piece.");
    setF({ title: "", category: "", brand: "", description: "", condition: "", price: "" });
    setFile(null);
    load();
  };

  const price = Number(f.price.replace(/[^0-9.]/g, "")) || 0;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-10 pb-24 grid gap-8 lg:grid-cols-[1fr_360px]">
        <Card className="p-6">
          <h1 className="font-playfair text-3xl font-bold mb-1">Sell an Item</h1>
          <p className="text-muted-foreground mb-6">Tell us about your piece. Our experts examine it before it goes on sale. When it sells, you keep 90%.</p>
          <form onSubmit={submit} className="space-y-4">
            <div><Label htmlFor="t">Item name</Label><Input id="t" maxLength={200} value={f.title} onChange={(e) => setF({ ...f, title: e.target.value })} placeholder="e.g. 18K gold diamond ring" required /></div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div><Label>Category</Label>
                <Select value={f.category} onValueChange={(v) => setF({ ...f, category: v })}>
                  <SelectTrigger><SelectValue placeholder="Choose" /></SelectTrigger>
                  <SelectContent>{["Jewelry", "Diamonds", "Watches", "Art", "Other"].map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div><Label>Condition</Label>
                <Select value={f.condition} onValueChange={(v) => setF({ ...f, condition: v })}>
                  <SelectTrigger><SelectValue placeholder="Choose" /></SelectTrigger>
                  <SelectContent>{["Like new", "Excellent", "Good", "Needs repair"].map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                </Select>
              </div>
            </div>
            <div><Label htmlFor="b">Brand / maker (optional)</Label><Input id="b" maxLength={200} value={f.brand} onChange={(e) => setF({ ...f, brand: e.target.value })} /></div>
            <div><Label htmlFor="d">Description</Label><Textarea id="d" maxLength={4000} rows={5} value={f.description} onChange={(e) => setF({ ...f, description: e.target.value })} placeholder="Metal, stones, size, history, papers you have" required /></div>
            <div><Label htmlFor="p">Your asking price (USD)</Label><Input id="p" inputMode="decimal" value={f.price} onChange={(e) => setF({ ...f, price: e.target.value })} required />
              {price > 0 && <p className="text-sm text-muted-foreground mt-1">If it sells at this price you receive {usd(price * 0.9)} (after our 10% commission).</p>}
            </div>
            <div><Label htmlFor="ph">Photo</Label><Input id="ph" type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] ?? null)} /></div>
            <Button type="submit" className="w-full" size="lg" disabled={busy}>{busy ? "Submitting…" : "Submit for Examination"}</Button>
          </form>
        </Card>
        <aside>
          <h2 className="font-playfair text-2xl font-semibold mb-4">My Items</h2>
          {mine.length === 0 ? <p className="text-muted-foreground">No items yet.</p> : (
            <div className="space-y-3">
              {mine.map((l) => (
                <Card key={l.id} className="p-3 flex gap-3 items-center">
                  {l.url ? <img src={l.url} alt={l.title} className="w-16 h-16 object-cover rounded" /> : <div className="w-16 h-16 rounded bg-muted" />}
                  <div className="min-w-0">
                    <p className="font-medium truncate">{l.title}</p>
                    <p className="text-sm text-muted-foreground">{usd(Number(l.asking_price))} · {statusLabel[l.status] ?? l.status}</p>
                  </div>
                </Card>
              ))}
            </div>
          )}
          <Button variant="ghost" className="mt-6" onClick={() => supabase.auth.signOut()}>Sign out</Button>
        </aside>
      </main>
      <MobileNavigation />
    </div>
  );
};

export default Sell;

import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import Header from "@/components/Header";
import MobileNavigation from "@/components/MobileNavigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { getSaved } from "@/lib/saved";
import { paintingsProducts } from "@/data/products/paintings";

type Order = { id: string; date: number; total: number; items: string[] };
const CONTACT = "hello@luxe.com";

const Account = () => {
  const { user, loading } = useAuth();
  const [orders, setOrders] = useState<Order[] | null>(null);
  const [msg, setMsg] = useState("");
  const saved = paintingsProducts.filter((p) => getSaved().includes(p.id));

  useEffect(() => {
    if (!user) return;
    const environment = (import.meta.env.VITE_PAYMENTS_CLIENT_TOKEN ?? "").startsWith("pk_live_") ? "live" : "sandbox";
    supabase.functions.invoke("my-orders", { body: { environment } }).then(({ data }) => setOrders(data?.orders ?? []));
  }, [user]);

  if (loading) return null;
  if (!user) return <Navigate to="/login?next=/account" replace />;

  const contact = () => {
    const body = encodeURIComponent(`${msg}\n\nFrom: ${user.email}`);
    window.location.href = `mailto:${CONTACT}?subject=${encodeURIComponent("Consignment question")}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-10 pb-24 space-y-8">
        <h1 className="font-playfair text-3xl font-bold">My Account</h1>
        <Card className="p-6">
          <h2 className="font-playfair text-2xl font-semibold mb-4">Order history</h2>
          {orders === null ? <p className="text-muted-foreground">Loading…</p> : orders.length === 0 ? <p className="text-muted-foreground">No orders yet.</p> : (
            <ul className="divide-y divide-border">
              {orders.map((o) => (
                <li key={o.id} className="py-3 flex justify-between gap-4">
                  <span>{o.items.join(", ") || "Purchase"}<span className="block text-sm text-muted-foreground">{new Date(o.date * 1000).toLocaleDateString()}</span></span>
                  <span className="font-semibold">{o.total.toLocaleString("en-US", { style: "currency", currency: "USD" })}</span>
                </li>
              ))}
            </ul>
          )}
        </Card>
        <Card className="p-6">
          <h2 className="font-playfair text-2xl font-semibold mb-4">Saved paintings</h2>
          {saved.length === 0 ? <p className="text-muted-foreground">Tap the heart on any painting to save it here.</p> : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {saved.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="block">
                  <img src={p.image} alt={p.title} className="w-full aspect-square object-cover rounded" />
                  <p className="text-sm font-medium mt-2 truncate">{p.title}</p>
                </Link>
              ))}
            </div>
          )}
        </Card>
        <Card className="p-6">
          <h2 className="font-playfair text-2xl font-semibold mb-2">Ask us about a consignment</h2>
          <p className="text-muted-foreground mb-4">Questions about a piece you'd like us to sell? Write to us.</p>
          <Textarea rows={4} maxLength={2000} value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Tell us about your piece" />
          <div className="flex gap-3 mt-3"><Button onClick={contact} disabled={!msg.trim()}>Send message</Button><Button variant="outline" asChild><Link to="/sell">Submit an item</Link></Button></div>
        </Card>
        <Button variant="ghost" onClick={() => supabase.auth.signOut()}>Sign out</Button>
      </main>
      <MobileNavigation />
    </div>
  );
};
export default Account;

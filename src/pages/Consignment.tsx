import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Gem, Search, Tag, ShoppingBag, Banknote, Shield, Clock } from "lucide-react";
import Header from "@/components/Header";
import MobileNavigation from "@/components/MobileNavigation";
import { toast } from "sonner";

const COMMISSION = 0.1;
const CONTACT_EMAIL = "hello@luxe.com";

const steps = [
  { icon: Gem, title: "1. Bring Your Piece", description: "Visit us or book an appointment with your jewelry." },
  { icon: Search, title: "2. Expert Examination", description: "Our gemologists inspect, test and authenticate it." },
  { icon: Tag, title: "3. We Set the Price", description: "You receive a fair market price based on our appraisal." },
  { icon: ShoppingBag, title: "4. Listed for Sale", description: "We photograph and sell it to our collectors." },
  { icon: Banknote, title: "5. You Get Paid", description: "When it sells, we keep 10% and you receive 90%." },
];

const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

const Consignment = () => {
  const [salePrice, setSalePrice] = useState("10000");
  const [form, setForm] = useState({ itemType: "", brand: "", description: "", condition: "", name: "", email: "", phone: "" });
  const price = Math.max(0, Number(salePrice.replace(/[^0-9.]/g, "")) || 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nItem: ${form.itemType}\nBrand: ${form.brand}\nCondition: ${form.condition}\n\n${form.description}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Consignment appointment request")}&body=${encodeURIComponent(body)}`;
    toast.success("Thank you! We'll contact you within 24 hours to book your examination.");
  };

  const set = (k: keyof typeof form) => (v: string) => setForm({ ...form, [k]: v });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-10 pb-24">
        <section className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] text-primary mb-3">JEWELRY CONSIGNMENT</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Bring Us Your Jewelry. We Sell It. You Keep 90%.
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Our experts examine your piece, give you a price, and list it for sale. You pay nothing up front —
            we only take a 10% commission when it sells.
          </p>
          <Button size="lg" onClick={() => document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })}>
            Book a Free Examination
          </Button>
        </section>

        <section className="mb-16">
          <h2 className="font-playfair text-3xl font-bold text-center mb-10">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((s) => (
              <Card key={s.title} className="p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="font-playfair text-2xl">What Will I Earn?</CardTitle>
              <p className="text-muted-foreground">Enter a sale price to see your payout.</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="salePrice">Sale price (USD)</Label>
                <Input id="salePrice" inputMode="numeric" value={salePrice} onChange={(e) => setSalePrice(e.target.value)} />
              </div>
              <div className="space-y-3 text-lg">
                <div className="flex justify-between"><span>Sale price</span><span>{fmt(price)}</span></div>
                <div className="flex justify-between text-muted-foreground"><span>LUXE commission (10%)</span><span>− {fmt(price * COMMISSION)}</span></div>
                <div className="flex justify-between border-t border-border pt-3 font-bold text-xl">
                  <span>You receive</span><span className="text-primary">{fmt(price * (1 - COMMISSION))}</span>
                </div>
              </div>
              <div className="space-y-3 pt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-3"><Shield className="w-5 h-5 text-primary" />Fully insured while in our care</div>
                <div className="flex items-center gap-3"><Tag className="w-5 h-5 text-primary" />No fees unless your piece sells</div>
                <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-primary" />Paid shortly after the sale</div>
              </div>
            </CardContent>
          </Card>

          <Card id="book">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl">Book Your Examination</CardTitle>
              <p className="text-muted-foreground">Tell us about your piece and we'll set up a time.</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label>Item type</Label>
                    <Select value={form.itemType} onValueChange={set("itemType")}>
                      <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent>
                        {["Ring", "Necklace", "Bracelet", "Earrings", "Watch", "Brooch", "Other"].map((t) => (
                          <SelectItem key={t} value={t}>{t}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Condition</Label>
                    <Select value={form.condition} onValueChange={set("condition")}>
                      <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent>
                        {["Like new", "Excellent", "Good", "Needs repair"].map((t) => (
                          <SelectItem key={t} value={t}>{t}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="brand">Brand / maker</Label>
                  <Input id="brand" maxLength={200} value={form.brand} onChange={(e) => set("brand")(e.target.value)} placeholder="e.g. Cartier, Tiffany, unknown" required />
                </div>
                <div>
                  <Label htmlFor="desc">Description</Label>
                  <Textarea id="desc" maxLength={2000} value={form.description} onChange={(e) => set("description")(e.target.value)} placeholder="Metal, stones, size, papers or receipts you have" required />
                </div>
                <div>
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" maxLength={200} value={form.name} onChange={(e) => set("name")(e.target.value)} required />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" maxLength={255} value={form.email} onChange={(e) => set("email")(e.target.value)} required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" maxLength={50} value={form.phone} onChange={(e) => set("phone")(e.target.value)} required />
                  </div>
                </div>
                <Button type="submit" className="w-full" size="lg">Request Appointment</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>
      <MobileNavigation />
    </div>
  );
};

export default Consignment;

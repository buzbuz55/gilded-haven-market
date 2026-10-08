import { useState } from "react";
import { TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { toast } from "sonner";

type Mode = "invest" | "join" | null;

const InvestJoinSection = () => {
  const [mode, setMode] = useState<Mode>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) {
      toast.error("Please enter your name and a valid email.");
      return;
    }
    const subject = mode === "invest" ? "Investment inquiry" : "Joining the LUXE team";
    window.location.href = `mailto:hello@luxe.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    toast.success("Thank you! Your email app will open to send your message.");
    setMode(null);
    setForm({ name: "", email: "", message: "" });
  };

  const cards = [
    { key: "invest" as const, icon: TrendingUp, title: "Invest With Us", text: "Be part of the future of luxury commerce. Partner with LUXE as we grow a global marketplace for fine art and jewelry.", cta: "Become an Investor" },
    { key: "join" as const, icon: Users, title: "Join the Team", text: "Curators, designers, engineers and art lovers — help us connect extraordinary pieces with collectors worldwide.", cta: "Apply to Join" },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-3">Grow With LUXE</h2>
        <p className="text-center text-muted-foreground mb-10">Invest in our vision or build it alongside us.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map(({ key, icon: Icon, title, text, cta }) => (
            <div key={key} className="rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-lg transition-shadow">
              <Icon className="h-10 w-10 text-amber-500 mb-4" />
              <h3 className="font-playfair text-2xl font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground mb-6">{text}</p>
              <Button onClick={() => setMode(key)} className="w-full">{cta}</Button>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={mode !== null} onOpenChange={(o) => !o && setMode(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-playfair">{mode === "invest" ? "Invest With Us" : "Join the Team"}</DialogTitle>
            <DialogDescription>Tell us a little about yourself and we'll be in touch.</DialogDescription>
          </DialogHeader>
          <form onSubmit={submit} className="space-y-3">
            <Input placeholder="Full name" maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <Input type="email" placeholder="Email" maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <Textarea placeholder={mode === "invest" ? "Investment interest (optional)" : "Your role and experience"} maxLength={1000} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            <Button type="submit" className="w-full">Send</Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default InvestJoinSection;

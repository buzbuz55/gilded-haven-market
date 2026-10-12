import { useEffect, useState } from "react";
import Header from "@/components/Header";
import MobileNavigation from "@/components/MobileNavigation";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { submitInquiry } from "@/lib/inquiries";

const roles = ["Gemologist / Jewelry Appraiser", "Art Curator", "Watch Specialist", "Client Advisor", "Photographer", "Software Engineer", "Marketing & SEO", "Other"];

const Careers = () => {
  const [f, setF] = useState({ name: "", email: "", phone: "", role: roles[0], message: "" });
  const [file, setFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    document.title = "Careers at LUXE Marketplace — Join Our Luxury Jewelry & Art Team";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Work with LUXE Marketplace: open roles for gemologists, art curators, watch specialists, client advisors and engineers. Upload your resume today.");
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      await submitInquiry("career", f, { role: f.role }, file);
      toast.success("Thank you! Your application has been received.");
      setF({ name: "", email: "", phone: "", role: roles[0], message: "" }); setFile(null);
      (document.getElementById("resume") as HTMLInputElement).value = "";
    } catch (err) { toast.error((err as Error).message); }
    setBusy(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-10 pb-24">
        <h1 className="font-playfair text-4xl font-bold mb-4">Careers at LUXE Marketplace</h1>
        <p className="text-lg text-muted-foreground mb-8">We connect extraordinary jewelry, watches and fine art with collectors. If you love beautiful things and the stories behind them, we'd like to meet you.</p>
        <h2 className="font-playfair text-2xl font-semibold mb-3">Roles we hire for</h2>
        <ul className="grid sm:grid-cols-2 gap-2 mb-10 list-disc pl-5 text-muted-foreground">{roles.slice(0, -1).map((r) => <li key={r}>{r}</li>)}</ul>
        <Card className="p-6">
          <h2 className="font-playfair text-2xl font-semibold mb-4">Apply — upload your resume</h2>
          <form onSubmit={submit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div><Label htmlFor="n">Full name</Label><Input id="n" required maxLength={200} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} /></div>
              <div><Label htmlFor="e">Email</Label><Input id="e" type="email" required maxLength={255} value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} /></div>
              <div><Label htmlFor="p">Phone</Label><Input id="p" maxLength={50} value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} /></div>
              <div><Label htmlFor="r">Role</Label>
                <select id="r" className="w-full h-10 rounded-md border border-input bg-background px-3" value={f.role} onChange={(e) => setF({ ...f, role: e.target.value })}>{roles.map((r) => <option key={r}>{r}</option>)}</select></div>
            </div>
            <div><Label htmlFor="m">Tell us about yourself</Label><Textarea id="m" rows={4} maxLength={5000} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} /></div>
            <div><Label htmlFor="resume">Resume (PDF or Word, up to 10 MB)</Label><Input id="resume" type="file" required accept=".pdf,.doc,.docx" onChange={(e) => setFile(e.target.files?.[0] ?? null)} /></div>
            <Button type="submit" className="w-full" size="lg" disabled={busy}>{busy ? "Sending…" : "Submit application"}</Button>
          </form>
        </Card>
      </main>
      <MobileNavigation />
    </div>
  );
};
export default Careers;

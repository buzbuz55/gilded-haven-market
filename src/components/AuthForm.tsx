import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import { toast } from "sonner";

const safeNext = (n: string | null) => (n && n.startsWith("/") && !n.startsWith("//") ? n : "/sell");

const AuthForm = ({ mode }: { mode: "login" | "signup" }) => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const next = safeNext(params.get("next"));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({
        email, password,
        options: { emailRedirectTo: window.location.origin + next, data: { display_name: name.trim().slice(0, 100) } },
      });
      setBusy(false);
      if (error) return toast.error(error.message);
      setSent(true);
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      setBusy(false);
      if (error) return toast.error(error.message);
      navigate(next);
    }
  };

  const google = async () => {
    sessionStorage.setItem("luxe-next", next);
    const r = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin });
    if (r.error) return toast.error("Google sign-in failed. Please try again.");
    if (r.redirected) return;
    navigate(next);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-md mx-auto px-4 py-12">
        <Card className="p-8">
          <h1 className="font-playfair text-3xl font-bold mb-2">{mode === "signup" ? "Create your seller account" : "Welcome back"}</h1>
          <p className="text-muted-foreground mb-6">{mode === "signup" ? "List your pieces and track their sale." : "Sign in to list and manage your items."}</p>
          {sent ? (
            <p className="text-lg">Check your email and click the link to confirm your account. Then you can start selling.</p>
          ) : (
            <>
              <Button type="button" variant="outline" className="w-full mb-4" onClick={google}>Continue with Google</Button>
              <div className="text-center text-sm text-muted-foreground mb-4">or</div>
              <form onSubmit={submit} className="space-y-4">
                {mode === "signup" && (
                  <div><Label htmlFor="name">Your name</Label><Input id="name" maxLength={100} value={name} onChange={(e) => setName(e.target.value)} required /></div>
                )}
                <div><Label htmlFor="email">Email</Label><Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></div>
                <div><Label htmlFor="pw">Password</Label><Input id="pw" type="password" minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} required /></div>
                <Button type="submit" className="w-full" disabled={busy}>{busy ? "Please wait…" : mode === "signup" ? "Create account" : "Sign in"}</Button>
              </form>
              <p className="text-sm text-center mt-6">
                {mode === "signup" ? <>Already have an account? <Link className="text-primary" to={`/login?next=${encodeURIComponent(next)}`}>Sign in</Link></>
                  : <>New here? <Link className="text-primary" to={`/signup?next=${encodeURIComponent(next)}`}>Create an account</Link></>}
              </p>
            </>
          )}
        </Card>
      </main>
    </div>
  );
};

export default AuthForm;

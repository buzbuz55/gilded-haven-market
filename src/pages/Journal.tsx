import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import MobileNavigation from "@/components/MobileNavigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { journalPosts, journalCategories, JournalCategory } from "@/data/journal";

const Journal = () => {
  const [cat, setCat] = useState<JournalCategory | "All">("All");
  useEffect(() => {
    document.title = "The LUXE Journal — Stories of Jewelry, Diamonds, Watches & Art";
  }, []);
  const posts = cat === "All" ? journalPosts : journalPosts.filter((p) => p.category === cat);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-10 pb-24">
        <header className="text-center mb-10">
          <p className="text-sm tracking-[0.3em] text-primary mb-3">THE LUXE JOURNAL</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">Every Piece Has a Story</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The history behind famous jewelry, diamonds, watches and artwork — and how to buy, care for and sell them.
          </p>
        </header>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {(["All", ...journalCategories] as const).map((c) => (
            <Button key={c} variant={cat === c ? "default" : "outline"} size="sm" onClick={() => setCat(c)}>{c}</Button>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link key={p.slug} to={`/journal/${p.slug}`}>
              <Card className="h-full p-6 hover:shadow-lg transition-shadow">
                <p className="text-xs tracking-widest text-primary mb-2">{p.category.toUpperCase()} · {p.readMinutes} MIN READ</p>
                <h2 className="font-playfair text-xl font-semibold mb-2">{p.title}</h2>
                <p className="text-sm text-muted-foreground">{p.excerpt}</p>
              </Card>
            </Link>
          ))}
        </div>
      </main>
      <MobileNavigation />
    </div>
  );
};

export default Journal;

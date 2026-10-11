import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { journalPosts } from "@/data/journal";

const picks = ["Diamonds", "Jewelry", "Watches", "Art"].map((c) => journalPosts.find((p) => p.category === c)!);

const JournalSection = () => (
  <section className="py-16 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <p className="text-sm tracking-[0.3em] text-primary mb-3">THE LUXE JOURNAL</p>
        <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-3">Every Piece Has a Story</h2>
        <p className="text-muted-foreground">History and stories behind jewelry, diamonds, watches and art.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {picks.map((p) => (
          <Link key={p.slug} to={`/journal/${p.slug}`}>
            <Card className="h-full p-5 hover:shadow-lg transition-shadow">
              <p className="text-xs tracking-widest text-primary mb-2">{p.category.toUpperCase()}</p>
              <h3 className="font-playfair text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.excerpt}</p>
            </Card>
          </Link>
        ))}
      </div>
      <div className="text-center"><Link to="/journal"><Button size="lg">Read All {journalPosts.length} Stories</Button></Link></div>
    </div>
  </section>
);

export default JournalSection;

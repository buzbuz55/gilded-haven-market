import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import MobileNavigation from "@/components/MobileNavigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { journalPosts } from "@/data/journal";

const JournalPost = () => {
  const { slug } = useParams();
  const post = journalPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (!post) return;
    document.title = `${post.title} | LUXE Journal`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", post.excerpt);
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.text = JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: post.title, description: post.excerpt, articleSection: post.category });
    document.head.appendChild(s);
    window.scrollTo(0, 0);
    return () => s.remove();
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background"><Header />
        <main className="p-10 text-center"><p className="mb-4">Story not found.</p><Link to="/journal"><Button>Back to Journal</Button></Link></main>
      </div>
    );
  }

  const related = journalPosts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10 pb-24">
        <Link to="/journal" className="text-sm text-primary">← The LUXE Journal</Link>
        <article className="mt-6">
          <p className="text-xs tracking-widest text-primary mb-3">{post.category.toUpperCase()} · {post.readMinutes} MIN READ</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          <p className="text-xl text-muted-foreground mb-8">{post.excerpt}</p>
          <div className="space-y-5 text-lg leading-relaxed">
            {post.body.map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </article>
        <Card className="mt-12 p-6 text-center">
          <h2 className="font-playfair text-2xl font-semibold mb-2">Have a piece with a story?</h2>
          <p className="text-muted-foreground mb-4">Bring it to us. We examine it, price it and sell it — you keep 90%.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/consignment"><Button>Consign With Us</Button></Link>
            <Link to="/categories"><Button variant="outline">Shop the Collection</Button></Link>
          </div>
        </Card>
        {related.length > 0 && (
          <section className="mt-12">
            <h2 className="font-playfair text-2xl font-semibold mb-4">More {post.category} Stories</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} to={`/journal/${r.slug}`}><Card className="p-4 h-full hover:shadow-md"><h3 className="font-semibold">{r.title}</h3></Card></Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <MobileNavigation />
    </div>
  );
};

export default JournalPost;

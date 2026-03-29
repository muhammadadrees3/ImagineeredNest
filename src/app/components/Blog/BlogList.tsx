"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS, type BlogPost } from "@/app/components/Blog/Blogdata";
// ─────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────
function fmtDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric",
  });
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.2"
      strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────
// BLOG CARD
// ─────────────────────────────────────────────────────────────────
interface BlogCardProps { post: BlogPost; hero?: boolean }

function BlogCard({ post, hero = false }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl transition-all duration-300 ${hero ? "md:flex-row" : ""}`}
      aria-label={`Read: ${post.title}`}
    >
      <div className={`relative bg-muted shrink-0 overflow-hidden ${hero ? "aspect-[16/10] md:w-[50%] md:aspect-auto md:min-h-[300px]" : "aspect-[16/10]"}`}>
        <Image
          src={post.image} alt={post.title} fill
          sizes={hero ? "(max-width:768px) 100vw, 55vw" : "(max-width:768px) 100vw, 30vw"}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          priority={hero}
        />
        <span className="absolute top-3 left-3 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-primary text-primary-foreground">{post.category}</span>
      </div>

      <div className="flex flex-col gap-3 p-6 flex-1">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <time dateTime={post.date}>{fmtDate(post.date)}</time>
          <span className="w-[3px] h-[3px] rounded-full bg-muted-foreground/50" aria-hidden="true" />
          <span>{post.readTime} min read</span>
        </div>

        <h2 className={`font-bold text-foreground leading-snug group-hover:text-primary transition-colors ${hero ? "text-2xl md:text-3xl" : "text-lg md:text-xl"}`}>{post.title}</h2>
        <p className={`text-sm text-muted-foreground leading-relaxed ${hero ? "line-clamp-4" : "line-clamp-3"}`}>{post.excerpt}</p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground text-xs font-bold shrink-0" aria-hidden="true">{post.author[0]}</span>
            <div>
              <span className="block text-sm font-semibold leading-tight text-foreground">{post.author}</span>
              <span className="block text-xs text-muted-foreground">{post.authorRole}</span>
            </div>
          </div>
          <span className="text-xl text-primary transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true"><ArrowRight className="w-4 h-4" /></span>
        </div>
      </div>
    </Link>
  );
}

// ─────────────────────────────────────────────────────────────────
// PAGE COMPONENT  (default export)
// ─────────────────────────────────────────────────────────────────
export default function BlogList() {
  const [query,     setQuery]     = useState("");
  const [activeTag, setActiveTag] = useState("All");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(BLOG_POSTS.map((p) => p.category)));
    return ["All", ...cats];
  }, []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return BLOG_POSTS.filter((p) => {
      const matchQ = !q || p.title.toLowerCase().includes(q) ||
                          p.excerpt.toLowerCase().includes(q);
      const matchT = activeTag === "All" || p.category === activeTag;
      return matchQ && matchT;
    });
  }, [query, activeTag]);

  const [hero, ...rest] = filtered;

  return (
    <main className="min-h-screen bg-background text-foreground font-sans pb-24">
      {/* ── Masthead ── */}
      <header className="relative text-center py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_65%_at_50%_-5%,rgba(var(--primary-rgb),0.15)_0%,transparent_68%)] pointer-events-none" />
        <span className="relative inline-flex items-center gap-1.5 text-xs tracking-widest uppercase font-semibold text-primary bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-6">
          ✦ Insights &amp; Guides
        </span>
        <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-foreground">
          The Dev Journal
        </h1>
        <p className="relative text-base md:text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
          Practical tutorials, patterns, and career advice for modern web developers.
        </p>
      </header>

      {/* ── Search ── */}
      <section className="relative max-w-2xl mx-auto px-6" aria-label="Search articles">
        <div className="relative">
          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" aria-hidden="true" style={{ display: 'flex' }}>
            <SearchIcon />
          </span>
          <input
            type="search"
            className="w-full py-4 pl-12 pr-5 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground focus:border-primary/50 focus:ring-4 focus:ring-primary/10 outline-none transition-all"
            placeholder="Search articles…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search blog posts"
          />
        </div>
      </section>

      {/* ── Category filters ── */}
      <nav className="relative flex flex-wrap gap-2 justify-center py-10 px-6 max-w-4xl mx-auto" aria-label="Filter by category">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-5 py-2 rounded-full border text-sm font-medium transition-all ${
              activeTag === cat
                ? "bg-primary border-primary text-primary-foreground shadow-sm"
                : "border-border bg-transparent text-muted-foreground hover:border-primary/40 hover:text-foreground hover:bg-primary/5"
            }`}
            onClick={() => setActiveTag(cat)}
            aria-pressed={activeTag === cat}
          >
            {cat}
          </button>
        ))}
      </nav>

      <div className="relative max-w-7xl mx-auto px-6">
        <hr className="border-t border-border mb-12" />

        {filtered.length === 0 ? (
          <div className="text-center py-20 px-6 text-muted-foreground" role="status">
            <div className="text-4xl opacity-40 mb-4">◌</div>
            <h3 className="text-2xl font-bold text-foreground mb-2">No articles found</h3>
            <p className="text-base">Try a different keyword or select another category.</p>
          </div>
        ) : (
          <>
            {(query || activeTag !== "All") && (
              <p className="text-center text-sm text-muted-foreground mb-10" role="status">
                <strong className="text-foreground">{filtered.length}</strong>{" "}
                article{filtered.length !== 1 ? "s" : ""} found
              </p>
            )}

            {/* Featured / hero card */}
            {hero && (
              <section className="mb-16" aria-label="Featured article">
                <p className="flex items-center gap-3 text-xs tracking-[0.22em] uppercase font-bold text-primary mb-6 after:content-[''] after:flex-1 after:h-px after:bg-border">Featured</p>
                <BlogCard post={hero} hero />
              </section>
            )}

            {/* Grid */}
            {rest.length > 0 && (
              <section aria-label="All articles">
                <p className="flex items-center gap-3 text-xs tracking-[0.22em] uppercase font-bold text-primary mb-6 after:content-[''] after:flex-1 after:h-px after:bg-border">Latest Articles</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {rest.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </div>
    </main>
  );
}
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS, BlogPost } from "@/app/components/Blog/Blogdata";
// ─────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────
function fmtDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long", day: "numeric", year: "numeric",
  });
}

// ─────────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────────
function ArrowLeft() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.2"
      strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}
function ShareIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.2"
      strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────
// SIDEBAR POST ITEM
// ─────────────────────────────────────────────────────────────────
interface SidebarPostProps {
  post: BlogPost;
  isActive: boolean;
  onClick: () => void;
}
function SidebarPost({ post, isActive, onClick }: SidebarPostProps) {
  return (
    <button
      onClick={onClick}
      className={`group flex items-start gap-3 w-full p-3 rounded-xl border-b border-border transition-colors text-left last:border-b-0 hover:bg-muted/50 ${isActive ? "bg-primary/10 border-transparent hover:bg-primary/10" : "bg-transparent"}`}
      aria-current={isActive ? "page" : undefined}
    >
      <div className="relative w-16 h-12 rounded-lg overflow-hidden bg-muted shrink-0">
        <Image src={post.image} alt={post.title} fill sizes="64px" className="object-cover" />
      </div>
      <div className="flex flex-col gap-1 min-w-0 flex-1">
        <span className="text-[9px] tracking-widest uppercase font-bold text-primary">{post.category}</span>
        <p className={`text-sm font-semibold leading-snug line-clamp-2 ${isActive ? "text-primary" : "text-foreground group-hover:text-primary transition-colors"}`}>{post.title}</p>
        <span className="text-xs text-muted-foreground">{post.readTime} min read</span>
      </div>
    </button>
  );
}

// ─────────────────────────────────────────────────────────────────
// BLOG DETAIL  (default export)
// ─────────────────────────────────────────────────────────────────
interface BlogDetailProps {
  /** Comes from params.slug in the Next.js page file */
  slug: string;
}

export default function BlogDetail({ slug }: BlogDetailProps) {
  const initial = BLOG_POSTS.find((p) => p.slug === slug) ?? BLOG_POSTS[0];
  const [current, setCurrent] = useState<BlogPost>(initial);

  const others = BLOG_POSTS.filter((p) => p.id !== current.id);

  function handleSelect(post: BlogPost) {
    setCurrent(post);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function handleShare() {
    if (typeof navigator === "undefined") return;
    if (navigator.share) {
      navigator.share({ title: current.title, url: window.location.href }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href).catch(() => {});
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* ── Sticky navigation bar ── */}
      <nav className="sticky top-0 z-20 bg-background/90 supports-[backdrop-filter]:bg-background/60 backdrop-blur-md border-b border-border" aria-label="Article navigation">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors shrink-0">
            <ArrowLeft /> All Articles
          </Link>
          <span className="text-sm text-muted-foreground/80 whitespace-nowrap overflow-hidden text-ellipsis flex-1 text-center hidden md:block">
            <strong className="text-foreground">{current.category}</strong> / {current.title}
          </span>
          <button className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-1.5 rounded-full border border-border bg-transparent text-muted-foreground hover:border-primary hover:text-primary transition-all shrink-0" onClick={handleShare} aria-label="Share article">
            <ShareIcon /> Share
          </button>
        </div>
      </nav>

      {/* ── Main layout ── */}
      <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 lg:gap-16 items-start">

        {/* ════════════ ARTICLE ════════════ */}
        <article className="min-w-0">
          <header>
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-primary text-primary-foreground">{current.category}</span>
              <time dateTime={current.date} className="text-sm text-muted-foreground">
                {fmtDate(current.date)}
              </time>
              <span className="text-muted-foreground/50 text-xs">·</span>
              <span className="text-sm text-muted-foreground">{current.readTime} min read</span>
            </div>

            {/* H1 — critical for SEO */}
            <h1 className="text-3xl md:text-5xl lg:text-[52px] font-bold tracking-tight text-foreground leading-tight mb-8">{current.title}</h1>

            {/* Author */}
            <div className="flex items-center gap-3 py-5 border-y border-border mb-10">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground text-sm font-bold shrink-0" aria-hidden="true">{current.author[0]}</div>
              <div>
                <span className="block text-sm font-semibold text-foreground">{current.author}</span>
                <span className="block text-xs text-muted-foreground mt-0.5">{current.authorRole}</span>
              </div>
            </div>
          </header>

          {/* Hero image */}
          <figure className="relative overflow-hidden rounded-2xl aspect-[16/8] bg-muted mb-12">
            <Image
              src={current.image}
              alt={current.title}
              fill
              sizes="(max-width:960px) 100vw, calc(100vw - 400px)"
              priority
              className="object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
          </figure>

          {/* Full body content */}
          <section
            className="text-base md:text-lg text-foreground/90 leading-relaxed font-sans prose prose-lg max-w-none prose-p:mb-6 prose-p:leading-relaxed prose-headings:font-bold prose-headings:text-foreground prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-[13px] prose-h3:tracking-widest prose-h3:uppercase prose-h3:text-muted-foreground prose-h3:mt-8 prose-h3:mb-3 prose-ul:list-disc prose-ol:list-decimal prose-ul:pl-6 prose-ol:pl-6 prose-li:mb-2 prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:my-8 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-lg prose-blockquote:italic prose-blockquote:text-muted-foreground prose-a:text-primary prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-primary/80 prose-code:bg-primary/10 prose-code:text-primary prose-code:px-1.5 prose-code:rounded-md prose-code:text-sm prose-pre:bg-muted/30 prose-pre:border prose-pre:border-border prose-pre:text-foreground/80 prose-pre:p-6 prose-pre:rounded-xl prose-pre:overflow-x-auto prose-pre:mb-6 [&>p]:mb-6 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-12 [&>h2]:mb-4 [&>h2]:text-foreground [&>ul]:pl-6 [&>ul]:list-disc [&>ul]:mb-6 [&>li]:mb-2 [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:bg-primary/5 [&>blockquote]:p-4 [&>blockquote]:my-8 [&>blockquote]:rounded-r-lg [&>blockquote]:italic [&>blockquote]:text-muted-foreground [&>pre]:bg-muted/30 [&>pre]:border [&>pre]:border-border [&>pre]:p-6 [&>pre]:rounded-xl [&>pre]:overflow-x-auto [&>pre]:mb-6 [&>code]:bg-primary/10 [&>code]:text-primary [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:rounded-md [&>code]:text-sm"
            dangerouslySetInnerHTML={{ __html: current.content }}
          />

          {/* Tags */}
          {current.tags && current.tags.length > 0 && (
            <footer className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border" aria-label="Article tags">
              {current.tags.map((tag) => (
                <span key={tag} className="text-[11px] tracking-widest uppercase px-4 py-1.5 rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-default">{tag}</span>
              ))}
            </footer>
          )}
        </article>

        {/* ════════════ SIDEBAR ════════════ */}
        <aside className="lg:sticky lg:top-24" aria-label="More articles">
          <h2 className="text-[10px] tracking-[0.22em] uppercase font-bold text-muted-foreground mb-5 pb-3 border-b-2 border-primary">More Articles</h2>
          <nav className="flex flex-col gap-1 md:grid md:grid-cols-2 lg:flex lg:flex-col lg:gap-1" aria-label="Related posts">
            {others.map((post) => (
              <SidebarPost
                key={post.id}
                post={post}
                isActive={post.id === current.id}
                onClick={() => handleSelect(post)}
              />
            ))}
          </nav>
        </aside>

      </div>
    </div>
  );
}
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// ─────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────
interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: number;
  tags: string[];
  content: string;
}

// ─────────────────────────────────────────────────────────────────
// MOCK DATA
// ─────────────────────────────────────────────────────────────────
const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "nextjs-seo-guide-2025",
    title: "The Complete Next.js SEO Guide for 2025",
    excerpt:
      "Structure your App Router project for maximum search visibility — metadata, Open Graph, sitemaps, and Core Web Vitals, all in one practical walkthrough.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&q=80",
    category: "SEO",
    author: "Alex Kim",
    authorRole: "Senior Engineer",
    date: "2025-06-10",
    readTime: 8,
    tags: ["Next.js", "SEO", "App Router", "Performance"],
    content: `
      <p>Search engine optimisation in 2025 is no longer just about keywords. It's about delivering fast, structured, semantically meaningful content that both humans and crawlers understand instantly.</p>
      <h2>Why Next.js Wins for SEO</h2>
      <p>The App Router renders HTML on the server by default. Crawlers receive a fully-formed document on the first request — no JavaScript execution required.</p>
      <h3>Key Platform Advantages</h3>
      <ul>
        <li>Built-in <code>generateMetadata</code> for dynamic titles and Open Graph tags</li>
        <li>Automatic <code>robots.txt</code> and <code>sitemap.xml</code> via the Metadata Files API</li>
        <li>Image optimisation with <code>next/image</code> (WebP, lazy-loading, blur placeholders)</li>
        <li>Font subsetting and preloading with <code>next/font</code></li>
      </ul>
      <h2>Setting Up generateMetadata</h2>
      <pre><code>export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { images: [{ url: post.image }] },
    alternates: { canonical: \`https://yourdomain.com/blog/\${params.slug}\` },
  };
}</code></pre>
      <h2>Core Web Vitals Checklist</h2>
      <p>Preload hero images with the <code>priority</code> prop. Prevent layout shift by using fixed aspect-ratio containers. Keep JavaScript lean.</p>
      <blockquote>A 100 ms improvement in load time can increase conversions by 8 %. Speed is a feature, not a polish task.</blockquote>
      <h2>Final SEO Checklist</h2>
      <ul>
        <li>Unique <code>&lt;title&gt;</code> and <code>&lt;meta description&gt;</code> per page</li>
        <li>Canonical URL on every page</li>
        <li>Sitemap submitted to Google Search Console</li>
        <li>JSON-LD structured data on all post pages</li>
      </ul>
    `,
  },
  {
    id: "2",
    slug: "react-performance-patterns-2025",
    title: "10 React Performance Patterns Every Developer Should Know",
    excerpt:
      "From memo and useMemo to virtualised lists — a production-focused reference for React apps that stay fast at scale.",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=900&q=80",
    category: "React",
    author: "Sara Patel",
    authorRole: "Frontend Architect",
    date: "2025-05-28",
    readTime: 6,
    tags: ["React", "Performance", "JavaScript", "Hooks"],
    content: `
      <p>Performance regressions arrive quietly. One extra re-render here, a missed memoisation there — and suddenly the app feels sluggish. These ten patterns form a practical toolkit for fast production React.</p>
      <h2>1. React.memo for Pure Components</h2>
      <p>Wrap components that receive stable props but re-render due to parent updates.</p>
      <h2>2. useMemo for Heavy Derivations</h2>
      <p>Memoize expensive calculations whose inputs rarely change. Profile first — <code>useMemo</code> itself has overhead.</p>
      <h2>3. useCallback for Stable References</h2>
      <pre><code>const handleSubmit = useCallback(() => {
  processForm(formId);
}, [formId]);</code></pre>
      <h2>4. Code-Split with React.lazy + Suspense</h2>
      <p>Heavy routes or modals not needed on first paint should be code-split.</p>
      <h2>5. Virtualise Long Lists</h2>
      <p><strong>TanStack Virtual</strong> renders only visible items, keeping DOM size constant regardless of data volume.</p>
      <blockquote>Measure first, optimise second. The React DevTools Profiler shows exactly which renders are expensive.</blockquote>
      <h2>Patterns 6 – 10</h2>
      <ul>
        <li>Debounce rapid event handlers</li>
        <li>Avoid new object/array literals inline in JSX props</li>
        <li>Use <code>startTransition</code> for non-urgent updates</li>
        <li>Keep state close to where it's consumed</li>
        <li>Use stable, meaningful <code>key</code> props</li>
      </ul>
    `,
  },
  {
    id: "3",
    slug: "typescript-tips-save-debugging-hours",
    title: "TypeScript Tips That Will Save You Hours of Debugging",
    excerpt:
      "Stop wrestling with the type system — use it as a design tool. These patterns eliminate entire classes of runtime bugs before they reach production.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=900&q=80",
    category: "TypeScript",
    author: "Jordan Lee",
    authorRole: "Staff Engineer",
    date: "2025-05-15",
    readTime: 5,
    tags: ["TypeScript", "JavaScript", "Best Practices"],
    content: `
      <p>TypeScript's deepest value is making illegal states unrepresentable. Once that clicks, your code becomes dramatically more reliable without extra tests.</p>
      <h2>Discriminated Unions for State Machines</h2>
      <pre><code>type Request =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: User[] }
  | { status: "error";   message: string };</code></pre>
      <h2>unknown Instead of any</h2>
      <p>Forces a type-guard before use, preserving the safety you paid for.</p>
      <h2>The satisfies Operator (TS 4.9+)</h2>
      <p>Validates a value against a type while preserving its most specific literal type.</p>
      <h2>Utility Types</h2>
      <ul>
        <li><code>Partial&lt;T&gt;</code> · <code>Required&lt;T&gt;</code></li>
        <li><code>Pick&lt;T, K&gt;</code> · <code>Omit&lt;T, K&gt;</code></li>
        <li><code>Record&lt;K, V&gt;</code> · <code>ReturnType&lt;T&gt;</code></li>
      </ul>
      <blockquote>TypeScript doesn't slow you down — it eliminates debugging sessions that cost hours every sprint.</blockquote>
    `,
  },
  {
    id: "4",
    slug: "web-dev-career-roadmap-2025",
    title: "The 2025 Web Development Career Roadmap for Beginners",
    excerpt:
      "A clear, no-fluff path from zero to your first developer job — exactly what to learn, in what order, and which resources actually work.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80",
    category: "Career",
    author: "Mia Torres",
    authorRole: "Engineering Manager",
    date: "2025-04-30",
    readTime: 7,
    tags: ["Career", "Beginners", "Roadmap"],
    content: `
      <p>This roadmap is opinionated, linear, and built around what actually gets people hired in 2025.</p>
      <h2>Phase 1 — Fundamentals (2–3 months)</h2>
      <p>HTML → CSS → JavaScript in that order. Understand the DOM, events, fetch, and CSS layout before touching any framework.</p>
      <h2>Phase 2 — Pick a Path (1–2 months)</h2>
      <p>Learn React — it dominates job boards. Build three projects from scratch, not tutorial follow-alongs.</p>
      <h2>Phase 3 — Add TypeScript (3–4 weeks)</h2>
      <p>Convert one existing project, then start the next one with TypeScript from day one.</p>
      <blockquote>You don't need to know everything. You need to know enough to be useful on day one.</blockquote>
      <h2>Phase 4 — Ship Something Real</h2>
      <p>Deploy to Vercel. Buy a domain. Show employers you treat your work as a craft.</p>
      <h2>What to Skip For Now</h2>
      <ul>
        <li>Learning every framework at once</li>
        <li>Docker / Kubernetes / microservices</li>
        <li>Algorithm prep (save for later interview prep)</li>
      </ul>
    `,
  },
  {
    id: "5",
    slug: "tailwind-css-scalable-design-systems",
    title: "Tailwind CSS Best Practices for Scalable Design Systems",
    excerpt:
      "Utility-first CSS doesn't mean unstructured CSS. These patterns keep large Tailwind codebases readable and maintainable as your team grows.",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=900&q=80",
    category: "CSS",
    author: "Chris Wang",
    authorRole: "UI Engineer",
    date: "2025-04-12",
    readTime: 5,
    tags: ["Tailwind", "CSS", "Design Systems"],
    content: `
      <p>With the right patterns, Tailwind produces some of the most maintainable CSS codebases in production today.</p>
      <h2>Extract Components, Not Classes</h2>
      <p>The answer to class-soup is a React component, not <code>@apply</code>. A button that appears in twelve places belongs in a <code>&lt;Button&gt;</code> component.</p>
      <h2>Design Tokens in tailwind.config.js</h2>
      <pre><code>theme: {
  extend: {
    colors: {
      brand: "#7c6dfa",
      "brand-dim": "#1a1830",
    },
  },
},</code></pre>
      <h2>cva for Type-Safe Variants</h2>
      <p><strong>class-variance-authority</strong> brings TypeScript-safe component variants with full autocomplete.</p>
      <h2>prettier-plugin-tailwindcss</h2>
      <p>Sorts class names automatically on every save. Install once, forget forever.</p>
      <blockquote>Consistency at scale is more valuable than cleverness. The best Tailwind codebases are beautifully boring.</blockquote>
    `,
  },
];

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
            className="text-base md:text-lg text-foreground/90 leading-relaxed font-sans prose prose-lg dark:prose-invert max-w-none prose-p:mb-6 prose-p:leading-relaxed prose-headings:font-bold prose-headings:text-foreground prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-[13px] prose-h3:tracking-widest prose-h3:uppercase prose-h3:text-muted-foreground prose-h3:mt-8 prose-h3:mb-3 prose-ul:list-disc prose-ol:list-decimal prose-ul:pl-6 prose-ol:pl-6 prose-li:mb-2 prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:my-8 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-lg prose-blockquote:italic prose-blockquote:text-muted-foreground prose-a:text-primary prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-primary/80 prose-code:bg-primary/10 prose-code:text-primary prose-code:px-1.5 prose-code:rounded-md prose-code:text-sm prose-pre:bg-muted/30 prose-pre:border prose-pre:border-border prose-pre:text-foreground/80 prose-pre:p-6 prose-pre:rounded-xl prose-pre:overflow-x-auto prose-pre:mb-6 [&>p]:mb-6 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-12 [&>h2]:mb-4 [&>h2]:text-foreground [&>ul]:pl-6 [&>ul]:list-disc [&>ul]:mb-6 [&>li]:mb-2 [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:bg-primary/5 [&>blockquote]:p-4 [&>blockquote]:my-8 [&>blockquote]:rounded-r-lg [&>blockquote]:italic [&>blockquote]:text-muted-foreground [&>pre]:bg-muted/30 [&>pre]:border [&>pre]:border-border [&>pre]:p-6 [&>pre]:rounded-xl [&>pre]:overflow-x-auto [&>pre]:mb-6 [&>code]:bg-primary/10 [&>code]:text-primary [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:rounded-md [&>code]:text-sm"
            dangerouslySetInnerHTML={{ __html: current.content }}
          />

          {/* Tags */}
          {current.tags?.length > 0 && (
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
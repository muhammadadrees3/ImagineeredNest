"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// ─────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────
export interface BlogPost {
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
export const BLOG_POSTS: BlogPost[] = [
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
      <p>The App Router renders HTML on the server by default. Crawlers receive a fully-formed document on the first request — no JavaScript execution required, no content hidden behind a loading spinner.</p>

      <h3>Key Platform Advantages</h3>
      <ul>
        <li>Built-in <code>generateMetadata</code> for dynamic titles, descriptions, and Open Graph tags</li>
        <li>Automatic <code>robots.txt</code> and <code>sitemap.xml</code> via the Metadata Files API</li>
        <li>Image optimisation with <code>next/image</code> (WebP, lazy-loading, blur placeholders)</li>
        <li>Font subsetting and preloading with <code>next/font</code></li>
      </ul>

      <h2>Setting Up generateMetadata</h2>
      <p>Export a <code>generateMetadata</code> function from any page file. It runs server-side and can call your CMS for dynamic data.</p>
      <pre><code>export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { images: [{ url: post.image }] },
    alternates: {
      canonical: \`https://yourdomain.com/blog/\${params.slug}\`,
    },
  };
}</code></pre>

      <h2>Core Web Vitals Checklist</h2>
      <p>Google weights Core Web Vitals heavily. Preload hero images with the <code>priority</code> prop. Prevent layout shift by wrapping <code>fill</code> images in a fixed aspect-ratio container. Keep your JavaScript bundle lean.</p>

      <blockquote>A 100 ms improvement in load time can increase conversions by 8 %. Speed is a feature, not a polish task.</blockquote>

      <h2>JSON-LD Structured Data</h2>
      <p>Add a <code>BlogPosting</code> schema to every post page. Inject it as a <code>&lt;script type="application/ld+json"&gt;</code> in your layout component and watch rich results appear in the SERP.</p>

      <h2>Final SEO Checklist</h2>
      <ul>
        <li>Unique <code>&lt;title&gt;</code> and <code>&lt;meta description&gt;</code> per page</li>
        <li>Canonical URL on every page</li>
        <li>Sitemap submitted to Google Search Console</li>
        <li>LCP image preloaded with <code>priority</code></li>
        <li>JSON-LD structured data on all post pages</li>
      </ul>
    `,
  },
  {
    id: "2",
    slug: "react-performance-patterns-2025",
    title: "10 React Performance Patterns Every Developer Should Know",
    excerpt:
      "From memo and useMemo to virtualised lists — a production-focused reference for React apps that stay fast at scale, with real-world examples.",
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
      <p>Wrap components that receive stable props but re-render due to parent updates. <code>React.memo</code> performs a shallow prop comparison and bails out when nothing changed.</p>

      <h2>2. useMemo for Heavy Derivations</h2>
      <p>Memoize expensive calculations whose inputs rarely change. Profile first — <code>useMemo</code> itself has overhead and is not free.</p>

      <h2>3. useCallback for Stable Function References</h2>
      <p>Inline functions get a new reference on every render, silently breaking child memoisation. Stabilise them with <code>useCallback</code>.</p>
      <pre><code>const handleSubmit = useCallback(() => {
  processForm(formId);
}, [formId]);</code></pre>

      <h2>4. Code-Split with React.lazy + Suspense</h2>
      <p>Heavy routes or modals not needed on first paint should be code-split. The user downloads those kilobytes only when they navigate there.</p>

      <h2>5. Virtualise Long Lists</h2>
      <p>Rendering 5 000 rows into the DOM is a layout disaster. <strong>TanStack Virtual</strong> renders only visible items, keeping DOM size constant regardless of data volume.</p>

      <blockquote>Measure first, optimise second. The React DevTools Profiler shows exactly which renders are expensive — never guess.</blockquote>

      <h2>Patterns 6 – 10</h2>
      <ul>
        <li>Debounce rapid event handlers (search inputs, window resize)</li>
        <li>Avoid creating new object / array literals inline in JSX props</li>
        <li>Use <code>startTransition</code> to mark non-urgent state updates</li>
        <li>Keep state as close to where it is consumed as possible</li>
        <li>Use stable, meaningful <code>key</code> props to guide reconciliation</li>
      </ul>
    `,
  },
  {
    id: "3",
    slug: "typescript-tips-save-debugging-hours",
    title: "TypeScript Tips That Will Save You Hours of Debugging",
    excerpt:
      "Stop wrestling with the type system — use it as a design tool. These patterns eliminate entire classes of runtime bugs before they ever reach production.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=900&q=80",
    category: "TypeScript",
    author: "Jordan Lee",
    authorRole: "Staff Engineer",
    date: "2025-05-15",
    readTime: 5,
    tags: ["TypeScript", "JavaScript", "Best Practices", "Types"],
    content: `
      <p>TypeScript's deepest value isn't annotation — it's making illegal states unrepresentable. Once that idea clicks, your code becomes dramatically more reliable without writing extra tests.</p>

      <h2>Discriminated Unions for State Machines</h2>
      <p>Replace boolean flag combinations (<code>isLoading</code>, <code>isError</code>) with a union that can only be in one state at a time.</p>
      <pre><code>type Request =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: User[] }
  | { status: "error";   message: string };</code></pre>
      <p>The compiler now enforces exhaustive handling. Impossible combinations like <code>isLoading && isError</code> cannot exist structurally.</p>

      <h2>unknown Instead of any</h2>
      <p>When the type is genuinely unknown, reach for <code>unknown</code>. It forces a type-guard before use, preserving the safety you paid for.</p>

      <h2>The satisfies Operator (TS 4.9+)</h2>
      <p>Validates a value against a type while preserving its most specific literal type. Perfect for config objects and lookup tables.</p>

      <h2>Utility Types Worth Memorising</h2>
      <ul>
        <li><code>Partial&lt;T&gt;</code> — all properties optional</li>
        <li><code>Required&lt;T&gt;</code> — all properties required</li>
        <li><code>Pick&lt;T, K&gt;</code> — select a subset of keys</li>
        <li><code>Omit&lt;T, K&gt;</code> — exclude specific keys</li>
        <li><code>Record&lt;K, V&gt;</code> — typed dictionaries</li>
        <li><code>ReturnType&lt;T&gt;</code> — infer a function's return type</li>
      </ul>

      <blockquote>TypeScript doesn't slow you down — it eliminates the debugging sessions that cost hours every sprint.</blockquote>
    `,
  },
  {
    id: "4",
    slug: "web-dev-career-roadmap-2025",
    title: "The 2025 Web Development Career Roadmap for Beginners",
    excerpt:
      "A clear, no-fluff path from zero to your first developer job — exactly what to learn, in what order, and which resources actually get results.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80",
    category: "Career",
    author: "Mia Torres",
    authorRole: "Engineering Manager",
    date: "2025-04-30",
    readTime: 7,
    tags: ["Career", "Beginners", "Roadmap", "Learning"],
    content: `
      <p>The internet is drowning in contradictory beginner advice. This roadmap is opinionated, linear, and built around what actually gets people hired in 2025.</p>

      <h2>Phase 1 — The Fundamentals (2–3 months)</h2>
      <p>HTML → CSS → JavaScript, in that exact order. Don't rush to frameworks. Understand the DOM, events, fetch, and CSS layout. Every framework you will ever learn is an abstraction over these three.</p>

      <h2>Phase 2 — Pick a Path (1–2 months)</h2>
      <p>Frontend or fullstack? Frontend is the faster hiring path. Learn React — it dominates job boards. Build three complete projects from scratch, not tutorials you follow along with passively.</p>

      <h2>Phase 3 — Add TypeScript (3–4 weeks)</h2>
      <p>Employers expect TypeScript in 2025. Convert one existing project to feel where it helps, then start a new project with it from day one. The discomfort fades within a fortnight.</p>

      <blockquote>You don't need to know everything. You need to know enough to be useful on day one and learn the rest on the job.</blockquote>

      <h2>Phase 4 — Ship Something Real</h2>
      <p>Your portfolio needs live URLs, not just GitHub repos. Deploy to Vercel. Buy a domain. Signal to potential employers that you treat your work as a craft.</p>

      <h2>What to Skip For Now</h2>
      <ul>
        <li>Learning every framework simultaneously</li>
        <li>Docker, Kubernetes, and microservices architecture</li>
        <li>DSA and algorithm prep (save this for interview preparation later)</li>
      </ul>
    `,
  },
  {
    id: "5",
    slug: "tailwind-css-scalable-design-systems",
    title: "Tailwind CSS Best Practices for Scalable Design Systems",
    excerpt:
      "Utility-first CSS doesn't mean unstructured CSS. These patterns keep large Tailwind codebases readable, consistent, and maintainable as your team grows.",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=900&q=80",
    category: "CSS",
    author: "Chris Wang",
    authorRole: "UI Engineer",
    date: "2025-04-12",
    readTime: 5,
    tags: ["Tailwind", "CSS", "Design Systems", "Frontend"],
    content: `
      <p>Tailwind earns a bad reputation for unreadable JSX when used without discipline. With the right patterns it produces some of the most maintainable CSS codebases in production today.</p>

      <h2>Extract Components, Not Classes</h2>
      <p>The answer to class-soup is not <code>@apply</code> — it's a React component. A button that appears in twelve places belongs in a <code>&lt;Button&gt;</code> component. The Tailwind classes then live in exactly one place.</p>

      <h2>Design Tokens in tailwind.config.js</h2>
      <p>Extend the config with your brand palette, spacing scale, and type ramp. Never ship arbitrary values like <code>text-[17px]</code> in production — define a token and reference it consistently.</p>
      <pre><code>// tailwind.config.js
theme: {
  extend: {
    colors: {
      brand:       "#6c63ff",
      "brand-dim": "#1a1830",
    },
  },
},</code></pre>

      <h2>cva for Type-Safe Variants</h2>
      <p>The <strong>class-variance-authority</strong> library brings TypeScript-safe component variants. Define <em>primary</em>, <em>secondary</em>, and <em>ghost</em> button variants in one file and get autocomplete everywhere.</p>

      <h2>prettier-plugin-tailwindcss</h2>
      <p>The official Prettier plugin sorts class names into a stable, predictable order automatically on every save. Install once, configure once, never think about class order again.</p>

      <h2>Consistency at scale is more valuable than cleverness. The best Tailwind codebases are beautifully boring.</h2>
    `,
  },
];

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
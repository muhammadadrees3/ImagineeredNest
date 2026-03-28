// blogData.ts
// Static blog data — replace with your CMS or API calls later.

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;       // ISO date string
  readTime: number;   // minutes
  tags?: string[];
  content: string;    // HTML string
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "nextjs-seo-guide-2025",
    title: "The Complete Next.js SEO Guide for 2025",
    excerpt:
      "Learn how to structure your Next.js App Router project for maximum search engine visibility — metadata, Open Graph, sitemaps, and Core Web Vitals.",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80",
    category: "SEO",
    author: "Alex Kim",
    date: "2025-06-10",
    readTime: 8,
    tags: ["Next.js", "SEO", "Performance", "App Router"],
    content: `
      <p>Search engine optimization in 2025 isn't just about keywords — it's about delivering fast, structured, and semantically meaningful content that both humans and crawlers can understand.</p>

      <h2>Why Next.js is Great for SEO</h2>
      <p>Next.js with the App Router enables server-side rendering and static generation by default. This means search engines receive fully rendered HTML on the first request, unlike traditional client-side apps where crawlers may see empty shells.</p>

      <h3>Key Advantages</h3>
      <ul>
        <li>Built-in <code>generateMetadata</code> for dynamic page titles and descriptions</li>
        <li>Automatic <code>robots.txt</code> and <code>sitemap.xml</code> generation</li>
        <li>Image optimization with <code>next/image</code></li>
        <li>Font optimization with <code>next/font</code></li>
      </ul>

      <h2>Setting Up generateMetadata</h2>
      <p>Every page in the App Router can export a <code>generateMetadata</code> function. This runs server-side and can fetch dynamic data to construct page-specific SEO tags.</p>
      <pre><code>export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      images: [post.image],
    },
  };
}</code></pre>

      <h2>Core Web Vitals Checklist</h2>
      <p>Google's ranking algorithm heavily weights Core Web Vitals. Optimize LCP by preloading hero images with <code>priority</code> on your <code>next/image</code> component. Reduce CLS by setting explicit width/height or using the <code>fill</code> prop with a fixed aspect-ratio container.</p>

      <blockquote>A 100ms improvement in load time can increase conversions by 8%. Speed is a feature, not an optimization.</blockquote>

      <h2>Structured Data (JSON-LD)</h2>
      <p>Add structured data to help search engines understand your content type. For blog posts, use the <code>BlogPosting</code> schema. Inject it as a <code>&lt;script type="application/ld+json"&gt;</code> tag in your layout or page component.</p>

      <h2>Final Thoughts</h2>
      <p>A well-structured Next.js site with proper metadata, fast images, clean URLs, and semantic HTML will outrank competitors that ignore these fundamentals. Start with the basics and iterate.</p>
    `,
  },
  {
    id: "2",
    slug: "react-performance-optimization",
    title: "10 React Performance Patterns Every Dev Should Know",
    excerpt:
      "From memo and useMemo to lazy loading and virtualized lists — a practical reference for writing fast React applications in production.",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80",
    category: "React",
    author: "Sara Patel",
    date: "2025-05-28",
    readTime: 6,
    tags: ["React", "Performance", "JavaScript", "Optimization"],
    content: `
      <p>Performance regressions sneak into React apps gradually. One extra re-render here, a missed memoization there — and suddenly your app feels sluggish. Here are ten patterns that keep production React apps fast.</p>

      <h2>1. React.memo for Expensive Components</h2>
      <p>Wrap components that receive stable props but re-render frequently due to parent updates. <code>React.memo</code> performs a shallow comparison and skips re-rendering if props haven't changed.</p>

      <h2>2. useMemo for Heavy Calculations</h2>
      <p>If a calculation runs on every render and is computationally expensive, memoize it. Remember: <code>useMemo</code> has a cost itself — only use it when profiling reveals a real bottleneck.</p>

      <h2>3. useCallback for Stable Function References</h2>
      <p>Functions defined inside components get a new reference on every render. When passed as props to memoized children, this breaks memoization. <code>useCallback</code> stabilizes the reference.</p>

      <pre><code>const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);</code></pre>

      <h2>4. Code Splitting with React.lazy</h2>
      <p>Don't ship your entire app in one bundle. Use <code>React.lazy</code> with <code>Suspense</code> to split heavy components and load them only when needed.</p>

      <h2>5. Virtualize Long Lists</h2>
      <p>Rendering 10,000 rows in the DOM is a disaster. Libraries like <strong>TanStack Virtual</strong> only render items in the viewport, keeping the DOM lean regardless of data size.</p>

      <blockquote>Measure first, optimize second. Never guess where the bottleneck is — the React DevTools Profiler will show you exactly where renders are expensive.</blockquote>

      <h2>6–10: More Patterns</h2>
      <ul>
        <li>Debounce input handlers to reduce state updates</li>
        <li>Avoid creating new objects/arrays inline in JSX props</li>
        <li>Use <code>startTransition</code> for non-urgent updates</li>
        <li>Move state down to the component that needs it</li>
        <li>Use <code>key</code> prop correctly to control reconciliation</li>
      </ul>

      <p>Applying even half of these patterns consistently will produce noticeably snappier user interfaces.</p>
    `,
  },
  {
    id: "3",
    slug: "typescript-tips-for-beginners",
    title: "TypeScript Tips That Will Save You Hours of Debugging",
    excerpt:
      "Stop fighting the type system and start leveraging it. These TypeScript patterns eliminate entire categories of runtime bugs before they ever reach production.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
    category: "TypeScript",
    author: "Jordan Lee",
    date: "2025-05-15",
    readTime: 5,
    tags: ["TypeScript", "JavaScript", "Best Practices"],
    content: `
      <p>TypeScript's value isn't just type annotations — it's a system for making illegal states unrepresentable. Once you internalize this, your code gets dramatically more reliable.</p>

      <h2>Use Discriminated Unions for State</h2>
      <p>Instead of booleans like <code>isLoading</code> and <code>isError</code> that can contradict each other, model your state as a discriminated union.</p>
      <pre><code>type RequestState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: User }
  | { status: 'error'; message: string };</code></pre>

      <p>Now the compiler enforces that you handle every case, and impossible combinations like <code>isLoading &amp;&amp; isError</code> cannot exist.</p>

      <h2>Prefer unknown over any</h2>
      <p>When you don't know the type of a value, reach for <code>unknown</code> instead of <code>any</code>. It forces you to narrow the type before using it, preserving type safety.</p>

      <h2>Use satisfies for Object Literals</h2>
      <p>The <code>satisfies</code> operator (TS 4.9+) validates that an object matches a type while preserving the literal type. It's perfect for configuration objects.</p>

      <h2>Utility Types Worth Memorizing</h2>
      <ul>
        <li><code>Partial&lt;T&gt;</code> — makes all properties optional</li>
        <li><code>Required&lt;T&gt;</code> — makes all properties required</li>
        <li><code>Pick&lt;T, K&gt;</code> — select specific keys</li>
        <li><code>Omit&lt;T, K&gt;</code> — exclude specific keys</li>
        <li><code>Record&lt;K, V&gt;</code> — typed dictionaries</li>
      </ul>

      <blockquote>TypeScript doesn't slow you down — it speeds you up by preventing the debugging sessions that eat hours.</blockquote>

      <p>Invest two hours learning these patterns and save ten hours of bug-hunting every sprint.</p>
    `,
  },
  {
    id: "4",
    slug: "web-development-career-roadmap",
    title: "The 2025 Web Development Career Roadmap for Beginners",
    excerpt:
      "A clear, no-fluff path from zero to your first web developer job — what to learn, in what order, and which resources actually work.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    category: "Career",
    author: "Mia Torres",
    date: "2025-04-30",
    readTime: 7,
    tags: ["Career", "Beginners", "Web Development", "Learning"],
    content: `
      <p>The internet is flooded with advice for beginner developers. Most of it is contradictory or outdated. This roadmap is opinionated, linear, and based on what actually gets people hired in 2025.</p>

      <h2>Phase 1: The Fundamentals (2–3 months)</h2>
      <p>Start with HTML, CSS, and JavaScript — in that order. Don't rush to frameworks. Understanding the DOM, event handling, fetch API, and basic CSS layout will make every framework easier to learn.</p>

      <h2>Phase 2: Pick Your Path (1–2 months)</h2>
      <p>Frontend or fullstack? For most beginners, frontend is the faster path to employment. Learn React — it dominates the job market. Build three projects from scratch, not tutorials.</p>

      <h2>Phase 3: Add TypeScript (3–4 weeks)</h2>
      <p>Employers expect TypeScript in 2025. Add it to one of your existing projects to feel the pain points, then start a new project with it from scratch. The discomfort fades quickly.</p>

      <blockquote>You don't need to know everything. You need to know enough to be useful on day one and learn the rest on the job.</blockquote>

      <h2>Phase 4: Deploy Something Real</h2>
      <p>Your portfolio needs live URLs, not just GitHub repos. Deploy to Vercel or Netlify. Buy a domain. Make it look like you take your work seriously — because you do.</p>

      <h2>What to Skip (For Now)</h2>
      <ul>
        <li>Every JavaScript framework simultaneously</li>
        <li>Docker, Kubernetes, microservices</li>
        <li>Algorithms and data structures (until interview prep)</li>
      </ul>

      <p>Follow this path with consistency and you'll be job-ready in six months. Speed matters less than not stopping.</p>
    `,
  },
  {
    id: "5",
    slug: "tailwind-css-best-practices",
    title: "Tailwind CSS Best Practices for Scalable Design Systems",
    excerpt:
      "Utility-first CSS doesn't mean unstructured CSS. These patterns keep large Tailwind codebases clean, consistent, and easy to maintain as teams grow.",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80",
    category: "CSS",
    author: "Chris Wang",
    date: "2025-04-12",
    readTime: 5,
    tags: ["Tailwind", "CSS", "Design Systems", "Frontend"],
    content: `
      <p>Tailwind CSS gets a bad reputation for unreadable JSX when used without discipline. But with the right patterns, it produces the most maintainable CSS codebases I've worked in.</p>

      <h2>1. Extract Components, Not Classes</h2>
      <p>The antidote to class soup isn't <code>@apply</code> — it's React components. When a button appears in twelve places, wrap it in a <code>&lt;Button&gt;</code> component. The Tailwind classes live in one place.</p>

      <h2>2. Use a Design Token System</h2>
      <p>Extend <code>tailwind.config.js</code> with your brand colors, spacing scale, and typography. Never use arbitrary values like <code>text-[17px]</code> in production — define a token instead.</p>

      <pre><code>// tailwind.config.js
theme: {
  extend: {
    colors: {
      brand: '#c84b31',
      'brand-light': '#f5ede9',
    }
  }
}</code></pre>

      <h2>3. Organize with the cva Library</h2>
      <p>The <strong>class-variance-authority</strong> (cva) library brings TypeScript-safe variants to Tailwind components. Define your button variants — primary, secondary, ghost — and get autocomplete for free.</p>

      <h2>4. Use prettier-plugin-tailwindcss</h2>
      <p>This official Prettier plugin automatically sorts your class names in a consistent order. Install it once and never think about class order again.</p>

      <blockquote>Consistency at scale is more valuable than cleverness. The best Tailwind codebases are boring in the best way.</blockquote>

      <p>Tailwind's productivity gains are real, but they require deliberate structure. These patterns let you scale beyond toy projects.</p>
    `,
  },
];
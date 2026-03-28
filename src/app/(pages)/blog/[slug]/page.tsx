import BlogDetail from "@/app/components/Blog/BlogDetail";
import { BLOG_POSTS } from "@/app/components/Blog/BlogList"; // share data

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = Array.isArray(BLOG_POSTS) ? BLOG_POSTS.find(p => p.slug === params.slug) : null;
  return {
    title: post?.title ?? "Article",
    description: post?.excerpt,
    openGraph: { images: [post?.image ?? ""] },
    alternates: { canonical: `/blog/${params.slug}` },
  };
}
export function generateStaticParams() {[]
  return Array.isArray(BLOG_POSTS) ? BLOG_POSTS.map(p => ({ slug: p.slug })) : [];
}
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <BlogDetail slug={params.slug} />;
}
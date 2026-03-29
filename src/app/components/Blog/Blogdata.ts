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
  authorRole: string;
  content: string;    // HTML string
}

export const BLOG_POSTS: BlogPost[] = [
 {
  id: "1",
  slug: "introduction-to-artificial-intelligence",
  title: "Understanding Artificial Intelligence in Simple Terms",
  excerpt:
    "Artificial Intelligence is changing how businesses work and how people interact with technology. This guide explains AI in a clear and practical way.",
  image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80",
  category: "Technology",
  author: "John Smith",
  authorRole: "Tech Writer",
  date: "2025-05-10",
  readTime: 6,
  tags: ["AI", "Technology", "Automation", "Future"],
  content: `
    <p>Artificial Intelligence (AI) is the ability of machines to perform tasks that usually require human thinking. This includes understanding language, recognizing images, solving problems, and making decisions.</p>

    <h2>What is Artificial Intelligence?</h2>
    <p>AI allows computers to learn from data and improve over time. Instead of being fully programmed for every task, AI systems can adapt based on experience. This makes them powerful for solving real-world problems.</p>

    <h2>Where is AI Used?</h2>
    <p>AI is already part of our daily lives. It is used in search engines, online shopping, banking systems, and even mobile apps. Businesses use AI to improve customer service, automate tasks, and make better decisions.</p>

    <h2>Types of AI</h2>
    <p>There are different types of AI systems. Some are designed for specific tasks, like chatbots or recommendation systems. Others aim to perform a wider range of activities, similar to human intelligence.</p>

    <h2>Benefits of AI</h2>
    <p>AI helps save time, reduce errors, and increase efficiency. It can handle repetitive tasks, allowing people to focus on more important work. For businesses, it can improve productivity and customer experience.</p>

    <h2>Challenges of AI</h2>
    <p>While AI offers many benefits, it also comes with challenges. These include data privacy concerns, job changes, and the need for proper regulation. It is important to use AI responsibly.</p>

    <h2>The Future of AI</h2>
    <p>AI will continue to grow and become more advanced. It will play a bigger role in industries like healthcare, education, and business. Understanding AI today will help you prepare for the future.</p>

    <h2>Technology is evolving, and AI is becoming an important part of that journey.</h2>
  `,
},
{
  id: "2",
  slug: "responsible-ai-principle",
  title: "Responsible AI: Building Trust in Modern Technology",
  excerpt:
    "As Artificial Intelligence grows, the focus is shifting toward using it responsibly. Learn how Responsible AI ensures fairness, transparency, and trust.",
  image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=900&q=80",
  category: "Technology",
  author: "Sarah Ahmed",
  authorRole: "AI Analyst",
  date: "2025-06-02",
  readTime: 5,
  tags: ["AI", "Ethics", "Technology", "Privacy"],
  content: `
    <p>Artificial Intelligence is becoming a key part of modern technology, but with its growth comes responsibility. The concept of Responsible AI focuses on ensuring that AI systems are fair, transparent, and safe for everyone.</p>

    <h2>What is Responsible AI?</h2>
    <p>Responsible AI means designing and using AI systems in a way that respects human values. It ensures that AI decisions are understandable and do not cause harm or unfair treatment to individuals or groups.</p>

    <h2>Why is Responsible AI Important?</h2>
    <p>As businesses rely more on AI, trust becomes essential. Users want to know how decisions are made and whether their data is safe. Responsible AI helps build that trust by making systems more reliable and transparent.</p>

    <h2>Key Principles</h2>
    <p>Responsible AI is based on a few important principles. These include fairness, accountability, transparency, and privacy. AI systems should treat all users equally and provide clear explanations for their decisions.</p>

    <h2>Challenges in Implementation</h2>
    <p>Implementing Responsible AI is not always easy. It requires proper data handling, continuous monitoring, and clear guidelines. Organizations must invest time and effort to ensure their AI systems meet these standards.</p>

    <h2>The Role of Businesses</h2>
    <p>Companies play a major role in promoting Responsible AI. By following ethical practices and protecting user data, businesses can create AI systems that people trust and rely on.</p>

    <h2>The Future of Responsible AI</h2>
    <p>Responsible AI is becoming a global priority. Governments and organizations are developing rules and frameworks to ensure AI is used safely. This will shape how technology evolves in the coming years.</p>

    <h2>Building AI responsibly is not just an option, it is a necessity for the future.</h2>
  `,
}
];
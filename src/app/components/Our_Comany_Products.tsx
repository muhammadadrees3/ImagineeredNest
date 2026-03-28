import React from 'react';
import { ArrowRight, Sparkles, Code2, Database, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

// Dummy data for Company Products
const COMPANY_PRODUCTS = [
  {
    id: "prod-1",
    title: "SentinelGuard API",
    description: "Enterprise-grade security gateway that automatically Detects and neutralizes threats in real-time.",
    status: "Live",
    statusColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    category: "Security Tools",
    icon: <Shield className="w-6 h-6 text-emerald-500" />,
    features: ["Zero-trust architecture", "Automated threat response", "Compliance reporting"],
    link: "#",
    badge: "Most Popular",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    bgPattern: "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/5 via-background to-background"
  },
  {
    id: "prod-2",
    title: "DataSync Pro",
    description: "Seamlessly synchronize massive datasets across distributed multi-cloud environments.",
    status: "Beta",
    statusColor: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    category: "Data Infrastructure",
    icon: <Database className="w-6 h-6 text-blue-500" />,
    features: ["Real-time replication", "Conflict resolution"],
    link: "#",
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    bgPattern: "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500/5 via-background to-background"
  },
  {
    id: "prod-3",
    title: "TurboDeploy",
    description: "One-click deployment pipeline optimized for Next.js and Node microservices.",
    status: "Waitlist",
    statusColor: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    category: "DevOps",
    icon: <Zap className="w-6 h-6 text-purple-500" />,
    features: ["Zero-downtime rollouts", "Auto-scaling built-in", "Vercel integration"],
    link: "#",
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    bgPattern: "bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-500/5 via-background to-background"
  },
  {
    id: "prod-4",
    title: "CodeWeaver Studio",
    description: "An AI-assisted IDE extension that predicts your next workflow and writes boilerplate code instantly.",
    status: "Live",
    statusColor: "bg-primary/10 text-primary border-primary/20",
    category: "Developer Tools",
    icon: <Code2 className="w-6 h-6 text-primary" />,
    features: ["Context-aware autocomplete", "Multi-language support"],
    link: "#",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    bgPattern: "bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"
  }
];

function Our_Comany_Products() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-5 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-primary text-xs font-semibold mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> Proprietary Products
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-foreground">
            Tools built for <span className="bg-linear-to-r from-primary to-blue-500 bg-clip-text text-transparent">Scale.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Beyond client services, we engineer powerful proprietary software solutions designed to accelerate workflows and secure enterprise ecosystems.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
          {COMPANY_PRODUCTS.map((product, index) => (
            <div 
              key={product.id}
              className={`group relative flex flex-col justify-between p-8 rounded-4xl border border-border/50 bg-card overflow-hidden hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5 ${product.colSpan}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Product Background Gradient */}
              <div className={`absolute inset-0 z-0 opacity-50 group-hover:opacity-100 transition-opacity duration-700 ${product.bgPattern}`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-2xl bg-background/80 backdrop-blur-sm border border-border/50 shadow-sm group-hover:scale-110 transition-transform duration-500">
                    {product.icon}
                  </div>
                  <div className="flex gap-2 items-center">
                    {product.badge && (
                      <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-orange-500/10 text-orange-500 border border-orange-500/20 rounded-full">
                        {product.badge}
                      </span>
                    )}
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full border backdrop-blur-sm ${product.statusColor}`}>
                      {product.status}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 block">
                    {product.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-tight">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Bottom Section: Features & Link */}
              <div className="relative z-10 mt-8 pt-6 border-t border-border/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <ul className="flex flex-col gap-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href={product.link} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-background border border-border text-foreground text-sm font-semibold group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                  Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Our_Comany_Products;
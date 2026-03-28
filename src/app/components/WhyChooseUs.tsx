// src/components/WhyChooseUs.tsx
'use client';
import { Smile, RefreshCw, Headset, Wallet } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
const features = [
  { icon: Smile, title: '100% Client Satisfaction', desc: 'Unlimited revisions until you are completely satisfied.' },
  { icon: RefreshCw, title: 'Agile Development Process', desc: 'Streamlined work, timely updates, clear communication.' },
  { icon: Headset, title: 'Post-Launch Support', desc: 'Dedicated maintenance and support for continued performance.' },
  { icon: Wallet, title: 'Competitive Pricing', desc: 'Enterprise‑level quality at startup‑friendly rates.' },
];

const WhyChooseUs = () => {
  const { theme } = useTheme();
  return (
    <section className="py-20 px-5 bg-muted/5">
      <h2 className={`${theme == 'dark' ? 'section-title-in-dark' : 'section-title-in-light'}`}>Why Choose Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {features.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="group bg-card transform  transition-all duration-300 flex items-center flex-wrap justify-center gap-6 border border-border rounded-3xl p-8 hover:shadow-custom hover:-translate-y-2" data-aos="zoom-in" data-aos-delay={idx * 100}>
              <div className="w-16 h-16 shrink-0 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold mb-1 text-foreground">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed text-sm">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseUs;
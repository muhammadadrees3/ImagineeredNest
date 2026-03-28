"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";

const servicesList = [
  "UI/UX Design",
  "Graphic Design",
  "Web Development",
  "App Development",
  "Desktop Application",
  "Google Business Setup",
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-5 relative bg-muted/5">
            <div className="absolute top-0  left-0 right-0 h-1 bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-50 dark:opacity-100" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Why Choose Us
          </h2>

          <p className="mt-6 text-lg text-foreground/70 leading-relaxed">
            We guide your business at every stage from idea to execution delivering high quality design, scalable development, and powerful digital marketing strategies that help you grow faster and smarter.
          </p>

          <p className="mt-4 text-foreground/70">
            Our team ensures your brand stands out in a competitive market with modern solutions tailored to your business goals.
          </p>

          {/* SERVICES LIST */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {servicesList.map((service, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="text-primary w-5 h-5" />
                <span className="text-foreground font-medium">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src="https://img.freepik.com/free-photo/business-man-holding-clipboard-with-why-choose-us-question_23-2148932313.jpg?t=st=1774684898~exp=1774688498~hmac=23a166eaf09b9d6913414cdb20b7580315e4146f28016e68ffe8b95ac8481a46&w=1480" // 👉 put your image in public/images
            alt="Why Choose Us"
            fill
            className="object-cover rounded-3xl shadow-lg"
          />
        </div>

      </div>
            <div className="absolute bottom-0  left-0 right-0 h-1 bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-50 dark:opacity-100" />

    </section>

  );
};

export default WhyChooseUs;

// // src/components/WhyChooseUs.tsx
// 'use client';
// import { Smile, RefreshCw, Headset, Wallet } from 'lucide-react';
// import { useTheme } from '@/context/ThemeContext';
// const features = [
//   { icon: Smile, title: '100% Client Satisfaction', desc: 'Unlimited revisions until you are completely satisfied.' },
//   { icon: RefreshCw, title: 'Agile Development Process', desc: 'Streamlined work, timely updates, clear communication.' },
//   { icon: Headset, title: 'Post-Launch Support', desc: 'Dedicated maintenance and support for continued performance.' },
//   { icon: Wallet, title: 'Competitive Pricing', desc: 'Enterprise‑level quality at startup‑friendly rates.' },
// ];

// const WhyChooseUs = () => {
//   const { theme } = useTheme();
//   return (
//     <section className="py-20 px-5 bg-muted/5">
//       <h2 className={`${theme == 'dark' ? 'section-title-in-dark' : 'section-title-in-light'}`}>Why Choose Us</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
//         {features.map((item, idx) => {
//           const Icon = item.icon;
//           return (
//             <div key={idx} className="group bg-card transform  transition-all duration-300 flex items-center flex-wrap justify-center gap-6 border border-border rounded-3xl p-8 hover:shadow-custom hover:-translate-y-2" data-aos="zoom-in" data-aos-delay={idx * 100}>
//               <div className="w-16 h-16 shrink-0 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-all duration-500">
//                 <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
//               </div>
//               <div className="text-left">
//                 <h3 className="text-xl font-bold mb-1 text-foreground">{item.title}</h3>
//                 <p className="text-foreground/70 leading-relaxed text-sm">{item.desc}</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;
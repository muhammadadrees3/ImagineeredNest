"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Palette, Layout, Image as ImageIcon, Monitor, Crown } from 'lucide-react';

/**
 * Category Type Definition
 */
type FAQCategory = 'logo' | 'poster' | 'banner' | 'web' | 'branding';

/**
 * Category Image Map - Optimized SVG images
 */
const categoryImages: Record<FAQCategory, string> = {
  logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"%3E%3Crect fill="%231f3a93" width="600" height="400"/%3E%3Ccircle cx="300" cy="200" r="80" fill="%234f94ff" opacity="0.8"/%3E%3Ccircle cx="300" cy="200" r="60" fill="%23ffffff" opacity="0.9"/%3E%3Ctext x="300" y="215" font-family="system-ui" font-size="24" font-weight="bold" fill="%231f3a93" text-anchor="middle" dominant-baseline="middle"%3ELogo Design%3C/text%3E%3Crect x="50" y="320" width="500" height="2" fill="%234f94ff" opacity="0.5"/%3E%3C/svg%3E',
  poster: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"%3E%3Crect fill="%23ffffff" width="600" height="400"/%3E%3Crect x="40" y="30" width="520" height="340" fill="none" stroke="%231f3a93" stroke-width="3"/%3E%3Crect x="60" y="50" width="480" height="120" fill="%234f94ff" opacity="0.15"/%3E%3Ctext x="300" y="120" font-family="system-ui" font-size="36" font-weight="bold" fill="%231f3a93" text-anchor="middle" dominant-baseline="middle"%3EPOSTER DESIGN%3C/text%3E%3Crect x="60" y="200" width="480" height="140" fill="%23f0f4ff"/%3E%3Ctext x="300" y="250" font-family="system-ui" font-size="16" fill="%231f3a93" text-anchor="middle" dominant-baseline="middle"%3EProfessional Poster Layout%3C/text%3E%3Crect x="40" y="30" width="520" height="340" fill="none" stroke="%234f94ff" stroke-width="1" opacity="0.3" stroke-dasharray="5,5"/%3E%3C/svg%3E',
  banner: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"%3E%3Cdefs%3E%3ClinearGradient id="grad" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%231f3a93;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%234f94ff;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill="url(%23grad)" width="600" height="400"/%3E%3Crect x="50" y="100" width="500" height="200" fill="%23ffffff" opacity="0.15" rx="8"/%3E%3Ctext x="300" y="190" font-family="system-ui" font-size="48" font-weight="bold" fill="%23ffffff" text-anchor="middle" dominant-baseline="middle"%3EBANNER%3C/text%3E%3Ctext x="300" y="230" font-family="system-ui" font-size="18" fill="%23ffffff" text-anchor="middle" dominant-baseline="middle"%3EHigh-Impact Design%3C/text%3E%3C/svg%3E',
  web: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"%3E%3Crect fill="%23f8f9ff" width="600" height="400"/%3E%3Crect x="60" y="40" width="480" height="320" fill="%23ffffff" stroke="%231f3a93" stroke-width="2" rx="4"/%3E%3Crect x="60" y="40" width="480" height="40" fill="%231f3a93"/%3E%3Ctext x="300" y="65" font-family="system-ui" font-size="14" fill="%23ffffff" text-anchor="middle" dominant-baseline="middle"%3EWeb Design%3C/text%3E%3Crect x="80" y="100" width="440" height="30" fill="%234f94ff" opacity="0.1" rx="4"/%3E%3Crect x="80" y="150" width="200" height="120" fill="%234f94ff" opacity="0.15" rx="4"/%3E%3Crect x="300" y="150" width="200" height="120" fill="%2310b981" opacity="0.15" rx="4"/%3E%3C/svg%3E',
  branding: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"%3E%3Crect fill="%23fafbff" width="600" height="400"/%3E%3Ccircle cx="150" cy="120" r="50" fill="%231f3a93" opacity="0.8"/%3E%3Crect x="120" y="200" width="60" height="100" fill="%234f94ff" opacity="0.6"/%3E%3Crect x="280" y="80" width="80" height="80" fill="%2310b981" opacity="0.6"/%3E%3Ctext x="300" y="300" font-family="system-ui" font-size="32" font-weight="bold" fill="%231f3a93" text-anchor="middle" dominant-baseline="middle"%3EBRANDING%3C/text%3E%3Ctext x="300" y="340" font-family="system-ui" font-size="14" fill="%234f94ff" text-anchor="middle" dominant-baseline="middle"%3EComplete Visual Identity%3C/text%3E%3C/svg%3E',
};

/**
 * FAQ Item Type Definition
 */
interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
  icon: React.ReactNode;
}

/**
 * FAQ Items Data
 */
const faqItems: FAQItem[] = [
  {
    id: 'logo-price',
    question: 'What is the price of the Normal Logo?',
    answer: 'Our Normal Logo design package is priced at $299. This comprehensive package includes unlimited revisions during the design phase, three initial design concepts, a final high-resolution file (300 DPI), and formats in PNG, SVG, and JPG. Perfect for startups and small businesses looking for professional brand identity without breaking the budget.',
    category: 'logo',
    icon: <Palette className="w-5 h-5" />,
  },
  {
    id: 'poster-price',
    question: 'What is the price of the Normal Poster?',
    answer: 'Our Normal Poster design service is offered at $249. This includes custom design tailored to your brand and message, print-ready files in multiple formats, unlimited revisions until you\'re satisfied, and design consultation to ensure your vision comes to life. Whether you need promotional posters, event announcements, or informational displays, our team delivers impactful designs optimized for printing.',
    category: 'poster',
    icon: <Layout className="w-5 h-5" />,
  },
  {
    id: 'banner-price',
    question: 'What is the price of the Normal Banner?',
    answer: 'Our Normal Banner design package costs $199 and includes responsive web banner design, social media banner variations, print-ready banners for physical displays, and fully editable source files. You\'ll receive designs optimized for different platforms (web, social media, print), unlimited revisions, and fast turnaround times. Perfect for promoting campaigns, events, or seasonal offers.',
    category: 'banner',
    icon: <ImageIcon className="w-5 h-5" />,
  },
  {
    id: 'web-design',
    question: 'What services are included in web design?',
    answer: 'Our web design services include responsive UI/UX design, mobile-first approach, interactive prototypes, unlimited revisions, and modern design frameworks. We create visually stunning and user-friendly websites that convert visitors into customers. Each project includes consultation, competitor analysis, wireframes, and final design deliverables in multiple formats.',
    category: 'web',
    icon: <Monitor className="w-5 h-5" />,
  },
  {
    id: 'branding-package',
    question: 'What does a complete branding package include?',
    answer: 'Our premium branding package includes logo design, brand guidelines, color palette development, typography selection, business card design, letterhead design, email signature, and brand story consultation. This comprehensive service ensures consistency across all your marketing materials and creates a memorable brand identity that resonates with your target audience.',
    category: 'branding',
    icon: <Crown className="w-5 h-5" />,
  },
  {
    id: 'turnaround-time',
    question: 'What is the typical turnaround time?',
    answer: 'Our standard turnaround time is 5-7 business days for most design projects. For urgent requests, we offer expedited services with 2-3 day delivery at an additional cost. Complex branding packages may take 10-14 days to ensure the highest quality. We maintain constant communication throughout the process and provide regular updates on your project\'s progress.',
    category: 'branding',
    icon: <Crown className="w-5 h-5" />,
  },
  {
    id: 'revisions-policy',
    question: 'How many revisions are included?',
    answer: 'All our packages include unlimited revisions to ensure complete satisfaction. We work closely with you to refine the design until it perfectly matches your vision. Minor adjustments and tweaks are always welcome during the design phase. However, major conceptual changes after final approval may require additional fees. Our goal is to deliver designs that exceed your expectations.',
    category: 'logo',
    icon: <Palette className="w-5 h-5" />,
  },
];

export default function FAQSection() {
  const [activeId, setActiveId] = useState(faqItems[0].id);
  const activeFAQ = faqItems.find((item) => item.id === activeId) || faqItems[0];

  return (
    // STRICT VIEWPORT CONTAINER: h-screen and overflow-hidden prevent full-page scrolling
    <section className="h-screen mt-10 w-full bg-gradient-to-br from-slate-50 via-white to-blue-50 flex flex-col overflow-hidden font-sans">
      
      {/* Header - Fixed Height Area (shrink-0 means it won't compress) */}
      <div className="shrink-0 px-6 pt-8 pb-4 lg:px-12 lg:pt-12 lg:pb-6">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-sm md:text-base text-slate-500 font-medium">
              Hover or click any question to explore detailed information
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content Area - Flexible Space (flex-1 and min-h-0 strictly contain overflow) */}
      <div className="flex-1 min-h-0 px-6 pb-8 lg:px-12 lg:pb-12">
        <div className="mx-auto max-w-6xl h-full flex flex-col lg:flex-row gap-6 lg:gap-10">
          
          {/* =========================================
              LEFT COLUMN: QUESTIONS LIST (SCROLLABLE)
              ========================================= */}
          {/* Mobile/Tablet: Hidden here, rendered below in a single unified list if needed, 
              but we can just use the same list for all and alter behavior! 
              Actually, let's keep separate responsive views for cleanest UX */}
              
          <div className="hidden lg:flex w-[45%] flex-col min-h-0">
            {/* The scrollable list of questions */}
            <div className="flex-1 overflow-y-auto pr-4 space-y-3 custom-scrollbar">
              {faqItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onMouseEnter={() => setActiveId(item.id)}
                  onClick={() => setActiveId(item.id)}
                  className="relative group cursor-pointer"
                >
                  <div
                    className={`relative px-5 py-4 rounded-xl border transition-all duration-300 ${
                      activeId === item.id
                        ? 'bg-white border-blue-200 shadow-md'
                        : 'bg-white/50 border-transparent hover:bg-white hover:border-slate-200 hover:shadow-sm'
                    }`}
                  >
                    {/* Active Indicator Bar */}
                    {activeId === item.id && (
                      <motion.div
                        layoutId="activeBar"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-blue-600 rounded-r-full"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}

                    <div className="flex items-center gap-4 pl-2">
                      <div className={`shrink-0 transition-colors duration-300 ${activeId === item.id ? 'text-blue-600' : 'text-slate-400'}`}>
                        {item.icon}
                      </div>
                      <h3 className={`flex-1 text-[15px] font-semibold transition-colors duration-300 leading-snug ${
                        activeId === item.id ? 'text-slate-900' : 'text-slate-600'
                      }`}>
                        {item.question}
                      </h3>
                      <ChevronRight className={`w-4 h-4 shrink-0 transition-all duration-300 ${
                        activeId === item.id ? 'text-blue-600 translate-x-1' : 'text-slate-300 opacity-0 group-hover:opacity-100'
                      }`} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* =========================================
              RIGHT COLUMN: ANSWER PANEL (DESKTOP)
              ========================================= */}
          <div className="hidden lg:flex w-[55%] flex-col min-h-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFAQ.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden"
              >
                {/* Image Section - Fixed Height to prevent layout shifts */}
                <div className="shrink-0 h-[40%] max-h-64 w-full relative bg-slate-50 border-b border-slate-100 overflow-hidden">
                  <motion.img
                    key={`${activeFAQ.id}-img`}
                    src={categoryImages[activeFAQ.category]}
                    alt={activeFAQ.category}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.05, opacity: 0.8 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm shadow-sm rounded-full text-xs font-bold text-blue-700 uppercase tracking-wider">
                    {activeFAQ.category}
                  </div>
                </div>

                {/* Text Content Section - Scrollable if content is very long */}
                <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar p-8 flex flex-col">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight shrink-0">
                    {activeFAQ.question}
                  </h3>
                  <div className="flex-1 text-slate-600 leading-relaxed text-[15px]">
                    {activeFAQ.answer}
                  </div>
                  
                  {/* Bottom Action Area */}
                  <div className="shrink-0 pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <p className="text-sm text-slate-500">Need a custom quote?</p>
                    <button className="px-5 py-2.5 bg-slate-900 hover:bg-blue-600 text-white rounded-lg text-sm font-semibold transition-colors duration-300">
                      Contact Support
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* =========================================
              MOBILE / TABLET VIEW (ACCORDION)
              ========================================= */}
          {/* On smaller screens, the container itself handles the scrolling, NO page scroll */}
          <div className="lg:hidden flex-1 min-h-0 overflow-y-auto custom-scrollbar pr-2 rounded-xl">
            <div className="space-y-3 pb-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setActiveId(activeId === item.id ? '' : item.id)}
                    className="w-full px-5 py-4 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors text-left"
                  >
                    <div className="flex items-center gap-3 pr-4">
                      <div className={`shrink-0 ${activeId === item.id ? 'text-blue-600' : 'text-slate-400'}`}>
                        {item.icon}
                      </div>
                      <span className={`text-[15px] font-semibold leading-tight ${activeId === item.id ? 'text-blue-700' : 'text-slate-800'}`}>
                        {item.question}
                      </span>
                    </div>
                    <ChevronRight className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                      activeId === item.id ? 'rotate-90 text-blue-600' : 'text-slate-400'
                    }`} />
                  </button>

                  {/* Expanded Content for Mobile */}
                  <AnimatePresence>
                    {activeId === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-2 border-t border-slate-100 bg-slate-50/50">
                          <div className="relative w-full h-32 sm:h-48 mb-4 rounded-lg overflow-hidden border border-slate-100 shadow-inner">
                            <img
                              src={categoryImages[item.category]}
                              alt={item.category}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-2 right-2 px-2 py-1 bg-white/90 rounded text-[10px] font-bold text-blue-700 uppercase shadow-sm">
                              {item.category}
                            </div>
                          </div>
                          <p className="text-sm text-slate-600 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Global CSS for elegant, non-intrusive scrollbars */}
      <style>{`
        /* Custom Scrollbar Styles */
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
        /* Hide scrollbar for cleaner look if not interacting, but keeping it visible for UX */
      `}</style>
    </section>
  );
}
// 'use client';

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FiChevronRight } from 'react-icons/fi';
// import { MdDesignServices } from 'react-icons/md';

// /**
//  * FAQ Item Type Definition
//  */
// interface FAQItem {
//   id: string;
//   question: string;
//   answer: string;
//   category: 'logo' | 'poster' | 'banner' | 'web' | 'branding';
//   icon: React.ReactNode;
// }

// /**
//  * Category Image Map - Optimized SVG images
//  */
// const categoryImages: Record<string, string> = {
//   logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"%3E%3Crect fill="%231f3a93" width="600" height="400"/%3E%3Ccircle cx="300" cy="200" r="80" fill="%234f94ff" opacity="0.8"/%3E%3Ccircle cx="300" cy="200" r="60" fill="%23ffffff" opacity="0.9"/%3E%3Ctext x="300" y="215" font-family="system-ui" font-size="24" font-weight="bold" fill="%231f3a93" text-anchor="middle" dominant-baseline="middle"%3ELogo Design%3C/text%3E%3Crect x="50" y="320" width="500" height="2" fill="%234f94ff" opacity="0.5"/%3E%3C/svg%3E',
  
//   poster: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"%3E%3Crect fill="%23ffffff" width="600" height="400"/%3E%3Crect x="40" y="30" width="520" height="340" fill="none" stroke="%231f3a93" stroke-width="3"/%3E%3Crect x="60" y="50" width="480" height="120" fill="%234f94ff" opacity="0.15"/%3E%3Ctext x="300" y="120" font-family="system-ui" font-size="36" font-weight="bold" fill="%231f3a93" text-anchor="middle" dominant-baseline="middle"%3EPOSTER DESIGN%3C/text%3E%3Crect x="60" y="200" width="480" height="140" fill="%23f0f4ff"/%3E%3Ctext x="300" y="250" font-family="system-ui" font-size="16" fill="%231f3a93" text-anchor="middle" dominant-baseline="middle"%3EProfessional Poster Layout%3C/text%3E%3Crect x="40" y="30" width="520" height="340" fill="none" stroke="%234f94ff" stroke-width="1" opacity="0.3" stroke-dasharray="5,5"/%3E%3C/svg%3E',
  
//   banner: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"%3E%3Cdefs%3E%3ClinearGradient id="grad" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%231f3a93;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%234f94ff;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill="url(%23grad)" width="600" height="400"/%3E%3Crect x="50" y="100" width="500" height="200" fill="%23ffffff" opacity="0.15" rx="8"/%3E%3Ctext x="300" y="190" font-family="system-ui" font-size="48" font-weight="bold" fill="%23ffffff" text-anchor="middle" dominant-baseline="middle"%3EBANNER%3C/text%3E%3Ctext x="300" y="230" font-family="system-ui" font-size="18" fill="%23ffffff" text-anchor="middle" dominant-baseline="middle"%3EHigh-Impact Design%3C/text%3E%3C/svg%3E',
  
//   web: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"%3E%3Crect fill="%23f8f9ff" width="600" height="400"/%3E%3Crect x="60" y="40" width="480" height="320" fill="%23ffffff" stroke="%231f3a93" stroke-width="2" rx="4"/%3E%3Crect x="60" y="40" width="480" height="40" fill="%231f3a93"/%3E%3Ctext x="300" y="65" font-family="system-ui" font-size="14" fill="%23ffffff" text-anchor="middle" dominant-baseline="middle"%3EWeb Design%3C/text%3E%3Crect x="80" y="100" width="440" height="30" fill="%234f94ff" opacity="0.1" rx="4"/%3E%3Crect x="80" y="150" width="200" height="120" fill="%234f94ff" opacity="0.15" rx="4"/%3E%3Crect x="300" y="150" width="200" height="120" fill="%2310b981" opacity="0.15" rx="4"/%3E%3C/svg%3E',
  
//   branding: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"%3E%3Crect fill="%23fafbff" width="600" height="400"/%3E%3Ccircle cx="150" cy="120" r="50" fill="%231f3a93" opacity="0.8"/%3E%3Crect x="120" y="200" width="60" height="100" fill="%234f94ff" opacity="0.6"/%3E%3Crect x="280" y="80" width="80" height="80" fill="%2310b981" opacity="0.6"/%3E%3Ctext x="300" y="300" font-family="system-ui" font-size="32" font-weight="bold" fill="%231f3a93" text-anchor="middle" dominant-baseline="middle"%3EBRANDING%3C/text%3E%3Ctext x="300" y="340" font-family="system-ui" font-size="14" fill="%234f94ff" text-anchor="middle" dominant-baseline="middle"%3EComplete Visual Identity%3C/text%3E%3C/svg%3E',
// };

// /**
//  * FAQ Items Data
//  */
// const faqItems: FAQItem[] = [
//   {
//     id: 'logo-price',
//     question: 'What is the price of the Normal Logo?',
//     answer: 'Our Normal Logo design package is priced at $299. This comprehensive package includes unlimited revisions during the design phase, three initial design concepts, a final high-resolution file (300 DPI), and formats in PNG, SVG, and JPG. Perfect for startups and small businesses looking for professional brand identity without breaking the budget.',
//     category: 'logo',
//     icon: <MdDesignServices className="w-5 h-5" />,
//   },
//   {
//     id: 'poster-price',
//     question: 'What is the price of the Normal Poster?',
//     answer: 'Our Normal Poster design service is offered at $249. This includes custom design tailored to your brand and message, print-ready files in multiple formats, unlimited revisions until you\'re satisfied, and design consultation to ensure your vision comes to life. Whether you need promotional posters, event announcements, or informational displays, our team delivers impactful designs optimized for printing.',
//     category: 'poster',
//     icon: <MdDesignServices className="w-5 h-5" />,
//   },
//   {
//     id: 'banner-price',
//     question: 'What is the price of the Normal Banner?',
//     answer: 'Our Normal Banner design package costs $199 and includes responsive web banner design, social media banner variations, print-ready banners for physical displays, and fully editable source files. You\'ll receive designs optimized for different platforms (web, social media, print), unlimited revisions, and fast turnaround times. Perfect for promoting campaigns, events, or seasonal offers.',
//     category: 'banner',
//     icon: <MdDesignServices className="w-5 h-5" />,
//   },
//   {
//     id: 'web-design',
//     question: 'What services are included in web design?',
//     answer: 'Our web design services include responsive UI/UX design, mobile-first approach, interactive prototypes, unlimited revisions, and modern design frameworks. We create visually stunning and user-friendly websites that convert visitors into customers. Each project includes consultation, competitor analysis, wireframes, and final design deliverables in multiple formats.',
//     category: 'web',
//     icon: <MdDesignServices className="w-5 h-5" />,
//   },
//   {
//     id: 'branding-package',
//     question: 'What does a complete branding package include?',
//     answer: 'Our premium branding package includes logo design, brand guidelines, color palette development, typography selection, business card design, letterhead design, email signature, and brand story consultation. This comprehensive service ensures consistency across all your marketing materials and creates a memorable brand identity that resonates with your target audience.',
//     category: 'branding',
//     icon: <MdDesignServices className="w-5 h-5" />,
//   },
//   {
//     id: 'turnaround-time',
//     question: 'What is the typical turnaround time?',
//     answer: 'Our standard turnaround time is 5-7 business days for most design projects. For urgent requests, we offer expedited services with 2-3 day delivery at an additional cost. Complex branding packages may take 10-14 days to ensure the highest quality. We maintain constant communication throughout the process and provide regular updates on your project\'s progress.',
//     category: 'branding',
//     icon: <MdDesignServices className="w-5 h-5" />,
//   },
//   {
//     id: 'revisions-policy',
//     question: 'How many revisions are included?',
//     answer: 'All our packages include unlimited revisions to ensure complete satisfaction. We work closely with you to refine the design until it perfectly matches your vision. Minor adjustments and tweaks are always welcome during the design phase. However, major conceptual changes after final approval may require additional fees. Our goal is to deliver designs that exceed your expectations.',
//     category: 'logo',
//     icon: <MdDesignServices className="w-5 h-5" />,
//   },
//   {
//     id: 'file-formats',
//     question: 'What file formats will I receive?',
//     answer: 'You\'ll receive your final designs in all industry-standard formats including PNG (transparent and white background), JPG, SVG (vector format for scalability), PDF (print-ready), and AI/PSD source files. Each format is optimized for specific use cases - web, print, or further editing. We also provide a comprehensive guide on when to use each format.',
//     category: 'web',
//     icon: <MdDesignServices className="w-5 h-5" />,
//   },
// ];

// /**
//  * Viewport-Constrained FAQ Component
//  * - Fixed viewport height layout
//  * - Scrollable questions list
//  * - Optimized answer panel with image and text
//  * - Fully responsive design
//  */
// export default function FAQSection() {
//   const [activeId, setActiveId] = useState<string>(faqItems[0].id);
//   const activeFAQ = faqItems.find((item) => item.id === activeId) || faqItems[0];

//   return (
//     <section className="h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex flex-col overflow-hidden">
//       {/* Header - Fixed Height */}
//       <div className="flex-shrink-0 px-4 pt-8 pb-6 sm:px-6 lg:px-8">
//         <div className="mx-auto max-w-7xl">
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-2">
//               Frequently Asked Questions
//             </h2>
//             <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-light">
//               Hover over any question to explore detailed information
//             </p>
//           </motion.div>
//         </div>
//       </div>

//       {/* Main Content Area - Flexible Height */}
//       <div className="flex-1 px-4 pb-8 sm:px-6 lg:px-8 overflow-hidden">
//         <div className="mx-auto max-w-7xl h-full">
//           {/* Desktop Layout */}
//           <div className="hidden lg:grid lg:grid-cols-2 gap-8 h-full">
//             {/* Left Column - Scrollable Questions List */}
//             <div className="flex flex-col h-full">
//               <div className="flex-1 overflow-y-auto pr-2 space-y-3 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent hover:scrollbar-thumb-slate-400">
//                 {faqItems.map((item, index) => (
//                   <motion.div
//                     key={item.id}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.05 }}
//                     onMouseEnter={() => setActiveId(item.id)}
//                     className="relative group cursor-pointer"
//                   >
//                     <motion.div
//                       className={`relative px-5 py-4 rounded-lg transition-all duration-300 ${
//                         activeId === item.id
//                           ? 'bg-white shadow-lg border-l-4 border-blue-600'
//                           : 'bg-white bg-opacity-60 border-l-4 border-transparent hover:bg-white hover:shadow-md'
//                       }`}
//                       whileHover={{ scale: 1.02, x: 8 }}
//                       transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//                     >
//                       {activeId === item.id && (
//                         <motion.div
//                           className="absolute inset-0 rounded-lg pointer-events-none"
//                           layoutId="activeGlow"
//                           transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//                           style={{
//                             boxShadow: '0 0 30px rgba(37, 99, 235, 0.2)',
//                           }}
//                         />
//                       )}

//                       <div className="relative z-10 flex items-start gap-3">
//                         <motion.div
//                           className={`flex-shrink-0 w-5 h-5 mt-0.5 transition-all duration-300 ${
//                             activeId === item.id ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-500'
//                           }`}
//                           animate={{
//                             rotate: activeId === item.id ? 360 : 0,
//                             scale: activeId === item.id ? 1.15 : 1,
//                           }}
//                           transition={{ duration: 0.5 }}
//                         >
//                           {item.icon}
//                         </motion.div>

//                         <div className="flex-1 min-w-0">
//                           <h3
//                             className={`text-sm sm:text-base font-semibold transition-all duration-300 leading-snug ${
//                               activeId === item.id ? 'text-slate-900' : 'text-slate-700'
//                             }`}
//                           >
//                             {item.question}
//                           </h3>
//                         </div>

//                         <motion.div
//                           className={`flex-shrink-0 transition-all duration-300 ${
//                             activeId === item.id ? 'text-blue-600' : 'text-slate-300'
//                           }`}
//                           animate={{
//                             x: activeId === item.id ? 4 : 0,
//                             rotate: activeId === item.id ? 90 : 0,
//                           }}
//                           transition={{ duration: 0.3 }}
//                         >
//                           <FiChevronRight className="w-4 h-4" />
//                         </motion.div>
//                       </div>
//                     </motion.div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>

//             {/* Right Column - Answer Panel (Fixed Size, No Scroll) */}
//             <div className="flex flex-col h-full">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeFAQ.id}
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -20 }}
//                   transition={{ duration: 0.4, ease: 'easeInOut' }}
//                   className="flex flex-col h-full bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden"
//                 >
//                   {/* Image Container - Fixed Height */}
//                   <div className="relative flex-shrink-0 h-1/2 overflow-hidden">
//                     <motion.img
//                       key={`${activeFAQ.id}-image`}
//                       src={categoryImages[activeFAQ.category]}
//                       alt={activeFAQ.question}
//                       className="w-full h-full object-cover"
//                       initial={{ opacity: 0, scale: 0.95 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       transition={{ duration: 0.4 }}
//                     />
//                   </div>

//                   {/* Text Content Container - Flexible Height with Internal Scroll */}
//                   <div className="flex-1 flex flex-col p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
//                     {/* Category Badge */}
//                     <motion.div
//                       className="flex-shrink-0 mb-3"
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       transition={{ duration: 0.3, delay: 0.1 }}
//                     >
//                       <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full capitalize">
//                         {activeFAQ.category}
//                       </span>
//                     </motion.div>

//                     {/* Question Heading */}
//                     <motion.h3
//                       className="flex-shrink-0 text-lg sm:text-xl font-bold text-slate-900 mb-3"
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.4, delay: 0.15 }}
//                     >
//                       {activeFAQ.question}
//                     </motion.h3>

//                     {/* Answer Text */}
//                     <motion.p
//                       className="flex-1 text-slate-700 leading-relaxed font-light text-sm"
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.4, delay: 0.2 }}
//                     >
//                       {activeFAQ.answer}
//                     </motion.p>

//                     {/* CTA Section */}
//                     <motion.div
//                       className="flex-shrink-0 mt-4 pt-4 border-t border-slate-100"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ duration: 0.4, delay: 0.25 }}
//                     >
//                       <div className="flex items-center justify-between">
//                         <p className="text-xs text-slate-500 font-medium">
//                           Have more questions?
//                         </p>
//                         <motion.button
//                           className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-xs font-semibold hover:shadow-lg transition-shadow duration-300"
//                           whileHover={{ scale: 1.05 }}
//                           whileTap={{ scale: 0.95 }}
//                         >
//                           Contact Us
//                         </motion.button>
//                       </div>
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </div>

//           {/* Mobile/Tablet Accordion View */}
//           <div className="lg:hidden h-full overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
//             <div className="space-y-3 pb-4">
//               {faqItems.map((item, index) => (
//                 <motion.details
//                   key={item.id}
//                   className="group border border-slate-200 rounded-lg overflow-hidden bg-white"
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.4, delay: index * 0.05 }}
//                 >
//                   <summary className="px-4 py-3 hover:bg-slate-50 transition-colors duration-200 flex items-center justify-between cursor-pointer select-none list-none">
//                     <span className="text-sm font-semibold text-slate-900 flex items-center gap-2">
//                       <span className="text-blue-600 flex-shrink-0">{item.icon}</span>
//                       <span className="flex-1">{item.question}</span>
//                     </span>
//                     <FiChevronRight className="w-4 h-4 text-slate-500 group-open:rotate-90 transition-transform flex-shrink-0" />
//                   </summary>

//                   <div className="px-4 py-3 bg-slate-50 border-t border-slate-200">
//                     <img
//                       src={categoryImages[item.category]}
//                       alt={item.question}
//                       className="w-full rounded-lg mb-3 shadow-sm"
//                     />
//                     <p className="text-slate-700 leading-relaxed font-light text-sm mb-3">
//                       {item.answer}
//                     </p>
//                     <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full capitalize">
//                       {item.category}
//                     </span>
//                   </div>
//                 </motion.details>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Custom Scrollbar Styles */}
//       <style jsx global>{`
//         .scrollbar-thin::-webkit-scrollbar {
//           width: 6px;
//         }
//         .scrollbar-thin::-webkit-scrollbar-track {
//           background: transparent;
//         }
//         .scrollbar-thin::-webkit-scrollbar-thumb {
//           background: #cbd5e1;
//           border-radius: 3px;
//         }
//         .scrollbar-thin::-webkit-scrollbar-thumb:hover {
//           background: #94a3b8;
//         }
//         .scrollbar-thumb-slate-300::-webkit-scrollbar-thumb {
//           background: #cbd5e1;
//         }
//         .scrollbar-thumb-slate-400:hover::-webkit-scrollbar-thumb:hover {
//           background: #94a3b8;
//         }
//         .scrollbar-track-transparent::-webkit-scrollbar-track {
//           background: transparent;
//         }
//       `}</style>
//     </section>
//   );
// }

// 'use client';

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FiChevronRight } from 'react-icons/fi';
// import { MdDesignServices } from 'react-icons/md';

// /**
//  * FAQ Item Type Definition
//  * Each FAQ item includes a question, answer, category (for image selection),
//  * and category icon for visual distinction
//  */
// interface FAQItem {
//   id: string;
//   question: string;
//   answer: string;
//   category: 'logo' | 'poster' | 'banner' | 'web' | 'branding';
//   icon: React.ReactNode;
// }

// /**
//  * Category Image Map
//  * Maps categories to beautiful, professional design illustrations/mockups
//  * Using high-quality design portfolio images as placeholders
//  */
// const categoryImages: Record<string, string> = {
//   logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"%3E%3Crect fill="%231f3a93" width="600" height="400"/%3E%3Ccircle cx="300" cy="200" r="80" fill="%234f94ff" opacity="0.8"/%3E%3Ccircle cx="300" cy="200" r="60" fill="%23ffffff" opacity="0.9"/%3E%3Ctext x="300" y="215" font-family="system-ui" font-size="24" font-weight="bold" fill="%231f3a93" text-anchor="middle" dominant-baseline="middle"%3ELogo Design%3C/text%3E%3Crect x="50" y="320" width="500" height="2" fill="%234f94ff" opacity="0.5"/%3E%3C/svg%3E',
  
//   poster: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"%3E%3Crect fill="%23ffffff" width="600" height="400"/%3E%3Crect x="40" y="30" width="520" height="340" fill="none" stroke="%231f3a93" stroke-width="3"/%3E%3Crect x="60" y="50" width="480" height="120" fill="%234f94ff" opacity="0.15"/%3E%3Ctext x="300" y="120" font-family="system-ui" font-size="36" font-weight="bold" fill="%231f3a93" text-anchor="middle" dominant-baseline="middle"%3EPOSTER DESIGN%3C/text%3E%3Crect x="60" y="200" width="480" height="140" fill="%23f0f4ff"/%3E%3Ctext x="300" y="250" font-family="system-ui" font-size="16" fill="%231f3a93" text-anchor="middle" dominant-baseline="middle"%3EProfessional Poster Layout%3C/text%3E%3Crect x="40" y="30" width="520" height="340" fill="none" stroke="%234f94ff" stroke-width="1" opacity="0.3" stroke-dasharray="5,5"/%3E%3C/svg%3E',
  
//   banner: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"%3E%3Cdefs%3E%3ClinearGradient id="grad" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%231f3a93;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%234f94ff;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill="url(%23grad)" width="600" height="400"/%3E%3Crect x="50" y="100" width="500" height="200" fill="%23ffffff" opacity="0.15" rx="8"/%3E%3Ctext x="300" y="190" font-family="system-ui" font-size="48" font-weight="bold" fill="%23ffffff" text-anchor="middle" dominant-baseline="middle"%3EBANNER%3C/text%3E%3Ctext x="300" y="230" font-family="system-ui" font-size="18" fill="%23ffffff" text-anchor="middle" dominant-baseline="middle"%3EHigh-Impact Design%3C/text%3E%3C/svg%3E',
  
//   web: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"%3E%3Crect fill="%23f8f9ff" width="600" height="400"/%3E%3Crect x="60" y="40" width="480" height="320" fill="%23ffffff" stroke="%231f3a93" stroke-width="2" rx="4"/%3E%3Crect x="60" y="40" width="480" height="40" fill="%231f3a93"/%3E%3Ctext x="300" y="65" font-family="system-ui" font-size="14" fill="%23ffffff" text-anchor="middle" dominant-baseline="middle"%3EWeb Design%3C/text%3E%3Crect x="80" y="100" width="440" height="30" fill="%234f94ff" opacity="0.1" rx="4"/%3E%3Crect x="80" y="150" width="200" height="120" fill="%234f94ff" opacity="0.15" rx="4"/%3E%3Crect x="300" y="150" width="200" height="120" fill="%2310b981" opacity="0.15" rx="4"/%3E%3C/svg%3E',
  
//   branding: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"%3E%3Crect fill="%23fafbff" width="600" height="400"/%3E%3Ccircle cx="150" cy="120" r="50" fill="%231f3a93" opacity="0.8"/%3E%3Crect x="120" y="200" width="60" height="100" fill="%234f94ff" opacity="0.6"/%3E%3Crect x="280" y="80" width="80" height="80" fill="%2310b981" opacity="0.6"/%3E%3Ctext x="300" y="300" font-family="system-ui" font-size="32" font-weight="bold" fill="%231f3a93" text-anchor="middle" dominant-baseline="middle"%3EBRANDING%3C/text%3E%3Ctext x="300" y="340" font-family="system-ui" font-size="14" fill="%234f94ff" text-anchor="middle" dominant-baseline="middle"%3EComplete Visual Identity%3C/text%3E%3C/svg%3E',
// };

// /**
//  * FAQ Items Data
//  * Easy to extend with additional questions. Each item has a unique ID for tracking.
//  */
// const faqItems: FAQItem[] = [
//   {
//     id: 'logo-price',
//     question: 'What is the price of the Normal Logo?',
//     answer: 'Our Normal Logo design package is priced at $299. This comprehensive package includes unlimited revisions during the design phase, three initial design concepts, a final high-resolution file (300 DPI), and formats in PNG, SVG, and JPG. Perfect for startups and small businesses looking for professional brand identity without breaking the budget.',
//     category: 'logo',
//     icon: <MdDesignServices className="w-5 h-5" />,
//   },
//   {
//     id: 'poster-price',
//     question: 'What is the price of the Normal Poster?',
//     answer: 'Our Normal Poster design service is offered at $249. This includes custom design tailored to your brand and message, print-ready files in multiple formats, unlimited revisions until you\'re satisfied, and design consultation to ensure your vision comes to life. Whether you need promotional posters, event announcements, or informational displays, our team delivers impactful designs optimized for printing.',
//     category: 'poster',
//     icon: <MdDesignServices className="w-5 h-5" />,
//   },
//   {
//     id: 'banner-price',
//     question: 'What is the price of the Normal Banner?',
//     answer: 'Our Normal Banner design package costs $199 and includes responsive web banner design, social media banner variations, print-ready banners for physical displays, and fully editable source files. You\'ll receive designs optimized for different platforms (web, social media, print), unlimited revisions, and fast turnaround times. Perfect for promoting campaigns, events, or seasonal offers.',
//     category: 'banner',
//     icon: <MdDesignServices className="w-5 h-5" />,
//   },
//   {
//     id: 'web-design',
//     question: 'What services are included in web design?',
//     answer: 'Our web design services include responsive UI/UX design, mobile-first approach, interactive prototypes, unlimited revisions, and modern design frameworks. We create visually stunning and user-friendly websites that convert visitors into customers. Each project includes consultation, competitor analysis, wireframes, and final design deliverables in multiple formats.',
//     category: 'web',
//     icon: <MdDesignServices className="w-5 h-5" />,
//   },
//   {
//     id: 'branding-package',
//     question: 'What does a complete branding package include?',
//     answer: 'Our premium branding package includes logo design, brand guidelines, color palette development, typography selection, business card design, letterhead design, email signature, and brand story consultation. This comprehensive service ensures consistency across all your marketing materials and creates a memorable brand identity that resonates with your target audience.',
//     category: 'branding',
//     icon: <MdDesignServices className="w-5 h-5" />,
//   },
// ];

// /**
//  * FAQSection Component
//  * 
//  * A modern, production-ready FAQ component with:
//  * - Two-column responsive layout
//  * - Hover-based question selection
//  * - Smooth Framer Motion animations
//  * - Dynamic image switching by category
//  * - Fully accessible TypeScript implementation
//  * - Tailwind CSS styling with premium design
//  */
// export default function FAQSection() {
//   const [activeId, setActiveId] = useState<string>(faqItems[0].id);
//   const activeFAQ = faqItems.find((item) => item.id === activeId) || faqItems[0];

//   return (
//     <section className="min-h-screen mt-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 py-16 sm:px-6 lg:px-8">
//       {/* Container */}
//       <div className="mx-auto max-w-7xl">
//         {/* Header */}
//         <div className="mb-16 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-4">
//               Frequently Asked Questions
//             </h2>
//             <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
//               Find answers to common questions about our design services, pricing, and deliverables. 
//               Hover over any question to explore detailed information.
//             </p>
//           </motion.div>
//         </div>

//         {/* Main Grid Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
//           {/* Left Column - Questions List */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             viewport={{ once: true }}
//             className="space-y-4"
//           >
//             {faqItems.map((item, index) => (
//               <motion.div
//                 key={item.id}
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 onMouseEnter={() => setActiveId(item.id)}
//                 className={`relative group cursor-pointer`}
//               >
//                 {/* Question Card */}
//                 <motion.div
//                   className={`relative px-6 py-5 rounded-lg transition-all duration-300 ${
//                     activeId === item.id
//                       ? 'bg-white shadow-lg border-l-4 border-blue-600'
//                       : 'bg-white bg-opacity-60 border-l-4 border-transparent hover:bg-white hover:shadow-md'
//                   }`}
//                   whileHover={{ scale: 1.02, x: 8 }}
//                   transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//                 >
//                   {/* Animated Border Glow on Hover */}
//                   {activeId === item.id && (
//                     <motion.div
//                       className="absolute inset-0 rounded-lg pointer-events-none"
//                       layoutId="activeGlow"
//                       transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//                       style={{
//                         boxShadow: '0 0 30px rgba(37, 99, 235, 0.2)',
//                       }}
//                     />
//                   )}

//                   {/* Content */}
//                   <div className="relative z-10 flex items-start gap-4">
//                     {/* Icon */}
//                     <motion.div
//                       className={`flex-shrink-0 w-6 h-6 mt-1 transition-all duration-300 ${
//                         activeId === item.id ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-500'
//                       }`}
//                       animate={{
//                         rotate: activeId === item.id ? 360 : 0,
//                         scale: activeId === item.id ? 1.2 : 1,
//                       }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       {item.icon}
//                     </motion.div>

//                     {/* Question Text */}
//                     <div className="flex-1 min-w-0">
//                       <h3
//                         className={`text-base sm:text-lg font-semibold transition-all duration-300 ${
//                           activeId === item.id ? 'text-slate-900' : 'text-slate-700'
//                         }`}
//                       >
//                         {item.question}
//                       </h3>
//                     </div>

//                     {/* Chevron Icon */}
//                     <motion.div
//                       className={`flex-shrink-0 transition-all duration-300 ${
//                         activeId === item.id ? 'text-blue-600' : 'text-slate-300'
//                       }`}
//                       animate={{
//                         x: activeId === item.id ? 4 : 0,
//                         rotate: activeId === item.id ? 90 : 0,
//                       }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <FiChevronRight className="w-5 h-5" />
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Right Column - Answer & Image Panel */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="sticky top-6 hidden lg:block"
//           >
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeFAQ.id}
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -20 }}
//                 transition={{ duration: 0.4, ease: 'easeInOut' }}
//                 className="space-y-6"
//               >
//                 {/* Image Container */}
//                 <div className="relative overflow-hidden rounded-lg shadow-lg bg-white border border-slate-200">
//                   <motion.img
//                     key={`${activeFAQ.id}-image`}
//                     src={categoryImages[activeFAQ.category]}
//                     alt={activeFAQ.question}
//                     className="w-full h-auto aspect-video object-cover"
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.95 }}
//                     transition={{ duration: 0.4 }}
//                   />
//                   {/* Image Overlay Gradient */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
//                 </div>

//                 {/* Answer Text Container */}
//                 <motion.div
//                   className="bg-white rounded-lg p-6 shadow-md border border-slate-100"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.4, delay: 0.1 }}
//                 >
//                   {/* Category Badge */}
//                   <motion.div
//                     className="inline-block mb-3"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.3, delay: 0.2 }}
//                   >
//                     <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full capitalize">
//                       {activeFAQ.category}
//                     </span>
//                   </motion.div>

//                   {/* Question Heading */}
//                   <motion.h3
//                     className="text-xl sm:text-2xl font-bold text-slate-900 mb-4"
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.4, delay: 0.15 }}
//                   >
//                     {activeFAQ.question}
//                   </motion.h3>

//                   {/* Answer Text */}
//                   <motion.p
//                     className="text-slate-700 leading-relaxed font-light text-base"
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.4, delay: 0.2 }}
//                   >
//                     {activeFAQ.answer}
//                   </motion.p>

//                   {/* Divider */}
//                   <motion.div
//                     className="mt-6 pt-6 border-t border-slate-100"
//                     initial={{ scaleX: 0 }}
//                     animate={{ scaleX: 1 }}
//                     transition={{ duration: 0.4, delay: 0.25 }}
//                     style={{ originX: 0 }}
//                   />

//                   {/* CTA or Additional Info */}
//                   <motion.div
//                     className="mt-6 flex items-center justify-between"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.4, delay: 0.3 }}
//                   >
//                     <p className="text-sm text-slate-500 font-medium">
//                       Have more questions?
//                     </p>
//                     <motion.button
//                       className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-shadow duration-300"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       Contact Us
//                     </motion.button>
//                   </motion.div>
//                 </motion.div>
//               </motion.div>
//             </AnimatePresence>
//           </motion.div>
//         </div>

//         {/* Mobile Accordion View */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//           viewport={{ once: true }}
//           className="lg:hidden mt-8"
//         >
//           <div className="space-y-4">
//             {faqItems.map((item, index) => (
//               <motion.details
//                 key={item.id}
//                 className="group border border-slate-200 rounded-lg overflow-hidden cursor-pointer"
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: index * 0.05 }}
//                 viewport={{ once: true }}
//               >
//                 <motion.summary
//                   className="px-6 py-4 bg-white hover:bg-slate-50 transition-colors duration-200 flex items-center justify-between cursor-pointer select-none"
//                   whileHover={{ backgroundColor: '#f8fafc' }}
//                 >
//                   <span className="text-base font-semibold text-slate-900 flex items-center gap-3">
//                     <span className="text-blue-600">{item.icon}</span>
//                     {item.question}
//                   </span>
//                   <motion.span
//                     className="text-slate-500 group-open:text-blue-600 transition-colors"
//                     animate={{ rotate: 0 }}
//                     whileInView={{ rotate: 180 }}
//                   >
//                     <FiChevronRight className="w-5 h-5" />
//                   </motion.span>
//                 </motion.summary>

//                 <motion.div
//                   className="px-6 py-4 bg-slate-50 border-t border-slate-200"
//                   initial={{ opacity: 0, height: 0 }}
//                   whileInView={{ opacity: 1, height: 'auto' }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <motion.img
//                     src={categoryImages[item.category]}
//                     alt={item.question}
//                     className="w-full rounded-lg mb-4 shadow-md"
//                   />
//                   <p className="text-slate-700 leading-relaxed font-light mb-3">
//                     {item.answer}
//                   </p>
//                   <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full capitalize">
//                     {item.category}
//                   </span>
//                 </motion.div>
//               </motion.details>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

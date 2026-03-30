// src/components/Owners.tsx
'use client';
import { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import Image from 'next/image';

const owners = [
  {
    name: 'Muhammad Zeeshan',
    role: 'Co-Founder & Creative Director',
    desc: 'Specializes in graphic design, digital marketing, and Google Maps optimization.',
    img: 'https://res.cloudinary.com/dqjp2xwje/image/upload/v1774335831/company-website/jhds2njgdx9nlpcemqol.jpg',
    details: 'With over 8 years of experience in creative direction and digital marketing, Muhammad Zeeshan has led multiple successful campaigns and brand transformations. His expertise spans graphic design, UI/UX, and strategic Google Maps optimization, helping businesses significantly improve their online visibility. He is passionate about turning creative ideas into impactful digital solutions.',
    expertise: ['Graphic Design', 'Digital Marketing', 'Brand Strategy', 'Google Maps SEO', 'Social Media Marketing'],
  },
  {
    name: 'Muhammad Adrees',
    role: 'Co-Founder & Lead Developer',
    desc: 'Specializes in full-stack software development, modern web applications, and scalable digital solutions.',
    img: 'https://res.cloudinary.com/dqjp2xwje/image/upload/v1774335824/company-website/z34o3noygjp0p3rkveme.jpg',
    details: 'Muhammad Adrees is a full-stack development expert with a strong passion for building scalable and high-performance applications. With expertise in modern web technologies and cloud architecture, he has developed numerous successful digital products. His technical excellence combined with a user-focused approach ensures that every solution delivers real value to users.',
    expertise: ['Full-Stack Development', 'React & Next.js', 'Backend Architecture', 'Cloud Solutions', 'Database Design'],
  },
];

const Owners = () => {
  const [selectedOwner, setSelectedOwner] = useState<typeof owners[0] | null>(null);

  return (
    <section className="relative py-20 px-5 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-1/4 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40 animate-float-blob" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30 animate-float-blob" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-smooth-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-linear-to-r from-blue-600 via-blue-600 to-blue-700 bg-clip-text text-transparent">
            Owners & Founders
          </h2>
          <div className="w-16 h-1 bg-linear-to-r from-blue-500 to-blue-600 mx-auto rounded-full" />
          <p className="text-gray-600 mt-4 text-lg">
            Meet the visionaries behind our success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {owners.map((owner, idx) => (
            <div key={idx} className="group relative" data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="absolute inset-0 bg-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              <div className="relative bg-card border border-border rounded-3xl p-8 sm:p-10 text-center shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <div className="relative inline-block mb-8">
                  <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-blue-500 scale-125 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full border-4 border-blue-600 shadow-xl overflow-hidden group-hover:scale-110 transition-transform duration-500">
                    <Image
                      src={owner.img} 
                      alt={owner.name} 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full p-3 shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-500">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{owner.name}</h3>
                <div className="inline-block mb-4 px-4 py-1.5 bg-linear-to-r from-blue-600 to-blue-700 text-white rounded-full">
                  <p className="text-xs sm:text-sm font-bold tracking-wider uppercase">{owner.role}</p>
                </div>
                <p className="leading-relaxed mb-8 text-sm sm:text-base">{owner.desc}</p>
                <button
                  onClick={() => setSelectedOwner(owner)}
                  className="inline-flex items-center justify-center w-12 h-12 bg-linear-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-110 active:scale-95 mx-auto group/btn"
                  aria-label={`Learn more about ${owner.name}`}
                >
                  <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedOwner && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-fade-in" onClick={() => setSelectedOwner(null)}>
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative bg-card border border-border rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-modal-slide-up" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedOwner(null)} className="absolute top-6 right-6 z-10 w-10 h-10 bg-background hover:bg-muted text-foreground rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95">
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 sm:p-12">
              <div className="flex flex-col sm:flex-row items-start gap-8 mb-8 pb-8 border-b border-border">
                <div className="shrink-0 mx-auto sm:mx-0">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32">
                    <Image
                      src={selectedOwner.img}
                      alt={selectedOwner.name}
                      fill
                      className="object-cover rounded-2xl border-4 border-blue-600 shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      ✓
                    </div>
                  </div>
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                    {selectedOwner.name}
                  </h2>
                  <div className="inline-block px-4 py-2 bg-linear-to-r from-blue-600 to-blue-700 text-white rounded-full mb-4">
                    <p className="text-sm font-bold tracking-wider uppercase">
                      {selectedOwner.role}
                    </p>
                  </div>
                  <p className="text-muted text-sm leading-relaxed">
                    {selectedOwner.desc}
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                  About
                </h3>
                <p className="text-foreground/80 leading-relaxed text-base">
                  {selectedOwner.details}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                  Core Expertise
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedOwner.expertise.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 bg-blue-500/5 rounded-xl border border-border"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full shrink-0" />
                      <span className="text-foreground/80 font-medium">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedOwner(null)}
                className="w-full mt-8 py-3 px-6 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Owners;
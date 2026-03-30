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
      <div className="absolute top-0  left-0 right-0 h-1 bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Why Choose Us
          </h2>

          <p className="mt-6 text-lg text-foreground/70 leading-relaxed">
            With over 12 years of experience, we are a fully digital team focused on building modern software solutions. We may not have a physical office, but we deliver high-quality work online.

            We don’t just write code we create complete solutions, working closely with our clients to understand their needs and solve real problems.
          </p>

          <p className="mt-4 text-foreground/70">
            For us, every project is personal, and every solution is built with passion, care, and attention to detail.
          </p>

          {/* SERVICES LIST */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {servicesList.map((service, index) => (
              <div key={index} className="flex  items-center gap-3">
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
            src="/images/why-you-choose-us_img-.jpg" // 👉 put your image in public/images
            alt="Why Choose Us"
            fill
            className="object-center rounded-3xl shadow-lg"
          />
        </div>

      </div>
      <div className="absolute bottom-0  left-0 right-0 h-1 bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-50" />

    </section>

  );
};

export default WhyChooseUs;
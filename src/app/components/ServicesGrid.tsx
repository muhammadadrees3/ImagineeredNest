"use client";

import Link from "next/link";
import { Code, Palette, ArrowRight, Pen, PenTool, Monitor, MonitorSmartphoneIcon, Smartphone, MonitorCheckIcon, WallpaperIcon, LocateIcon, MapPin, MapPinned } from "lucide-react";

const services = [
  {
    category: "Creative Designing",
    description:
      "We craft visually stunning and user-focused designs that enhance user experience and brand identity.",
    services: [
      {
        icon: MonitorSmartphoneIcon,
        title: "UI/UX Design",
        desc: "We design intuitive and user-friendly interfaces that improve user engagement and experience.",
        link: "/services/ui-ux-design",
      },
      {
        icon: PenTool,
        title: "Graphic Design",
        desc: "We create eye-catching graphics, branding materials, and visual content for your business.",
        link: "/services/graphic-design",
      },
    ],
  },
  {
    category: "Development",
    description:
      "We build scalable, high-performance mobile, web and desktop applications tailored to your business needs.",
    services: [
      {
        icon: Smartphone,
        title: "App Development",
        desc: "We craft powerful mobile experiences for iOS, Android, and cross-platform solutions.",
        link: "/services/app-development",
      },
      {
        icon: WallpaperIcon,
        title: "Web Development",
        desc: "We build high quality, user focused websites, from simple pages to complex web applications.",
        link: "/services/web-development",
      },
        {
        icon: MonitorCheckIcon,
        title: "Dextop Development",
        desc: "We craft powerful mobile experiences for iOS, Android, and cross-platform solutions.",
        link: "/services/app-development",
      },
    ],
  },
   {
    category: "Business Location",
    description:
      "We help you establish your business in the digital world.",
    services: [
      {
        icon: MapPinned,
        title: "Google Business Setup",
        desc: "We craft powerful Google Business Profile for your business.",
        link: "/services/google-business-setup",
      }
    ],
  },
];

const ServicesGrid = () => {

  return (
    <section id="services" className="py-20 px-5">
      <h2
        className="section-title-in-light">
        Our Services
      </h2>

      <div className="max-w-7xl mx-auto space-y-14">
        {services.map((group, groupIndex) => (
          <div key={groupIndex} className="space-y-6">
            <div className="text-left">
              <h3 className="text-xl md:text-2xl  font-bold text-foreground">
                {group.category}
              </h3>
              <p className="mt-3 text-foreground/70 w-full    leading-relaxed">
                {group.description}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {group.services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <div
                    key={index}
                    className="group bg-white text-black border-2 border-blue-400  rounded-3xl md:p-8  p-3 hover:shadow-custom hover:-translate-y-2 transition-all duration-300"
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary transition-colors duration-300">
                      <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>

                    <h4 className="text-sm font-bold mb-4 text-foreground">
                      {service.title}
                    </h4>

                    <p className="text-foreground/70 mb-6 md:flex   hidden leading-relaxed">
                      {service.desc}
                    </p>

                    <Link
                      href={service.link}
                      className="inline-flex items-center md:text-sm text-xs gap-2 text-primary font-bold hover:gap-3 transition-all underline underline-offset-4"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
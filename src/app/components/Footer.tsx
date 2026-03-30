'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Facebook, Instagram, PhoneCall, Phone, Mail, X } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border  bg-blue-900  pt-20 pb-10 px-5 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className='flex flex-col gap-6 bg-white  rounded-xl p-4 '>
          <Link href="/" className="flex rounded-lg p-2 items-center  bg-blue-900  gap-2 group">
            <div className="relative h-14 w-14">
              <Image
                src="/images/whitelogo.png"
                alt="Imagineerednest"
                fill
                className="object-contain drop-shadow-sm scale-110 transition"
              />
            </div>
            <span className="text-white font-bold text-xl tracking-tight">Imagineerednest</span>
          </Link>
          <p className=" leading-relaxed text-justify ">
            Two brothers building software, design, and courses quality work, honest pricing, and hands‑on mentorship.
          </p>
          <div className="flex w-full justify-between items-center gap-4">
            <a href="#" aria-label="LinkedIn" className="w-10 h-10 flex items-center justify-center rounded-xl bg-white text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all duration-300">
              <Linkedin className="w-5 h-5" aria-hidden="true" />
            </a>
            <a href="#" aria-label="X" className="w-10 h-10 flex items-center justify-center rounded-xl bg-white text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all duration-300">
              <X className="w-5 h-5" aria-hidden="true" />
            </a>
            <a href="#" aria-label="Facebook" className="w-10 h-10 flex items-center justify-center rounded-xl bg-white text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all duration-300">
              <Facebook className="w-5 h-5" aria-hidden="true" />
            </a>
            <a href="#" aria-label="Instagram" className="w-10 h-10 flex items-center justify-center rounded-xl bg-white text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all duration-300">
              <Instagram className="w-5 h-5" aria-hidden="true" />
            </a>

          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-white rounded-full"></span>
            Quick Links
          </h4>
          <div className="flex flex-col gap-3 ">
            <Link href="/" className="hover:text-gray-300 text-white hover:translate-x-1 transition-all">Home</Link>
            <Link href="/about" className="hover:text-gray-300 text-white hover:translate-x-1 transition-all">About Us</Link>
            <Link href="/contact" className="hover:text-gray-300 text-white hover:translate-x-1 transition-all">Contact Us</Link>
            <Link href="/portfolio" className="hover:text-gray-300 text-white hover:translate-x-1 transition-all">Portfolio</Link>
            <Link href="/blog" className="hover:text-gray-300 text-white hover:translate-x-1 transition-all">Blog</Link>
            <Link href="/faq" className="hover:text-gray-300 text-white hover:translate-x-1 transition-all">FAQ</Link>
            <Link href="/privacy-policy" className="hover:text-gray-300 text-white hover:translate-x-1 transition-all">Privacy Policy</Link>
            {/* <Link href="/courses" className="hover:text-gray-300 text-white hover:translate-x-1 transition-all">Our Courses</Link> */}
          </div>
        </div>

        {/* Services Dropdown - Simplified for footer */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-white rounded-full"></span>
            Our Expertise
          </h4>
          <div className="flex flex-col gap-3">
            <Link href="/services/ui-ux-design" className="hover:text-gray-300 text-white hover:translate-x-1 transition-all">UI/UX Design</Link>
            <Link href="/services/graphic-design" className="hover:text-gray-300 text-white hover:translate-x-1 transition-all">Graphic Design</Link>
            <Link href="/services/web-development" className="hover:text-gray-300 text-white hover:translate-x-1 transition-all">Web Development</Link>
            <Link href="/services/app-development" className="hover:text-gray-300 text-white hover:translate-x-1 transition-all">App Development</Link>
            <Link href="/services/desktop-application" className="hover:text-gray-300 text-white hover:translate-x-1 transition-all">Desktop Application</Link>
            {/* Coming soon */}
            {/* <Link href="/services/seo" className="hover:text-gray-300 text-white hover:translate-x-1 transition-all">SEO Optimization</Link> */}
            {/* <Link href="/services/digital-marketing" className="hover:text-gray-300 text-white hover:translate-x-1 transition-all">Digital Marketing</Link> */}
            <Link href="/services/google-maps" className="hover:text-gray-300 text-white hover:translate-x-1 transition-all">Google business setup</Link>
          </div>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-white rounded-full"></span>
            Get In Touch
          </h4>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3 group">
              <div className="w-10 h-10 flex  items-center justify-center rounded-xl bg-white text-primary border border-border group-hover:bg-primary group-hover:text-white transition-all">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className='text-xs text-white'>Call us at</p>
                <p className="text-white font-semibold">+92 3480550152</p>
              </div>
            </div>
            <div className="flex items-start gap-3 group">
              <div className="w-10 h-10 flex p-3 items-center justify-center rounded-xl bg-white text-primary border border-border group-hover:bg-primary group-hover:text-white transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className={`text-xs text-white`}>Email support</p>
                <a href="mailto:ImagineeredNest@gmail.com" className="text-white font-semibold">ImagineeredNest@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center pt-8 border-t border-border flex md:justify-between justify-center items-center gap-2 flex-wrap " >
        <p className="text-white text-sm tracking-wide">
          &copy; 2025 - {new Date().getFullYear()}, All rights reserved | Design & Develop by <Link href="./#home" className="text-white  font-bold ">ImagineereNest,</Link> Pakistan
        </p>
        <div className='flex justify-center gap-4  md:mr-10'>
          <Link href="/privacy-policy" className="text-white text-sm tracking-wide ">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

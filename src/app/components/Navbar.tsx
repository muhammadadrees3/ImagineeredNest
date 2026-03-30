// src/components/Navbar.tsx
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef, lazy } from 'react';
import { usePathname } from 'next/navigation';
import {
  Globe, Smartphone, Monitor,
  Pen, Image as ImageIcon, Layout,
  BarChart2, Megaphone, Share2,
  MapPin, Building2, ArrowRight, Zap,
  ChevronDown, Sun, Moon, Menu, X as CloseIcon
} from 'lucide-react';
const Home = lazy(() => import('../page',));


const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close DESKTOP dropdown when clicking outside
  // NOTE: skip entirely when mobile menu is open — the mobile submenu is closed
  // by the pathname useEffect below, and running this early unmounts Links before
  // the click event fires which prevents navigation on mobile.
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen) return;                // ← key guard
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  // Smart Hide Navbar on scroll
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if we've scrolled down a bit to make navbar "small"
      setIsScrolled(currentScrollY > 40);

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100 && !mobileMenuOpen && !servicesDropdownOpen) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen, servicesDropdownOpen]);

  return (
    <nav className={`fixed bg-blue-900 w-full  top-0  left-0 z-50 flex  justify-between items-center transition-all duration-500 ease-in-out px-5 md:px-10 border-b overflow-visible ${isVisible ? 'translate-y-0 ' : '-translate-y-[120%] '
      } ${isScrolled
        ? `h-16 shadow-md border-border backdrop-blur-xl`
        : `h-20 border-transparent backdrop-blur-md  `
      }`}>
      <Link href="/" className="flex items-center gap-2 group">
        <div className={`relative rounded-xl transition-all duration-300 flex ${isScrolled ? 'h-10 w-10' : 'h-12 w-12 md:h-14 md:w-14'}`}>
          <Image
            src="/images/whitelogo.png"
            alt="ImagineeredNest"
            width={700}
            height={700}
            className="object-contain drop-shadow-sm scale-125 transition duration-300 "

          />
        </div>
        <span className="text-xl ml-2 font-bold text-white">ImagineeredNest</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8 p-3 rounded-xl">
        
        <Link href="/" className={`font-medium transition ${pathname === '/' ? ' hover:text-primary bg-white text-primary rounded-xl p-2' : 'text-white hover:text-primary'}`}>Home</Link>
        <Link href="/about" className={`font-medium transition ${pathname === '/about' ? ' hover:text-primary bg-white text-primary rounded-xl p-2' : 'text-white hover:text-primary'}`}>About Us</Link>
        <Link href="/contact" className={`font-medium transition ${pathname === '/contact' ? ' hover:text-primary bg-white text-primary rounded-xl p-2' : 'text-white/90 hover:text-primary'}`}>Contact Us</Link>

        {/* Services Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
            className={`flex items-center cursor-pointer gap-1 font-medium transition ${pathname.startsWith('/services') ? ' hover:text-primary bg-white text-primary rounded-xl p-2' : 'text-white/90 hover:text-primary'}`}
          >
            Services
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          {servicesDropdownOpen && (
            <div className="absolute top-[calc(100%+1.6rem)] -left-[200px] -translate-x-1/2 bg-card rounded-bl-2xl shadow-2xl border border-border w-[1000px] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="grid grid-cols-12">

                {/* Links Section */}
                <div className="col-span-8 p-8 grid grid-cols-2 gap-x-8 gap-y-10">

                  {/* Development */}
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">Development</h4>
                    <div className="space-y-4">
                      {[
                        { label: 'Web Development', href: '/services/web-development', Icon: Globe },
                        { label: 'App Development', href: '/services/app-development', Icon: Smartphone },
                        { label: 'Desktop Development', href: '/services/desktop-development', Icon: Monitor },
                      ].map(({ label, href, Icon }) => (
                        <Link key={label} href={href} className="group flex items-center gap-4 transition-all">
                          <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 transition-all ${pathname === href
                              ? 'bg-primary/10 border-primary/40'
                              : 'bg-secondary/5 border-border group-hover:border-primary/30 group-hover:bg-primary/5'
                            }`}>
                            <Icon className={`w-5 h-5 transition-colors ${pathname === href ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'}`} />
                          </div>
                          <div>
                            <p className={`text-sm font-semibold transition-colors ${pathname === href ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>{label}</p>
                            <p className="text-[11px] text-muted-foreground leading-tight">High-performance solutions</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Design */}
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">Creative Design</h4>
                    <div className="space-y-4">
                      {[
                        { label: 'UI/UX Design', href: '/services/design', Icon: Layout },
                        { label: 'Graphic Design', href: '/services/graphic-design', Icon: ImageIcon },
                        // { label: 'Brand Identity', href: '/services/branding', Icon: Pen },
                      ].map(({ label, href, Icon }) => (
                        <Link key={label} href={href} className="group flex items-center gap-4 transition-all">
                          <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 transition-all ${pathname === href
                              ? 'bg-primary/10 border-primary/40'
                              : 'bg-secondary/5 border-border group-hover:border-primary/30 group-hover:bg-primary/5'
                            }`}>
                            <Icon className={`w-5 h-5 transition-colors ${pathname === href ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'}`} />
                          </div>
                          <div>
                            <p className={`text-sm font-semibold transition-colors ${pathname === href ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>{label}</p>
                            <p className="text-[11px] text-muted-foreground leading-tight">Visual excellence</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Marketing */}
                  {/* <div className="pt-2  border-t border-border">
                    <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6 mt-6">Marketing</h4>
                    <div className="space-y-4">
                      {[
                        { label: 'SEO Strategies', href: '/services/seo', Icon: BarChart2 },
                        { label: 'Content Growth', href: '/services/marketing', Icon: Megaphone },
                      ].map(({ label, href, Icon }) => (
                        <div key={label} className='relative'>
                              <p className=' absolute top-0 right-0 bg-primary text-white px-2 py-1 rounded-full text-[11px] text-muted-foreground leading-tight'>Coming soon</p> 
                        <div className="group opacity-40 cursor-default flex items-center gap-4 transition-all">
                          <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 transition-all ${
                            pathname === href 
                              ? 'bg-primary/10 border-primary/40' 
                              : 'bg-secondary/5 border-border'
                          }`}>
                            <Icon className={`w-5 h-5 transition-colors ${pathname === href ? 'text-primary' : 'text-muted-foreground'}`} />
                          </div>
                          <div>
                            <p className={`text-sm font-semibold transition-colors ${pathname === href ? 'text-primary' : 'text-foreground'}`}>{label}</p>
                            <p className="text-[11px] text-muted-foreground leading-tight">Data-driven results</p>
                          </div>
                        </div>
                        </div>
                      ))}
                    </div>
                  </div> */}

                  {/* Local */}
                  <div className="pt-2 border-t border-border ">
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6 mt-6">Local Presence</h4>
                      <div className="space-y-4">
                        {[
                          // { label: 'Location SEO', href: '/services/local-presence', Icon: MapPin },
                          { label: 'Local Business', href: '/services/google-maps', Icon: Building2 },
                          // { label: 'Brand Identity', href: '/services/branding', Icon: Pen },
                        ].map(({ label, href, Icon }) => (
                          <Link key={label} href={href} className="group flex items-center gap-4 transition-all">
                            <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 transition-all ${pathname === href
                                ? 'bg-primary/10 border-primary/40'
                                : 'bg-secondary/5 border-border group-hover:border-primary/30 group-hover:bg-primary/5'
                              }`}>
                              <Icon className={`w-5 h-5 transition-colors ${pathname === href ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'}`} />
                            </div>
                            <div>
                              <p className={`text-sm font-semibold transition-colors ${pathname === href ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>{label}</p>
                              <p className="text-[11px] text-muted-foreground leading-tight">Visual excellence</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                    {/* <div className="space-y-4">
                      {[
                        // { label: 'Location SEO', href: '/services/local-presence', Icon: MapPin },
                        { label: 'Local Business', href: '/services/google-maps', Icon: Building2 },
                      ].map(({ label, href, Icon }) => (
                        
                        <div key={label} className='relative '>
                              <p className='  absolute top-0 right-0 bg-primary text-white px-2 py-1 rounded-full text-[11px] leading-tight'>Coming soon</p> 
                        <div className="group opacity-40 cursor-default flex items-center gap-4 transition-all">
                          <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 transition-all ${
                            pathname === href 
                              ? 'bg-primary/10 border-primary/40' 
                              : 'bg-secondary/5 border-border'
                          }`}>
                            <Icon className={`w-5 h-5 transition-colors ${pathname === href ? 'text-primary' : 'text-muted-foreground'}`} />
                          </div>
                          <div>
                            <p className={`text-sm font-semibold transition-colors ${pathname === href ? 'text-primary' : 'text-foreground'}`}>{label}</p>
                            <p className="text-[11px] text-muted-foreground leading-tight">Map & search visibility</p>
                          </div>
                        </div>
                        </div>
                      ))}
                    </div> */}

                  </div>
                </div>

                {/* CTA / Right Section */}
                <div className="col-span-4 bg-secondary/5 border-l border-border p-8 flex flex-col justify-between">
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-6">Expertise</h4>
                    <p className="text-sm text-foreground/80 mb-6 leading-relaxed">
                      We help you build, scale and maintain high-quality digital products with modern engineering.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Built with modern technologies
                      </div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Premium UI/UX Design
                      </div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        SEO Optimized Content
                      </div>
                    </div>
                  </div>

                  <Link href="/contact" className="mt-8 group block p-5 rounded-2xl bg-primary text-white shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <Zap className="w-5 h-5 text-primary-foreground/80" />
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <p className="font-bold text-sm">Start Your Journey</p>
                    <p className="text-[10px] text-primary-foreground/70">Consult with us today</p>
                  </Link>
                </div>

              </div>
            </div>
          )}
        </div>

        <Link href="/portfolio" className={`font-medium transition ${pathname === '/portfolio' ? ' hover:text-primary bg-white text-primary rounded-xl p-2' : 'text-white/90 hover:text-primary'}`}>Portfolio</Link>
        {/* <Link href="/courses" className={`font-medium transition ${pathname === '/courses' ? 'text-primary' : 'text-white/90 hover:text-primary'}`}>Courses</Link> */}
        <Link href="/blog" className={`font-medium transition ${pathname === '/blog' ? ' hover:text-primary bg-white text-primary rounded-xl p-2' : 'text-white/90 hover:text-primary'}`}>Blog</Link>

      </div>

      {/* Mobile Hamburger */}
      <button className=" md:hidden text-2xl text-white " onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}>
        {mobileMenuOpen ? <CloseIcon className="w-8 h-8" aria-hidden="true" /> : <Menu className="w-8 h-8" aria-hidden="true" />}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`fixed left-0 w-full bg-card p-6 flex flex-col gap-4 shadow-2xl md:hidden border-b border-border animate-in slide-in-from-top z-40 overflow-y-auto transition-all duration-300 ${isScrolled ? 'top-16 max-h-[calc(100vh-4rem)]' : 'top-20 max-h-[calc(100vh-5rem)]'}`}>
          <Link href="/" className={`py-2 px-4 rounded-xl font-semibold text-lg transition-all ${pathname === '/' ? 'bg-white text-primary shadow-sm' : 'text-foreground hover:text-primary border-b border-border'}`}>Home</Link>
          <Link href="/about" className={`py-2 px-4 rounded-xl font-semibold text-lg transition-all ${pathname === '/about' ? 'bg-white text-primary shadow-sm' : 'text-foreground hover:text-primary border-b border-border'}`}>About Us</Link>
          <Link href="/contact" className={`py-2 px-4 rounded-xl font-semibold text-lg transition-all ${pathname === '/contact' ? 'bg-white text-primary shadow-sm' : 'text-foreground hover:text-primary border-b border-border'}`}>Contact</Link>

          {/* <Link href="/contact" className={`font-medium transition ${pathname === '/contact' ? 'text-primary' : 'text-white/90 hover:text-primary'}`}>Contact Us</Link> */}

          <div className="py-2 border-b border-border rounded-2xl pl-4">
            <button onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)} className="flex items-center justify-between w-full font-semibold text-lg text-foreground hover:text-primary transition-colors">
              Services
              <ChevronDown className={`w-5 h-5 absolute right-8  transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesDropdownOpen && (
              <div className="-pl-4 mt-4 space-y-5 animate-in slide-in-from-top-2 duration-300">
                  <div>
                  <h5 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Creative Design</h5>
                  <div className="flex flex-col">
                    <Link href="/services/design" className={`block py-2.5 px-2 rounded-lg text-sm font-medium transition-colors ${pathname === '/services/design' ? 'text-primary bg-primary/5' : 'text-foreground/80 hover:text-primary hover:bg-primary/5'}`}>UI/UX Design</Link>
                    <Link href="/services/graphic-design" className={`block py-2.5 px-2 rounded-lg text-sm font-medium transition-colors ${pathname === '/services/graphic-design' ? 'text-primary bg-primary/5' : 'text-foreground/80 hover:text-primary hover:bg-primary/5'}`}>Graphic Design</Link>
                    {/* <Link href="/services/branding" className={`block py-2.5 px-2 rounded-lg text-sm font-medium transition-colors ${pathname === '/services/branding' ? 'text-primary bg-primary/5' : 'text-foreground/80 hover:text-primary hover:bg-primary/5'}`}>Brand Identity</Link> */}
                  </div>
                </div>
                <div>
                  <h5 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Development</h5>
                  <div className="flex flex-col">
                    <Link href="/services/web-development" className={`block py-2.5 px-2 rounded-lg text-sm font-medium transition-colors ${pathname === '/services/web-development' ? 'text-primary bg-primary/5' : 'text-foreground/80 hover:text-primary hover:bg-primary/5'}`}>Web Development</Link>
                    <Link href="/services/app-development" className={`block py-2.5 px-2 rounded-lg text-sm font-medium transition-colors ${pathname === '/services/app-development' ? 'text-primary bg-primary/5' : 'text-foreground/80 hover:text-primary hover:bg-primary/5'}`}>App Development</Link>
                    <Link href="/services/desktop-development" className={`block py-2.5 px-2 rounded-lg text-sm font-medium transition-colors ${pathname === '/services/desktop-development' ? 'text-primary bg-primary/5' : 'text-foreground/80 hover:text-primary hover:bg-primary/5'}`}>Desktop Development</Link>
                  </div>
                </div>
              
                {/* <div>
                  <h5 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Marketing</h5>
                  <div className="flex flex-col">
                    <div className={`flex items-center justify-between py-2.5 px-2 rounded-lg text-sm font-medium transition-colors opacity-50 cursor-default ${pathname === '/services/seo' ? 'text-primary bg-primary/5' : 'text-foreground/80'}`}>SEO Strategies <span className="text-[9px] bg-primary/20 text-primary px-1.5 py-0.5 rounded-full">Soon</span></div>
                    <div className={`flex items-center justify-between py-2.5 px-2 rounded-lg text-sm font-medium transition-colors opacity-50 cursor-default ${pathname === '/services/marketing' ? 'text-primary bg-primary/5' : 'text-foreground/80'}`}>Content Growth <span className="text-[9px] bg-primary/20 text-primary px-1.5 py-0.5 rounded-full">Soon</span></div>
                  </div>
                </div> */}
                <div>
                  <h5 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Business Location</h5>
                  <div className="flex flex-col">
                    <Link href="/services/google-maps" className={`flex items-center justify-between py-2.5 px-2 rounded-lg text-sm font-medium transition-colors  cursor-default ${pathname === '/services/google-maps' ? 'text-primary bg-primary/5' : 'text-foreground/80'}`}>Google Business Setup </Link>
                    {/* <div className={`flex items-center justify-between py-2.5 px-2 rounded-lg text-sm font-medium transition-colors opacity-50 cursor-default ${pathname === '/services/google-maps' ? 'text-primary bg-primary/5' : 'text-foreground/80'}`}>Local Business <span className="text-[9px] bg-primary/20 text-primary px-1.5 py-0.5 rounded-full">Soon</span></div> */}
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link href="/portfolio" className={`py-2 px-4 rounded-xl font-semibold text-lg transition-all ${pathname === '/portfolio' ? 'bg-white text-primary shadow-sm' : 'text-foreground hover:text-primary border-b border-border'}`}>Portfolio</Link>
          {/* <Link href="/courses" className={`py-2 font-semibold text-lg border-b border-border transition-colors ${pathname === '/courses' ? 'text-primary' : 'text-foreground hover:text-primary'}`}>Courses</Link> */}
          <Link href="/blog" className={`py-2 px-4 rounded-xl font-semibold text-lg transition-all ${pathname === '/blog' ? 'bg-white text-primary shadow-sm' : 'text-foreground hover:text-primary border-b border-border'}`}>Blog</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
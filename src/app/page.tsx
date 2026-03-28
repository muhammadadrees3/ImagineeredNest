import Hero from '@/app/components/Hero';
import LogoMarquee from '@/app/components/LogoMarquee';
import ServicesGrid from '@/app/components/ServicesGrid';
import WhyChooseUs from '@/app/components/WhyChooseUs';
import Counter from './components/Counter';

export default function Home() {
  return (
    <>
      <main className="pt-10 overflow-x-hidden">
        <Hero title1="From Zero to" title2="Digital Success" subtitle="We guide your new business every step of the way: Development, UI/UX design, Graphic design, SEO, Digital Marketing" image="https://res.cloudinary.com/dqjp2xwje/image/upload/v1774336752/company-website/images/sample/web-development/hero.jpg" video="https://res.cloudinary.com/dqjp2xwje/video/upload/v1774337489/company-website/images/video.mp4" />
        {/* <Counter/> */}
        {/* <LogoMarquee /> */}
        <ServicesGrid />
        <WhyChooseUs />
        {/* <Owners /> */}
      </main>
    </>
  );
}
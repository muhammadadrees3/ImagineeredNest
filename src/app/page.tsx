import Hero from '@/app/components/Hero';
import LogoMarquee from '@/app/components/LogoMarquee';
import ServicesGrid from '@/app/components/ServicesGrid';
import WhyChooseUs from '@/app/components/WhyChooseUs';
import Counter from './components/Counter';

export default function Home() {
  return (
    <>
      <main className="pt-20 overflow-x-hidden"  id='home'>
        <Hero imageHeight={200} imageWidth={300}  videospeed={0.5} title1="From Zero to" title2="Digital Success" subtitle="We guide your new business every step of the way:  UI/UX design, Graphic design, Development, SEO, Google business setup, Digital Marketing." video="/images/video.webm" />
        {/* <Counter/> */}
        <LogoMarquee />
        <ServicesGrid />
        <WhyChooseUs />
        {/* <Owners /> */}
      </main>
    </>
  );
}
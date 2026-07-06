import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import CTABanner from '@/components/CTABanner';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <About />
      <FAQ />
      <CTABanner />
      <Contact />
      <Footer />
      <JsonLd />
    </main>
  );
}


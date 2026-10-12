import { Background } from '@/components/Background';
import { Builds } from '@/components/Builds';
import { DataReporting } from '@/components/DataReporting';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Nav } from '@/components/Nav';
import { Process } from '@/components/Process';
import { Services } from '@/components/Services';

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-b from-navy-900 to-hero-end text-white">
        <Nav />
        <Hero />
      </div>
      <main>
        <Builds />
        <Services />
        <Process />
        <DataReporting />
        <Background />
      </main>
      <Footer />
    </>
  );
}

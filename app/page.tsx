import { About } from "@/components/About";
import { Authority } from "@/components/Authority";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Results } from "@/components/Results";
import { Services } from "@/components/Services";
import { Speaking } from "@/components/Speaking";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Authority />
        <Services />
        <Results />
        <Speaking />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

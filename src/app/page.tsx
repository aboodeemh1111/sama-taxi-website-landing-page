import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import HowItWorks from "@/components/HowItWorks";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="how-it-works">
          <HowItWorks />
        </section>
      </main>
      <Footer />
    </div>
  );
}

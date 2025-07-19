import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import FemaleDrivers from "@/components/FemaleDrivers";
import JoinDriverTeam from "@/components/JoinDriverTeam";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Download from "@/components/Download";

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
        <section id="download">
          <Download />
        </section>
      </main>
      <Footer />
    </div>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import HowItWorks from "@/components/HowItWorks";

import Footer from "@/components/Footer";
import Download from "@/components/Download";
// import JoinDriverTeam from "@/components/JoinDriverTeam";
import AboutTheApp from "@/components/AboutTheApp";
import FemaleDrivers from "@/components/FemaleDrivers";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <AboutTheApp />
        </section>

        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="female-drivers">
          <FemaleDrivers />
        </section>

        <section id="download">
          <Download />
        </section>
        {/* <section id="join-driver-team">
          <JoinDriverTeam />
        </section> */}
      </main>
      <Footer />
    </div>
  );
}

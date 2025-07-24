import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import Download from "@/components/Download";
import JoinDriverTeam from "@/components/JoinDriverTeam";
import AboutTheApp from "@/components/AboutTheApp";
import FemaleDrivers from "@/components/FemaleDrivers";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <main role="main">
        <section id="home" aria-label="الصفحة الرئيسية">
          <Hero />
        </section>

        <section id="about" aria-labelledby="about-title">
          <AboutTheApp />
        </section>

        <section id="how-it-works" aria-labelledby="how-it-works-title">
          <HowItWorks />
        </section>

        <section id="female-drivers" aria-labelledby="female-drivers-title">
          <FemaleDrivers />
        </section>

        <section id="download" aria-labelledby="download-title">
          <Download />
        </section>

        <section id="join-driver-team" aria-labelledby="join-driver-team-title">
          <JoinDriverTeam />
        </section>
      </main>

      <Footer />
    </div>
  );
}

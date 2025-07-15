import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import FemaleDrivers from "@/components/FemaleDrivers";
import JoinDriverTeam from "@/components/JoinDriverTeam";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <FemaleDrivers />
      <JoinDriverTeam />
      <FinalCTA />
      <Footer />
    </div>
  );
}

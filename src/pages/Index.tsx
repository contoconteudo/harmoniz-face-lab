import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import JourneySection from "@/components/JourneySection";
import BeforeAfterCarousel from "@/components/BeforeAfterCarousel";
import AboutSection from "@/components/AboutSection";
import SimulationSection from "@/components/SimulationSection";
import TechnologySection from "@/components/TechnologySection";
import ProceduresSection from "@/components/ProceduresSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <JourneySection />
      <BeforeAfterCarousel />
      <AboutSection />
      <SimulationSection />
      <TechnologySection />
      <ProceduresSection />
      <CTASection />
      <footer className="py-8 px-6 text-center border-t border-border/30">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Dr. Jonathan Vidal — Cirurgia Facial
        </p>
      </footer>
    </div>
  );
};

export default Index;

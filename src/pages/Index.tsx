import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import JourneySection from "@/components/JourneySection";
import BeforeAfterCarousel from "@/components/BeforeAfterCarousel";
import AboutSection from "@/components/AboutSection";
import SimulationSection from "@/components/SimulationSection";
import TechnologySection from "@/components/TechnologySection";
import ProceduresSection from "@/components/ProceduresSection";
import CTASection from "@/components/CTASection";
import { Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <JourneySection id="journey" />
      <BeforeAfterCarousel />
      <AboutSection />
      <SimulationSection />
      <TechnologySection />
      <ProceduresSection />
      <CTASection />
      <footer className="py-12 px-6 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-b from-gold/30 to-transparent" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Logo */}
          <div className="mb-6">
            <span className="font-serif text-2xl text-foreground">
              Dr. Jonathan <span className="text-gold">Vidal</span>
            </span>
            <p className="text-muted-foreground text-sm mt-2 tracking-widest uppercase">
              Cirurgia Facial Especializada
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold/30" />
            <Heart className="w-4 h-4 text-gold/40" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold/30" />
          </div>

          <p className="text-muted-foreground/60 text-sm">
            © {new Date().getFullYear()} Dr. Jonathan Vidal — Cirurgia Facial
          </p>
          <p className="text-muted-foreground/40 text-xs mt-2">
            CRM-PE 00000 • RQE 00000
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

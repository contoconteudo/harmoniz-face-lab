import heroFace from "@/assets/hero-face.webp";
import { useScrollReveal, revealStyle } from "@/hooks/useScrollReveal";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background com parallax */}
      <div className="absolute inset-0">
        <img
          src={heroFace}
          alt="Harmonia facial"
          className="w-full h-full object-cover opacity-40 scale-105"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        {/* Overlay decorativo */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/20 to-background/80" />
      </div>

      {/* Elementos decorativos de fundo */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-float delay-300" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Badge superior */}
        <div
          style={revealStyle(isVisible, 100)}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass-light border border-gold/20"
        >
          <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
          <span className="text-gold text-xs tracking-widest uppercase">Cirurgia Facial Especializada</span>
        </div>

        <h1 style={revealStyle(isVisible, 200)} className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-tight mb-8">
          Confiança esculpida{" "}
          <span className="gradient-gold-text italic">nos detalhes.</span>
        </h1>

        <p style={revealStyle(isVisible, 350)} className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-4">
          Nem sempre é sobre mudar o rosto. É sobre se sentir bem com você.
        </p>
        <p style={revealStyle(isVisible, 450)} className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Quando surge o desejo de mudar, essa decisão precisa ser feita com calma e segurança.
          Aqui, cada etapa do processo é feita de forma personalizada, aliando tecnologia com
          naturalidade e harmonia, para que seu tratamento seja conduzido com precisão e segurança.
        </p>

        <div style={revealStyle(isVisible, 600)} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/5581992178724?text=estava%20no%20site%20e%20queria%20saber%20mais"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold group relative overflow-hidden"
          >
            <span className="relative z-10">Agendar avaliação personalizada</span>
            <div className="absolute inset-0 animate-shimmer" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          style={revealStyle(isVisible, 750)}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/60"
        >
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import heroFace from "@/assets/hero-face.webp";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
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
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/20 to-background/80" />
      </div>

      {/* Elementos decorativos de fundo */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-float delay-300" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Badge superior — CSS animation, no JS dependency */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass-light border border-gold/20 animate-hero-reveal"
          style={{ animationDelay: '100ms' }}
        >
          <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
          <span className="text-gold text-xs tracking-widest uppercase">Cirurgia Facial Especializada</span>
        </div>

        <h1
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-tight mb-8 animate-hero-reveal"
          style={{ animationDelay: '200ms' }}
        >
          Confiança esculpida{" "}
          <span className="gradient-gold-text italic">nos detalhes.</span>
        </h1>

        <p
          className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-4 animate-hero-reveal"
          style={{ animationDelay: '350ms' }}
        >
          Nem sempre é sobre mudar o rosto. É sobre se sentir bem com você.
        </p>
        <p
          className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10 animate-hero-reveal"
          style={{ animationDelay: '450ms' }}
        >
          Quando surge o desejo de mudar, essa decisão precisa ser feita com calma e segurança.
          Aqui, cada etapa do processo é feita de forma personalizada, aliando tecnologia com
          naturalidade e harmonia, para que seu tratamento seja conduzido com precisão e segurança.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-hero-reveal"
          style={{ animationDelay: '600ms' }}
        >
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
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/60 animate-hero-reveal" style={{ animationDelay: '750ms' }}>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

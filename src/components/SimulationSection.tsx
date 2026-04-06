import { ShieldCheck } from "lucide-react";
import { useScrollReveal, revealStyle } from "@/hooks/useScrollReveal";
import drJonathanOp1 from "@/assets/jonathan-op1.webp";
import drJonathanOp2 from "@/assets/jonathan-op2.webp";

const SimulationSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 relative overflow-hidden bg-gradient-to-b from-navy-light to-light-bg">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">

        {/* ESQUERDA — Texto */}
        <div style={revealStyle(isVisible, 0)}>
          <p className="text-gold text-sm tracking-widest uppercase mb-3">
            Tecnologia 3D
          </p>
          <h2 style={revealStyle(isVisible, 80)} className="font-serif text-3xl md:text-5xl mb-6 leading-tight text-foreground">
            Mais do que imaginar, você pode{" "}
            <span className="gradient-gold-text italic">entender o seu resultado</span>
          </h2>

          <p style={revealStyle(isVisible, 160)} className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Com a tecnologia de escaneamento facial em 2D e 3D, e a simulação virtual,
            conseguimos te mostrar possibilidades reais antes da cirurgia.
          </p>

          <div className="w-20 h-px gradient-gold mb-8" style={revealStyle(isVisible, 200)} />

          <p style={revealStyle(isVisible, 240)} className="text-foreground/80 mb-6 font-medium">
            Isso traz mais segurança, porque:
          </p>
          <ul style={revealStyle(isVisible, 280)} className="space-y-4 mb-10">
            {[
              "Reduz incertezas",
              "Ajuda na tomada de decisão",
              "Alinha expectativas com mais clareza",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-muted-foreground group">
                <div className="w-6 h-6 rounded-sm gradient-gold flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-4 h-4 text-primary-foreground" />
                </div>
                {item}
              </li>
            ))}
          </ul>

          <div style={revealStyle(isVisible, 380)}>
            <a
              href="https://wa.me/5581992178724?text=estava%20no%20site%20e%20queria%20saber%20mais"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-block"
            >
              Agendar avaliação
            </a>
          </div>
        </div>

        {/* DIREITA — Mosaico */}
        <div style={revealStyle(isVisible, 150)} className="relative">
          {/* Grade assimétrica: coluna esquerda alta + coluna direita empilhada */}
          <div className="grid grid-cols-2 grid-rows-[auto_auto] gap-3">

            {/* Imagem 01 — Dr. Jonathan em procedimento (destaque, alta) */}
            <div className="row-span-2 relative overflow-hidden rounded-sm border border-gold/20 group">
                <img
                src={drJonathanOp1}
                alt="Dr. Jonathan Vidal em procedimento cirúrgico"
                className="w-full h-full min-h-[340px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Overlay e cantos decorativos */}
              <div className="absolute top-2 left-2 w-5 h-5 border-t border-l border-gold/40 group-hover:border-gold/70 transition-colors duration-300" />
              <div className="absolute bottom-2 right-2 w-5 h-5 border-b border-r border-gold/40 group-hover:border-gold/70 transition-colors duration-300" />
            </div>

            {/* Imagem 02 — Dr. Jonathan (destaque secundário) */}
            <div className="relative overflow-hidden rounded-sm border border-gold/20 group">
              <img
                src={drJonathanOp2}
                alt="Dr. Jonathan Vidal em procedimento cirúrgico"
                className="w-full h-full min-h-[160px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-gold/30 group-hover:border-gold/60 transition-colors duration-300" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-gold/30 group-hover:border-gold/60 transition-colors duration-300" />
            </div>

            {/* Card de dado — preenche o espaço inferior direito */}
            <div className="relative overflow-hidden rounded-sm border border-gold/15 bg-card/30">
              <div className="h-full min-h-[160px] flex flex-col items-center justify-center gap-1 p-4">
                <span className="font-serif text-4xl gradient-gold-text">10+</span>
                <div className="w-8 h-px gradient-gold my-1" />
                <span className="text-muted-foreground text-[10px] tracking-[0.2em] uppercase text-center">
                  anos de<br />experiência
                </span>
              </div>
              {/* Detalhe geométrico de canto */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-gold/10" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-gold/10" />
            </div>

          </div>

          {/* Linha dourada decorativa lateral */}
          <div className="absolute -left-6 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent hidden md:block" />
        </div>

      </div>
    </section>
  );
};

export default SimulationSection;

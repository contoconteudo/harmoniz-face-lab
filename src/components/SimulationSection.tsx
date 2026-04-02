import scanningImg from "@/assets/3d-scanning.webp";
import { ShieldCheck } from "lucide-react";
import { useScrollReveal, revealStyle } from "@/hooks/useScrollReveal";

const SimulationSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 relative overflow-hidden bg-gradient-to-b from-navy-light to-light-bg">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
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

        {/* Imagem com efeitos */}
        <div style={revealStyle(isVisible, 150)} className="relative group">
          {/* Anéis decorativos giratórios */}
          <div className="absolute -inset-4 rounded-full border border-gold/20 group-hover:border-gold/40 transition-colors duration-500" />
          <div className="absolute -inset-8 rounded-full border border-gold/10" />

          {/* Glow effect */}
          <div className="absolute inset-0 bg-gold/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative overflow-hidden rounded-sm bg-light-surface border border-gold/10">
            <img
              src={scanningImg}
              alt="Escaneamento facial 3D"
              className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              width={800}
              height={800}
            />
            {/* Overlay com scan line */}
            <div className="absolute inset-0 bg-gradient-to-b from-gold/0 via-gold/10 to-gold/0 h-8 w-full animate-scan" />
          </div>

          {/* Badge flutuante */}
          <div style={revealStyle(isVisible, 300)} className="absolute -bottom-6 -left-6 glass px-6 py-4 rounded-sm border border-gold/20 glow-gold">
            <p className="text-gold text-xs tracking-widest uppercase mb-1">Precisão</p>
            <p className="text-foreground font-serif text-lg">Milimétrica</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimulationSection;

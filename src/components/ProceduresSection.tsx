import { useScrollReveal, revealStyle } from "@/hooks/useScrollReveal";
import { ChevronRight } from "lucide-react";

const procedures = [
  { name: "Rinoplastia", desc: "Reconstrução nasal com técnicas avançadas" },
  { name: "Mentoplastia", desc: "Harmonização do mento" },
  { name: "Contorno mandibular", desc: "Definição da linha da mandíbula" },
  { name: "Blefaroplastia", desc: "Rejuvenescimento das pálpebras" },
  { name: "Tratamento da papada", desc: "Lipoaspiração submentoniana" },
  { name: "Lifting facial", desc: "Rejuvenescimento facial" },
  { name: "Otoplastia", desc: "Correção das orelhas" },
];

const ProceduresSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} id="procedures" className="py-24 md:py-32 px-6 bg-navy-light relative overflow-hidden">
      {/* Padrão decorativo de fundo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-px h-full gradient-gold" />
        <div className="absolute top-0 right-1/4 w-px h-full gradient-gold" />
        <div className="absolute top-1/3 left-0 right-0 h-px gradient-gold" />
        <div className="absolute bottom-1/3 left-0 right-0 h-px gradient-gold" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p style={revealStyle(isVisible, 0)} className="text-gold text-sm tracking-widest uppercase mb-3">
          Especialidades
        </p>
        <h2 style={revealStyle(isVisible, 50)} className="font-serif text-3xl md:text-5xl mb-4">
          Procedimentos{" "}
          <span className="gradient-gold-text italic">realizados</span>
        </h2>
        <p style={revealStyle(isVisible, 100)} className="text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Cada indicação é personalizada, respeitando a harmonia e as características únicas do seu rosto.
        </p>

        <div className="space-y-3">
          {procedures.map((proc, i) => (
            <div
              key={proc.name}
              style={revealStyle(isVisible, 150 + i * 60)}
              className="group flex items-center justify-between p-6 rounded-sm bg-card/30 border border-border/50 hover:border-gold/30 transition-all duration-300 hover:bg-card/50 hover:shadow-lg hover:shadow-gold/5 hover:-translate-x-1"
            >
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-gold/30 group-hover:bg-gold transition-colors" />
                <div className="text-left">
                  <span className="text-foreground/90 font-medium text-lg">{proc.name}</span>
                  <p className="text-muted-foreground text-sm">{proc.desc}</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gold opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
            </div>
          ))}
        </div>

        <div style={revealStyle(isVisible, 700)} className="mt-12">
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block btn-gold"
          >
            Saber mais sobre procedimentos
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProceduresSection;

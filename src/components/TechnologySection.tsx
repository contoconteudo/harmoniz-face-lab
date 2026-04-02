import { Stethoscope, ScanFace, Scissors, HeartPulse } from "lucide-react";
import { useScrollReveal, revealStyle } from "@/hooks/useScrollReveal";

const stages = [
  {
    icon: Stethoscope,
    title: "Primeira consulta",
    items: [
      "Uma conversa cuidadosa para entender suas dores, expectativas e necessidades",
      "Escaneamento facial em 2D e 3D para análise detalhada",
      "Explicação das técnicas, apresentação de moldes e esclarecimento completo das dúvidas",
    ],
  },
  {
    icon: ScanFace,
    title: "Pré operatório",
    items: [
      "Refinamento do planejamento alinhando expectativas com o paciente",
      "Simulação cirúrgica com base na sua própria face",
      "Impressão do molde 3D personalizado para maior previsibilidade",
    ],
  },
  {
    icon: Scissors,
    title: "Durante a cirurgia",
    items: [
      "PRF (Plasma Rica em Fibrina) para otimizar a recuperação",
      "Técnica ultrassônica (Piezzo), mais precisa e menos traumática",
      "Uso de cartilagem do próprio paciente, respeitando a anatomia natural",
      "Execução guiada por molde 3D personalizado, maior precisão",
    ],
  },
  {
    icon: HeartPulse,
    title: "Pós Cirurgia",
    items: ["Escaneamento 3D pós cirúrgico para acompanhamento preciso"],
  },
];

const TechnologySection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} id="technology" className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p style={revealStyle(isVisible, 0)} className="text-gold text-sm tracking-widest uppercase mb-3">
            Inovação
          </p>
          <h2 style={revealStyle(isVisible, 80)} className="font-serif text-3xl md:text-5xl text-center mb-4">
            Tecnologia que aumenta a{" "}
            <span className="gradient-gold-text italic">segurança</span>
          </h2>
          <p style={revealStyle(isVisible, 160)} className="text-muted-foreground text-center text-lg mb-4 max-w-2xl mx-auto">
            Tecnologia que aumenta a precisão. Segurança que permite resultados mais naturais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {stages.map((stage, i) => (
            <div
              key={stage.title}
              style={revealStyle(isVisible, 240 + i * 120)}
              className="group relative p-8 rounded-sm bg-card/50 border border-border/50 hover:border-gold/30 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5 hover:-translate-y-1 overflow-hidden"
            >
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 animate-shimmer" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-sm gradient-gold flex items-center justify-center glow-gold group-hover:scale-110 transition-transform duration-300">
                    <stage.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl text-foreground group-hover:text-gold transition-colors">
                      {stage.title}
                    </h3>
                    <div className="w-12 h-px gradient-gold mt-2" />
                  </div>
                </div>
                <ul className="space-y-4">
                  {stage.items.map((item, j) => (
                    <li key={j} className="text-muted-foreground text-sm leading-relaxed flex gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/60 mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;

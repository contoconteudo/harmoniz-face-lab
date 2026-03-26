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
    items: ["Escaneamento 3D pós cirúrgico para acompanhamento da evolução"],
  },
];

const TechnologySection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 bg-navy-light">
      <div className="max-w-5xl mx-auto">
        <h2 style={revealStyle(isVisible, 0)} className="font-serif text-3xl md:text-5xl text-center mb-4">
          Tecnologia que aumenta a{" "}
          <span className="text-gold italic">segurança</span>
        </h2>
        <p style={revealStyle(isVisible, 100)} className="text-muted-foreground text-center text-lg mb-16 max-w-2xl mx-auto">
          Tecnologia que aumenta a precisão. Segurança que permite resultados mais naturais.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {stages.map((stage, i) => (
            <div
              key={stage.title}
              style={revealStyle(isVisible, 200 + i * 100)}
              className="p-8 rounded-sm bg-card border border-border/50 hover:border-gold/20 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <stage.icon className="w-6 h-6 text-gold" />
                <h3 className="font-serif text-xl text-foreground">{stage.title}</h3>
              </div>
              <ul className="space-y-3">
                {stage.items.map((item, j) => (
                  <li key={j} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                    <span className="text-gold mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;

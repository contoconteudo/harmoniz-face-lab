import { CheckCircle } from "lucide-react";
import { useScrollReveal, revealStyle } from "@/hooks/useScrollReveal";

const steps = [
  "Conversa inicial para entender sua história, expectativas e objetivos",
  "Escaneamento facial 2D e 3D para análise detalhada",
  "Consulta personalizada com o Dr. Jonathan",
  "Simulação e planejamento cirúrgico individualizado",
  "Realização da cirurgia com técnica e precisão",
  "Acompanhamento próximo e cuidadoso no pós operatório",
];

const JourneySection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 style={revealStyle(isVisible, 0)} className="font-serif text-3xl md:text-5xl text-center mb-4">
          Na Rinoplastia{" "}
          <span className="text-gold italic">cada detalhe importa</span>
        </h2>
        <p style={revealStyle(isVisible, 100)} className="text-muted-foreground text-center text-lg mb-16 max-w-2xl mx-auto">
          Da primeira consulta ao pós operatório — clareza em cada etapa da sua jornada
        </p>

        <div className="space-y-6">
          {steps.map((step, i) => (
            <div
              key={i}
              style={revealStyle(isVisible, 150 + i * 80)}
              className="flex items-start gap-4 p-5 rounded-sm bg-card border border-border/50 hover:border-gold/30 transition-colors"
            >
              <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
              <p className="text-foreground/90">{step}</p>
            </div>
          ))}
        </div>

        <p style={revealStyle(isVisible, 700)} className="text-muted-foreground text-center mt-12 italic text-lg">
          Cada etapa é conduzida com um olhar próximo e um cuidado realmente individual.
        </p>
      </div>
    </section>
  );
};

export default JourneySection;

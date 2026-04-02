import { CheckCircle } from "lucide-react";
import { useScrollReveal, revealStyle } from "@/hooks/useScrollReveal";

const steps = [
  {
    num: "01",
    title: "Conversa inicial",
    desc: "para entender sua história, expectativas e objetivos",
  },
  {
    num: "02",
    title: "Escaneamento facial",
    desc: "2D e 3D para análise detalhada",
  },
  {
    num: "03",
    title: "Consulta personalizada",
    desc: "com o Dr. Jonathan",
  },
  {
    num: "04",
    title: "Simulação e planejamento",
    desc: "cirúrgico individualizado",
  },
  {
    num: "05",
    title: "Cirurgia",
    desc: "com técnica e precisão",
  },
  {
    num: "06",
    title: "Acompanhamento",
    desc: "próximo e cuidadoso no pós operatório",
  },
];

const JourneySection = ({ id = "journey" }: { id?: string }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} id={id} className="py-24 md:py-32 px-6 bg-navy-light relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      {/* Linha decorativa vertical */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent hidden md:block" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p style={revealStyle(isVisible, 0)} className="text-gold text-sm tracking-widest uppercase mb-3">
            Sua jornada
          </p>
          <h2 style={revealStyle(isVisible, 80)} className="font-serif text-3xl md:text-5xl text-center mb-4">
            Na Rinoplastia{" "}
            <span className="gradient-gold-text italic">cada detalhe importa</span>
          </h2>
          <p style={revealStyle(isVisible, 160)} className="text-muted-foreground text-center text-lg max-w-2xl mx-auto">
            Da primeira consulta ao pós operatório, clareza em cada etapa do seu caminho
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              style={revealStyle(isVisible, 200 + i * 100)}
              className="group relative p-6 rounded-sm bg-card/50 border border-border/50 hover:border-gold/30 transition-all duration-500 hover:shadow-lg hover:shadow-gold/5 hover:-translate-y-1"
            >
              {/* Número decorativo */}
              <span className="absolute -top-3 -right-3 text-6xl font-serif text-gold/10 group-hover:text-gold/20 transition-colors">
                {step.num}
              </span>

              <div className="flex items-start gap-4 mb-3">
                <div className="w-10 h-10 rounded-sm gradient-gold flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-xl text-foreground group-hover:text-gold transition-colors">
                  {step.title}
                </h3>
              </div>
              <p className="text-muted-foreground pl-14">{step.desc}</p>

              {/* Linha conectora */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 top-full w-px h-6 bg-gradient-to-b from-gold/20 to-transparent" />
              )}
            </div>
          ))}
        </div>

        <p style={revealStyle(isVisible, 800)} className="text-muted-foreground text-center mt-16 italic text-lg relative">
          <span className="inline-block px-8 py-4 rounded-sm bg-navy-light/50 border border-gold/10">
            Cada etapa é conduzida com um olhar próximo e um cuidado realmente individual.
          </span>
        </p>
      </div>
    </section>
  );
};

export default JourneySection;

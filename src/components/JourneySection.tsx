import { useScrollReveal, revealStyle } from "@/hooks/useScrollReveal";
import conversaInicialImg from "@/assets/3d-scanning-sm.webp";
import escaneamentoImg from "@/assets/escaneamento-facial.webp";
import consultaImg from "@/assets/consulta-personalizada.webp";
import simulacaoImg from "@/assets/simulacao-planejamento.webp";
import cirurgiaImg from "@/assets/cirurgia.webp";
import acompanhamentoImg from "@/assets/acompanhamento.webp";

const steps = [
  {
    num: "01",
    title: "Escaneamento facial",
    desc: "2D e 3D para análise detalhada",
    image: escaneamentoImg,
  },
  {
    num: "02",
    title: "Conversa inicial",
    desc: "para entender sua história, expectativas e objetivos",
    image: conversaInicialImg,
  },
  {
    num: "03",
    title: "Consulta personalizada",
    desc: "com o Dr. Jonathan",
    image: consultaImg,
  },
  {
    num: "04",
    title: "Simulação e planejamento",
    desc: "cirúrgico individualizado",
    image: simulacaoImg,
  },
  {
    num: "05",
    title: "Cirurgia",
    desc: "com técnica e precisão",
    image: cirurgiaImg,
  },
  {
    num: "06",
    title: "Acompanhamento",
    desc: "próximo e cuidadoso no pós operatório",
    image: acompanhamentoImg,
  },
];

const JourneySection = ({ id = "journey" }: { id?: string }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} id={id} className="py-24 md:py-32 bg-navy-light relative overflow-hidden">
      {/* Decorativos de fundo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p
            style={revealStyle(isVisible, 0)}
            className="text-gold text-xs tracking-[0.3em] uppercase mb-4"
          >
            Sua jornada
          </p>
          <h2
            style={revealStyle(isVisible, 80)}
            className="font-serif text-3xl md:text-5xl mb-5"
          >
            Na Rinoplastia{" "}
            <span className="gradient-gold-text italic">cada detalhe importa</span>
          </h2>
          <p
            style={revealStyle(isVisible, 160)}
            className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto text-balance leading-relaxed"
          >
            Da primeira consulta ao pós-operatório,{" "}
            <span className="text-foreground/70">clareza em cada etapa do seu caminho</span>
          </p>
        </div>

        {/* Grid com separadores dourados */}
        <div
          style={revealStyle(isVisible, 220)}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10 border border-gold/10"
        >
          {steps.map((step, i) => (
            <div
              key={i}
              className="group bg-navy-light hover:bg-[hsl(216,24%,10%)] transition-colors duration-500 flex flex-col"
            >
              {/* Bloco visual — proporção quadrada, sem corte */}
              <div className="aspect-square relative overflow-hidden">
                {step.image ? (
                  <>
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    {/* Overlay sutil */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    {/* Cantos decorativos dourados */}
                    <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-gold/60 group-hover:border-gold transition-colors duration-300" />
                    <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-gold/60 group-hover:border-gold transition-colors duration-300" />
                    <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-gold/60 group-hover:border-gold transition-colors duration-300" />
                    <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-gold/60 group-hover:border-gold transition-colors duration-300" />
                  </>
                ) : (
                  /* Card sem imagem — número editorial grande */
                  <div className="w-full h-full flex flex-col items-center justify-center bg-navy-deep/40 relative">
                    {/* Cantos decorativos */}
                    <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-gold/20 group-hover:border-gold/40 transition-colors duration-300" />
                    <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-gold/20 group-hover:border-gold/40 transition-colors duration-300" />
                    <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-gold/20 group-hover:border-gold/40 transition-colors duration-300" />
                    <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-gold/20 group-hover:border-gold/40 transition-colors duration-300" />
                    {/* Número grande */}
                    <span className="font-serif text-[7rem] leading-none text-gold/[0.07] group-hover:text-gold/[0.12] transition-colors duration-500 select-none">
                      {step.num}
                    </span>
                    {i < 4 && (
                      <span className="absolute bottom-5 text-[10px] tracking-[0.2em] text-muted-foreground/30 uppercase">
                        imagem em breve
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Conteúdo do card */}
              <div className="p-6 flex flex-col gap-2 border-t border-gold/10 group-hover:border-gold/20 transition-colors duration-300 flex-1">
                <span className="text-gold/50 text-[10px] tracking-[0.25em] uppercase font-mono">
                  Etapa {step.num}
                </span>
                <h3 className="font-serif text-lg md:text-xl text-foreground group-hover:text-gold transition-colors duration-300 leading-snug">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.desc}
                </p>
                {/* Linha dourada animada */}
                <div className="mt-auto pt-4">
                  <div className="h-px w-0 group-hover:w-8 bg-gold/60 transition-all duration-500 ease-out" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Frase final */}
        <p
          style={revealStyle(isVisible, 500)}
          className="text-muted-foreground/70 text-center mt-14 italic text-base md:text-lg"
        >
          <span className="inline-block px-8 py-4 border border-gold/10 hover:border-gold/20 transition-colors duration-300">
            Cada etapa é conduzida com um olhar próximo e um cuidado realmente individual.
          </span>
        </p>
      </div>
    </section>
  );
};

export default JourneySection;

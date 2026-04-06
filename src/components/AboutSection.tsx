import { useScrollReveal, revealStyle } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} id="about" className="py-24 md:py-32 px-6 relative overflow-hidden bg-light">
      {/* Elementos decorativos */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-32 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div style={revealStyle(isVisible, 0)}>
          <p className="text-gold text-sm tracking-widest uppercase mb-3">
            Quem é
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mb-8 text-navy">
            Dr. Jonathan Vidal
          </h2>

          <div className="w-20 h-1 gradient-gold mb-8" style={revealStyle(isVisible, 80)} />

          <div style={revealStyle(isVisible, 150)} className="space-y-5 text-light-muted leading-relaxed text-sm md:text-base">
            <p className="border-l-2 border-gold/30 pl-4">
              O Dr. Jonathan Vidal é especialista em cirurgia facial, com formação sólida e
              atuação focada em resultados naturais e estruturados.
            </p>
            <p>
              Graduado em Medicina pela Universidade Federal de Pernambuco (UFPE).
              Concluiu residência médica em Cirurgia Geral pelo IMIP-PE e residência em
              Cirurgia Plástica no Hospital Agamenon Magalhães - PE.
            </p>
            <p>
              É membro titular da Sociedade Brasileira de Cirurgia Plástica, com título de
              especialista desde 2016. Possui especialização em Reconstrução Cirúrgica em Oncologia
              pelo Instituto Nacional de Câncer (INCA) e realizou estágio internacional em
              Cirurgia Reconstrutora Oncológica no prestigiado MD Anderson Cancer Center, nos Estados Unidos.
            </p>
            <p>
              É mestre em Ciências da Saúde pela UFPE. Fellow em Rinoplastia em vários estados
              do Brasil, na Turquia e Bélgica.
            </p>
          </div>

          {/* Pilares */}
          <div style={revealStyle(isVisible, 350)} className="flex gap-10 mt-12 pt-8 border-t border-gold/20">
            {["Harmonia", "Naturalidade", "Precisão"].map((item, i) => (
              <div key={item} className="text-center group">
                <div className="w-16 h-px gradient-gold mx-auto mb-3 group-hover:h-1 transition-all duration-300" style={revealStyle(isVisible, 400 + i * 100)} />
                <span className="text-gold text-sm font-medium tracking-widest uppercase">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

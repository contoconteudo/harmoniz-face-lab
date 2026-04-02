import doctorPortrait from "@/assets/doctor-portrait.webp";
import { useScrollReveal, revealStyle } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div style={revealStyle(isVisible, 0)} className="relative">
          <img
            src={doctorPortrait}
            alt="Dr. Jonathan Vidal"
            className="w-full max-w-md mx-auto rounded-sm glow-gold"
            loading="lazy"
            width={800}
            height={1024}
          />
        </div>

        <div>
          <p style={revealStyle(isVisible, 100)} className="text-gold text-sm tracking-widest uppercase mb-3">Quem é</p>
          <h2 style={revealStyle(isVisible, 150)} className="font-serif text-3xl md:text-5xl mb-8">
            Dr. Jonathan Vidal
          </h2>

          <div style={revealStyle(isVisible, 250)} className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
            <p>
              O Dr. Jonathan Vidal é especialista em cirurgia facial, com formação sólida e 
              atuação focada em resultados naturais e estruturados.
            </p>
            <p>
              Ele é graduado em Medicina pela Universidade Federal de Pernambuco (UFPE). 
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

          <div style={revealStyle(isVisible, 400)} className="flex gap-8 mt-10">
            {["Harmonia", "Naturalidade", "Precisão no resultado"].map((item) => (
              <div key={item} className="text-center">
                <div className="w-12 h-[1px] gradient-gold mx-auto mb-3" />
                <span className="text-gold text-sm font-medium tracking-wide">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

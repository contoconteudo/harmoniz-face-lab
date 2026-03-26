import doctorPortrait from "@/assets/doctor-portrait.jpg";

const AboutSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-navy-light">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="relative">
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
          <p className="text-gold text-sm tracking-widest uppercase mb-3">Quem é</p>
          <h2 className="font-serif text-3xl md:text-5xl mb-8">
            Dr. Jonathan Vidal
          </h2>

          <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
            <p>
              O Dr. Jonathan Vidal é especialista em cirurgia facial, com formação sólida e 
              atuação focada em resultados naturais e estruturados.
            </p>
            <p>
              Graduado em Medicina pela Universidade Federal de Pernambuco (UFPE). Residência 
              em Cirurgia Geral pelo IMIP-PE e Cirurgia Plástica no Hospital Agamenon Magalhães - PE.
            </p>
            <p>
              Membro titular da Sociedade Brasileira de Cirurgia Plástica, com título de 
              especialista desde 2016. Especialização em Reconstrução Cirúrgica em Oncologia 
              pelo Instituto Nacional de Câncer (INCA) e estágio internacional no MD Anderson 
              Cancer Center, nos Estados Unidos.
            </p>
            <p>
              Mestre em Ciências da Saúde pela UFPE. Fellow em Rinoplastia em vários estados 
              do Brasil, na Turquia e Bélgica.
            </p>
          </div>

          <div className="flex gap-8 mt-10">
            {["Harmonia", "Naturalidade", "Precisão"].map((item) => (
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

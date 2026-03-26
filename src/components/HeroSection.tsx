import heroFace from "@/assets/hero-face.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroFace}
          alt="Harmonia facial"
          className="w-full h-full object-cover opacity-40"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-tight mb-8">
          Confiança esculpida{" "}
          <span className="text-gold italic">nos detalhes.</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-4">
          Nem sempre é sobre mudar o rosto. É sobre se sentir bem com você.
        </p>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Quando surge o desejo de mudar, essa decisão precisa ser feita com calma e segurança. 
          Aqui, cada etapa do processo é feita de forma personalizada, aliando tecnologia com 
          naturalidade e harmonia, para que seu tratamento seja conduzido com precisão e segurança.
        </p>

        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block gradient-gold text-primary-foreground font-medium px-8 py-4 rounded-sm text-sm tracking-widest uppercase hover:opacity-90 transition-opacity"
        >
          Agendar avaliação personalizada
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

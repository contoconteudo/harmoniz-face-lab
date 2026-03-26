const CTASection = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-navy-light">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-5xl mb-6">
          O próximo passo é{" "}
          <span className="text-gold italic">simples</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          A avaliação é o momento de tirar dúvidas, visualizar possibilidades 
          e saber se faz sentido pra você.
        </p>

        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block gradient-gold text-primary-foreground font-medium px-10 py-4 rounded-sm text-sm tracking-widest uppercase hover:opacity-90 transition-opacity"
        >
          Agendar avaliação personalizada
        </a>
      </div>
    </section>
  );
};

export default CTASection;

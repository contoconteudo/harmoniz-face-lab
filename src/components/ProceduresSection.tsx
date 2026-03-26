const procedures = [
  "Rinoplastia",
  "Mentoplastia",
  "Contorno mandibular",
  "Blefaroplastia",
  "Tratamento da papada",
  "Lifting facial",
  "Otoplastia",
];

const ProceduresSection = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-5xl mb-4">
          Procedimentos{" "}
          <span className="text-gold italic">realizados</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-12">
          Cada indicação é personalizada, respeitando a harmonia do seu rosto.
        </p>

        <div className="space-y-3">
          {procedures.map((proc) => (
            <div
              key={proc}
              className="flex items-center justify-between p-5 rounded-sm bg-card border border-border/50 hover:border-gold/30 transition-colors group"
            >
              <span className="text-foreground/90 font-medium">{proc}</span>
              <div className="w-8 h-[1px] gradient-gold opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProceduresSection;

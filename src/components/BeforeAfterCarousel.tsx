import { useScrollReveal, revealStyle } from "@/hooks/useScrollReveal";

const placeholderItems = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  label: `Caso ${i + 1}`,
}));

const BeforeAfterCarousel = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 md:py-32 overflow-hidden bg-navy-light">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <p style={revealStyle(isVisible, 0)} className="text-gold text-sm tracking-widest uppercase mb-3">
          Resultados reais
        </p>
        <h2 style={revealStyle(isVisible, 100)} className="font-serif text-3xl md:text-5xl">
          Antes e Depois
        </h2>
      </div>

      <div style={revealStyle(isVisible, 200)} className="relative">
        {/* Double the items for seamless loop */}
        <div className="flex gap-6 animate-carousel">
          {[...placeholderItems, ...placeholderItems].map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 w-[300px] md:w-[400px]"
            >
              <div className="aspect-[3/4] rounded-sm bg-muted/20 border border-border/20 flex items-center justify-center">
                <span className="text-muted-foreground text-sm">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterCarousel;

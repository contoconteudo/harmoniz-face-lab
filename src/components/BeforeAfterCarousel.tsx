import { useScrollReveal, revealStyle } from "@/hooks/useScrollReveal";
import beforeAfter1 from "@/assets/before-after-1.webp";
import beforeAfter2 from "@/assets/before-after-2.webp";
import beforeAfter3 from "@/assets/before-after-3.webp";
import beforeAfter4 from "@/assets/before-after-4.webp";

const carouselItems = [
  { id: 1, src: beforeAfter1, label: "Caso 1" },
  { id: 2, src: beforeAfter2, label: "Caso 2" },
  { id: 3, src: beforeAfter3, label: "Caso 3" },
  { id: 4, src: beforeAfter4, label: "Caso 4" },
];

const BeforeAfterCarousel = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 md:py-24 overflow-hidden bg-navy-light relative">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 mb-8 md:mb-12 relative z-10">
        <p style={revealStyle(isVisible, 0)} className="text-gold text-xs md:text-sm tracking-widest uppercase mb-3">
          Resultados reais
        </p>
        <h2 style={revealStyle(isVisible, 100)} className="font-serif text-2xl md:text-5xl">
          Antes e Depois
        </h2>
      </div>

      <div style={revealStyle(isVisible, 200)} className="relative">
        {/* Overlay gradiente nas laterais */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-navy-light to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-navy-light to-transparent z-10 pointer-events-none" />

        <div className="flex animate-carousel-scroll">
          {[...carouselItems, ...carouselItems].map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-[400px] px-2 md:px-4"
            >
              <div className="group/card cursor-pointer">
                <div className="aspect-video rounded-sm overflow-hidden border border-border/50 hover:border-gold/30 transition-colors duration-500">
                  <img
                    src={item.src}
                    alt={item.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                    loading="lazy"
                  />
                </div>
                <p className="text-center text-gold text-xs md:text-sm tracking-widest uppercase mt-3 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterCarousel;

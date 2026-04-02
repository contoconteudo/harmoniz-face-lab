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
    <section ref={ref} className="py-16 md:py-20 overflow-hidden bg-navy-light">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <p style={revealStyle(isVisible, 0)} className="text-gold text-sm tracking-widest uppercase mb-3">
          Resultados reais
        </p>
        <h2 style={revealStyle(isVisible, 100)} className="font-serif text-3xl md:text-5xl">
          Antes e Depois
        </h2>
      </div>

      <div style={revealStyle(isVisible, 200)} className="relative">
        <div className="flex gap-6 animate-carousel">
          {[...carouselItems, ...carouselItems].map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 w-[300px] md:w-[400px]"
            >
              <div className="aspect-video rounded-sm overflow-hidden">
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterCarousel;

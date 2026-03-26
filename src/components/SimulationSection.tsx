import scanningImg from "@/assets/3d-scanning.jpg";
import { ShieldCheck } from "lucide-react";

const SimulationSection = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <h2 className="font-serif text-3xl md:text-5xl mb-6 leading-tight">
            Mais do que imaginar, você pode{" "}
            <span className="text-gold italic">entender o seu resultado</span>
          </h2>

          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Com a tecnologia de escaneamento facial em 2D e 3D, e a simulação virtual, 
            conseguimos te mostrar possibilidades reais antes da cirurgia.
          </p>

          <p className="text-foreground/80 mb-4">Isso traz mais segurança, porque:</p>
          <ul className="space-y-3 mb-10">
            {[
              "Reduz incertezas",
              "Ajuda na tomada de decisão",
              "Alinha expectativas com mais clareza",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-muted-foreground">
                <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block gradient-gold text-primary-foreground font-medium px-8 py-4 rounded-sm text-sm tracking-widest uppercase hover:opacity-90 transition-opacity"
          >
            Agendar avaliação
          </a>
        </div>

        <div className="relative">
          <img
            src={scanningImg}
            alt="Escaneamento facial 3D"
            className="w-full rounded-sm glow-gold"
            loading="lazy"
            width={1200}
            height={800}
          />
        </div>
      </div>
    </section>
  );
};

export default SimulationSection;

import { MapPin, Phone, Clock } from "lucide-react";
import { useScrollReveal, revealStyle } from "@/hooks/useScrollReveal";
import hallEntrada from "@/assets/hallentrada.webp";

const clinics = [
  {
    city: "Caruaru",
    name: "Empresarial Difusora",
    address: "Av. Agamenon Magalhães, 444\n14º Andar, Sala 906\nMaurício de Nassau, Caruaru – PE\nCEP 55012-290",
    hours: "Fecha às 18:00",
    phone: "(81) 99217-8724",
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=Av+Agamenon+Magalh%C3%A3es+444+Caruaru+PE+55012-290",
  },
  {
    city: "Recife",
    name: "RioMar Trade Center",
    address: "Av. República do Líbano, 251\nSalas 2005 e 2006 – Torre 1\nPina, Recife – PE\nCEP 51110-131",
    hours: "Fecha às 17:00",
    phone: "(81) 99217-8724",
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=Av+Rep%C3%BAblica+do+L%C3%ADbano+251+Pina+Recife+PE",
  },
];

const LocationSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        <img
          src={hallEntrada}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/90" />
      </div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            style={revealStyle(isVisible, 0)}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-gold/30"
          >
            <span className="text-white text-xs tracking-widest uppercase">Onde nos encontrar</span>
          </div>

          <h2
            style={revealStyle(isVisible, 100)}
            className="font-serif text-3xl md:text-5xl text-foreground"
          >
            Nossas{" "}
            <span className="gradient-gold-text italic">clínicas</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clinics.map((clinic, i) => (
            <a
              key={clinic.city}
              href={clinic.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              style={revealStyle(isVisible, 200 + i * 150)}
              className="rounded-2xl overflow-hidden border border-gold/20 block cursor-pointer transition-all duration-300 hover:border-gold/50 hover:bg-white/5 hover:scale-[1.02] hover:shadow-lg hover:shadow-gold/10 active:scale-[0.99]"
            >
              {/* Informações */}
              <div className="p-8">
                <p className="text-gold text-xs tracking-widest uppercase mb-1">{clinic.city}</p>
                <h3 className="font-serif text-xl text-white mb-6">{clinic.name}</h3>

                <div className="space-y-4 text-sm text-white/90">
                  <div className="flex gap-3">
                    <MapPin className="w-4 h-4 text-gold/70 shrink-0 mt-0.5" />
                    <span className="whitespace-pre-line leading-relaxed">{clinic.address}</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Clock className="w-4 h-4 text-gold/70 shrink-0" />
                    <span>{clinic.hours}</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Phone className="w-4 h-4 text-gold/70 shrink-0" />
                    <span className="text-white/90">{clinic.phone}</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 mt-6 text-xs text-gold animate-maps-pulse">
                  <MapPin className="w-3 h-3" />
                  Ver no Google Maps
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
};

export default LocationSection;

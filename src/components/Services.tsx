import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";

const services = [
  {
    title: "Bronzeamento de Alta Performance",
    description: "Tecnologia de ponta para um bronze perfeito, uniforme e duradouro. Resultados visíveis desde a primeira sessão.",
    image: service1,
  },
  {
    title: "Flash Bronze (a Jato)",
    description: "Bronze instantâneo e natural em minutos. Perfeito para eventos especiais e resultados rápidos.",
    image: service2,
  },
  {
    title: "Terapia Pós-Sol",
    description: "Banho de Lua e hidratação profunda para prolongar seu bronze e nutrir a pele com cuidado premium.",
    image: service3,
  },
];

const Services = () => {
  return (
    <section id="servicos" className="relative py-24 px-6 bg-light overflow-hidden">
      {/* Soft Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,hsl(352_69%_81%/0.08),transparent_70%)] pointer-events-none"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-dark mb-4">
            Tratamentos <span className="text-gradient">Exclusivos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6"></div>
        </div>
        
        {/* Asymmetrical Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden hover-lift group"
              style={{
                marginTop: index === 1 ? "3rem" : "0",
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

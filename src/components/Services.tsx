const services = [
  {
    title: "Bronze Dourado",
    description:
      "Um bronze clássico e elegante, pensado para realçar o dourado natural da pele com suavidade e segurança. O resultado é um tom uniforme, iluminado e sofisticado, perfeito para quem deseja um visual radiante o ano inteiro.",
  },
  {
    title: "Bronze Pele Perfeita",
    description:
      "Um protocolo completo que prepara e trata a pele para um bronze impecável. A renovação inicial garante uniformidade, enquanto as ativações especiais intensificam a cor. Ideal para quem busca um bronze marcante, duradouro e com acabamento de alta qualidade.",
  },
  {
    title: "Bronze Europeu Hidratante",
    description:
      "Um bronze elegante com hidratação profunda e efeito glow. Proporciona cor intensa, pele macia e um acabamento luminoso, garantindo um resultado sofisticado para quem deseja brilho e viço naturais",
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
              className="glass-card rounded-2xl hover-lift group p-8 h-full flex"
              style={{
                marginTop: index === 1 ? "3rem" : "0",
              }}
            >
              <div className="space-y-3 my-auto text-foreground">
                <h3 className="text-xl md:text-2xl font-serif font-semibold">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-foreground/80">
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

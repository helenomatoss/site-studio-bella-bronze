import studioInterior from "@/assets/studio-interior.jpg";

const Refuge = () => {
  return (
    <section className="relative py-24 px-6 bg-background overflow-hidden">
      {/* Soft Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,hsl(344_39%_58%/0.1),transparent_70%)] pointer-events-none"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
            Um Refúgio de <span className="text-gradient">Beleza e Cuidado</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={studioInterior}
                alt="Interior do Studio Bella Bronze"
                className="w-full h-[500px] md:h-[600px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent"></div>
            </div>
            
            {/* Overlapping Text Block */}
            <div className="absolute left-0 md:left-12 bottom-8 md:bottom-12 max-w-2xl glass-card rounded-2xl p-8 md:p-12 m-6 md:m-0">
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90 font-light">
                O Studio Bella Bronze é mais do que um espaço de bronzeamento, é uma celebração da sua beleza. 
                <br /><br />
                Aqui, cada detalhe foi pensado para oferecer uma experiência de luxo, conforto e segurança, 
                com profissionais qualificadas e os melhores produtos do mercado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Refuge;

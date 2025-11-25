import studioInterior from "@/assets/studio-interior.jpg";

const Refuge = () => {
  return (
    <section className="relative py-20 md:py-24 px-4 sm:px-6 bg-background overflow-hidden">
      {/* Soft Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,hsl(344_39%_58%/0.1),transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
            Um Refúgio de <span className="text-gradient">Beleza e Cuidado</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-14 max-w-6xl mx-auto">
          <div className="w-full md:w-1/2 max-w-xl mx-auto md:mx-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full h-full">
              <img
                src={studioInterior}
                alt="Interior do Studio Bella Bronze"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent"></div>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-xl mx-auto md:mx-0">
            <div className="glass-card rounded-2xl p-6 sm:p-8 md:p-10 h-full">
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

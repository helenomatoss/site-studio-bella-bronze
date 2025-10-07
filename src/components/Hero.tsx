import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import { siteConfig } from "@/config/site";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBackground})` }}></div>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>     
      {/* Soft Glow Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,hsl(352_69%_81%/0.12),transparent_70%)]"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight fade-in-up">
          <span className="text-gradient">A Pele Dourada</span>
          <br />
          <span className="text-foreground">que Celebra Você</span>
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/90 mb-12 max-w-2xl mx-auto font-light fade-in-up" style={{ animationDelay: "0.2s" }}>
          Uma experiência de luxo e bem-estar para uma beleza que irradia confiança.
        </p>
        
        <div className="fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button 
            size="xl" 
            variant="hero"
            asChild
          >
            <a href={siteConfig.links.whatsapp} target="_blank" rel="noopener noreferrer">
              Agendar Minha Sessão
            </a>
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

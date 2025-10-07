import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Clock, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const { links, contact } = siteConfig;

  return (
    <section id="contato" className="relative py-24 px-6 bg-light overflow-hidden">
      {/* Soft Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,hsl(352_69%_81%/0.15),transparent_70%)] pointer-events-none"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-dark mb-4">
            Inicie a Sua <span className="text-gradient">Transformação</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-12 text-center">
            <p className="text-xl md:text-2xl text-dark/80 mb-12 font-light">
              Entre em contato e descubra como podemos realçar sua beleza natural com um bronze perfeito.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center gap-4 p-6 bg-background/40 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <Phone className="w-6 h-6 text-background" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-dark/60 mb-1">WhatsApp</p>
                  <a 
                    href={links.whatsapp} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-dark hover:text-primary transition-smooth"
                  >
                    {contact.phoneDisplay}
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-4 p-6 bg-background/40 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-background" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-dark/60 mb-1">Endereço</p>
                  <p className="text-sm font-medium text-dark text-center">
                    {contact.address.street}<br />
                    {contact.address.neighborhood}<br />
                    {contact.address.postalCode}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 p-6 bg-background/40 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <Clock className="w-6 h-6 text-background" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-dark/60 mb-1">Horário</p>
                  <p className="text-sm font-medium text-dark text-center">
                    {contact.schedule.days}<br />
                    {contact.schedule.hours}
                  </p>
                </div>
              </div>
            </div>

            
            
            <Button size="xl" variant="hero" asChild>
              <a href={links.whatsapp} target="_blank" rel="noopener noreferrer">
                Agendar Minha Sessão
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

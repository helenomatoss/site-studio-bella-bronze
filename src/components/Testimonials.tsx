import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Emily Borborema (@emilyborborema_)",
    text: "Tá perfeito! A menina super simpática. Fiz até o banho de lua.",
    rating: 5,
  },
  {
    name: "Rhay (@rhay_1909)",
    text: "Indico de olhos fechados, trabalho impecável.",
    rating: 5,
  },
  {
    name: "Cliente (via Stories)",
    text: "Qual lugar fornece protetor solar de rosto e máscara facial pra cuidar do rosto enquanto tá exposto ao bronze? O Studio Bella Bronze fornece!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="relative py-20 md:py-24 px-4 sm:px-6 bg-background overflow-hidden">
      {/* Soft Glow */}
      <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,hsl(344_39%_58%/0.12),transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
            A Experiência <span className="text-gradient">Bella Bronze</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 hover-lift h-full flex flex-col justify-between"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" aria-hidden="true" />
                ))}
              </div>
              
              <p className="text-foreground/90 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;




import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Eduarda Silva",
    text: "Experiência incrível! O ambiente é luxuoso e o atendimento é impecável. Meu bronze ficou perfeito e durou muito mais do que eu esperava.",
    rating: 5,
  },
  {
    name: "Juliana Rodrigues",
    text: "O Studio Bela Bronze superou todas as minhas expectativas. A equipe é extremamente profissional e o resultado é simplesmente maravilhoso!",
    rating: 5,
  },
  {
    name: "Camila Almeida",
    text: "Melhor investimento em beleza que já fiz! O bronze ficou natural e uniforme. Recomendo de olhos fechados!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="relative py-24 px-6 bg-background overflow-hidden">
      {/* Soft Glow */}
      <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,hsl(344_39%_58%/0.12),transparent_70%)] pointer-events-none"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
            A Experiência <span className="text-gradient">Bela Bronze</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 hover-lift"
              style={{
                marginTop: index === 1 ? "2rem" : "0",
              }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" aria-hidden="true" />
                ))}
              </div>
              
              <p className="text-foreground/90 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-primary/20 pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

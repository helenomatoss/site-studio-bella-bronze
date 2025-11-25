import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Cliente com bronze perfeito" },
  { src: gallery2, alt: "Resultado de bronzeamento" },
  { src: gallery3, alt: "Bronze dourado natural" },
  { src: gallery4, alt: "Pele radiante" },
  { src: gallery5, alt: "Resultado premium" },
  { src: gallery6, alt: "Cliente satisfeita" },
];

const Gallery = () => {
  return (
    <section id="galeria" className="relative py-20 md:py-24 px-4 sm:px-6 bg-light overflow-hidden">
      {/* Soft Glow */}
      <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-[radial-gradient(circle,hsl(352_69%_81%/0.1),transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-dark mb-4">
            Resultados que <span className="text-gradient">Inspiram Confiança</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6"></div>
        </div>
        
        {/* Masonry Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3 md:gap-4 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl group cursor-pointer hover-lift aspect-[3/4] bg-black/30"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

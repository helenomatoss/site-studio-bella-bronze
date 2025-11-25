import imgFlavia from "@/assets/flavia2.jpg";

const title = "A Ess\u00EAncia Bella Bronze, por Fl\u00E1via";
const quote =
  "\u201CAcredito que o bronzeado perfeito \u00E9 uma forma de arte que ilumina a beleza natural de cada mulher. Criei o Studio Bella Bronze n\u00E3o apenas para oferecer uma marquinha impec\u00E1vel, mas para ser um ref\u00FAgio onde a tecnologia e o cuidado se unem para renovar sua autoestima.\u201D";
const paragraphOne =
  "Nosso espa\u00E7o foi meticulosamente projetado para ser uma experi\u00EAncia \u00FAnica. Combinamos um ambiente moderno e acolhedor com o que h\u00E1 de mais tecnol\u00F3gico em equipamentos de bronzeamento, garantindo resultados deslumbrantes com total seguran\u00E7a.";
const paragraphTwo =
  "Cada detalhe, desde a escolha dos nossos produtos premium at\u00E9 o atendimento personalizado, reflete nossa paix\u00E3o por real\u00E7ar o que h\u00E1 de mais belo em voc\u00EA.";

const About = () => {
  return (
    <section
      id="sobre"
      className="relative isolate w-full bg-light py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-serif font-semibold text-3xl md:text-5xl leading-tight text-slate-800">
          {title}
        </h2>
        <div className="mx-auto mt-3 h-[3px] w-24 rounded-full bg-rose-300/90"></div>

        <div className="mt-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto lg:mx-0">
            <div className="rounded-2xl overflow-hidden shadow-2xl h-full">
              <img
                src={imgFlavia}
                alt="Fl\u00E1via no Studio Bella Bronze"
                loading="lazy"
                className="block w-full h-full object-cover object-left"
                sizes="(min-width:1024px) 48vw, (min-width:768px) 50vw, 100vw"
              />
            </div>
          </div>

          <div className="flex-1 w-full max-w-xl mx-auto lg:mx-0 px-2 sm:px-0 flex flex-col justify-between text-slate-800 gap-6">
            <div className="space-y-6">
              <blockquote className="font-serif italic text-2xl md:text-3xl leading-relaxed text-center lg:text-left">
                {quote}
              </blockquote>

              <div className="mt-6 space-y-4 text-lg md:text-xl leading-relaxed">
                <p className="text-slate-700">{paragraphOne}</p>
                <p className="text-slate-700">{paragraphTwo}</p>
              </div>
            </div>

            <a
              href="#contato"
              className="mt-2 inline-flex self-center lg:self-start items-center rounded-full px-6 py-3 font-semibold text-white shadow-lg bg-gradient-to-r from-rose-300 to-rose-500 hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
            >
              Venha nos conhecer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

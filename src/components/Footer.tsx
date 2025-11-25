import logo from "@/assets/bella-bronze-logo.png";
import webgestLogo from "@/assets/webgest-logo.jpg";
import { siteConfig } from "@/config/site";

const Footer = () => {
  return (
    <footer className="relative bg-background border-t border-border/50 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-6">
            <img src={logo} alt="Studio Bella Bronze" className="h-20 w-auto opacity-80" loading="lazy" />
            
            <nav className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
              <a href="#servicos" className="text-sm text-foreground/60 hover:text-primary transition-smooth">
                Serviços
              </a>
              <a href="#galeria" className="text-sm text-foreground/60 hover:text-primary transition-smooth">
                Galeria
              </a>
              <a href="#depoimentos" className="text-sm text-foreground/60 hover:text-primary transition-smooth">
                Depoimentos
              </a>
              <a href="#contato" className="text-sm text-foreground/60 hover:text-primary transition-smooth">
                Contato
              </a>
            </nav>
          </div>

          <p className="text-sm text-foreground/40 text-center md:text-left">
            © 2025 Studio Bella Bronze. Todos os direitos reservados.
          </p>
        </div>
        
        <div className="mt-10 pt-8 border-t border-border/30">
          <a
            href={siteConfig.links.developer}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-gray-500 hover:text-white transition-smooth group text-center sm:text-left"
          >
            <div className="inline-flex items-center justify-center">
              <div className="flex items-center space-x-2 bg-white/90 px-4 py-2 rounded-lg backdrop-blur-sm">
                <img src={webgestLogo} alt="Webgest Solutions" className="w-12 h-12" loading="lazy" />
                <span className="text-xs text-gray-500 hover:text-gray-900 transition-colors">
                  Desenvolvido com paixão pela Webgest Solutions
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

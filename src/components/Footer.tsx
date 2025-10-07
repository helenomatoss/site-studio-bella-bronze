import logo from "@/assets/bela-bronze-logo.png";
import webgestLogo from "@/assets/webgest-logo.jpg";
import { siteConfig } from "@/config/site";

const Footer = () => {
  return (
    <footer className="relative bg-background border-t border-border/50 py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <img src={logo} alt="Studio Bela Bronze" className="h-20 w-auto opacity-80" loading="lazy" />
          
          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
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
          
          {/* Copyright */}
          <p className="text-sm text-foreground/40 text-center">
            © 2025 Studio Bela Bronze. Todos os direitos reservados.
          </p>
        </div>
        
        {/* Webgest Solutions Watermark */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <a
            href={siteConfig.links.developer}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 text-xs text-gray-500 hover:text-white transition-smooth group"
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

import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import logo from "@/assets/bella-bronze-logo.png";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Servi\u00E7os", href: "#servicos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center" aria-label="Studio Bella Bronze">
          <img src={logo} alt="Studio Bella Bronze" className="h-16 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground/80 hover:text-primary transition-smooth text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={siteConfig.links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-primary to-secondary rounded-full text-sm font-semibold hover:shadow-[0_0_30px_hsl(352_69%_81%/0.5)] transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="Agendar"
        >
          <Phone className="w-4 h-4" aria-hidden="true" />
          <span className="hidden sm:inline">Agendar</span>
        </a>
      </div>
    </header>
  );
};

export default Header;

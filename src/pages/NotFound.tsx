import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
      {/* Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,hsl(352_69%_81%/0.15),transparent_70%)] pointer-events-none"></div>
      
      <div className="text-center relative z-10 px-6">
        <h1 className="text-9xl font-serif font-bold text-gradient mb-4">404</h1>
        <p className="text-2xl text-foreground/80 mb-8">Oops! Página não encontrada</p>
        <Button variant="hero" size="lg" asChild>
          <a href="/">Voltar ao Início</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

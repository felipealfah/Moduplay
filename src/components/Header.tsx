import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 primary-gradient rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">M</span>
          </div>
          <span className="text-xl font-bold text-primary">ModuPlay</span>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('sobre')}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Sobre
          </button>
          <button 
            onClick={() => scrollToSection('produtos')}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Produtos
          </button>
          <button 
            onClick={() => scrollToSection('galeria')}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Galeria
          </button>
          <button 
            onClick={() => scrollToSection('contato')}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Contato
          </button>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center space-x-4">
          <a href="tel:+556198488037" className="hidden sm:flex">
            <Button variant="outline" size="sm" className="gap-2">
              <Phone className="w-4 h-4" />
              (61) 9848-8037
            </Button>
          </a>
          <Button variant="cta" size="sm" onClick={() => scrollToSection('contato')}>
            Orçamento
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="w-5 h-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
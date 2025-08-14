import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";
import logo from "@/assets/ModuPlay.png";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#4733ba] border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-primary">
          <a href="#home" onClick={() => scrollToSection('home')}>
            <img src={logo} alt="ModuPlay Pisos Esportivos" className="h-10 w-auto" />
          </a>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('sobre')}
            className="text-white hover:text-primary transition-colors font-medium"
          >
            Sobre
          </button>
          <button 
            onClick={() => scrollToSection('produtos')}
            className="text-white hover:text-primary transition-colors font-medium"
          >
            Produtos
          </button>
          <button 
            onClick={() => scrollToSection('galeria')}
            className="text-white hover:text-primary transition-colors font-medium"
          >
            Galeria
          </button>
          <button 
            onClick={() => scrollToSection('contato')}
            className="text-white hover:text-primary transition-colors font-medium"
          >
            Contato
          </button>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center space-x-4">
          <a href="tel:+556198488037" className="hidden sm:flex">
            <Button variant="outline" size="sm" className="gap-2">
              <Phone className="w-4 h-4" />
              (61) 99848-8037
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

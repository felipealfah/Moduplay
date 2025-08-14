import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/ModuPlay.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Sobre", href: "#sobre" },
    { label: "Produtos", href: "#produtos" },
    { label: "Galeria", href: "#galeria" },
    { label: "Contato", href: "#contato" }
  ];

  const products = [
    "Outdoor Performance",
    "Outdoor Impact",
    "Outdoor Play",
    "Outdoor Impact Pro",
    "Grama Sintética",
    "Construção de Quadras"
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="ModuPlay Pisos Esportivos" className="h-10 w-auto" />
            </div>
            
            <p className="text-white/80 leading-relaxed">
              Especialistas em pisos modulares e emborrachados, grama sintética e construção 
              completa de quadras esportivas. Tecnologia de absorção de impactos, instalação 
              express e garantia de até 10 anos.
            </p>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-1">48h</div>
              <div className="text-sm text-white/80">Sua quadra pronta!</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-6">Produtos</h3>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index} className="text-white/80 text-sm">
                  {product}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+556198488037" className="text-white/80 hover:text-white transition-colors">
                    (61) 9848-8037
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:moduplaypisos@gmail.com" className="text-white/80 hover:text-white transition-colors text-sm">
                    moduplaypisos@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                <div className="text-white/80 text-sm">
                  R 4 A CHÁCARA 1 A LT 1<br />
                  Centro Empresarial Vicente Pires
                </div>
              </div>
            </div>

            <Button 
              variant="whatsapp" 
              className="w-full mt-6"
              onClick={() => window.open('https://wa.me/556198488037?text=Olá vim pelo site e gostaria de um orçamento', '_blank')}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              © {currentYear} ModuPlay. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-white/60">
              <span>Segunda a Sexta: 8h às 18h</span>
              <span>Sábado: 8h às 12h</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
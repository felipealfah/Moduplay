import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Shield, Trophy } from "lucide-react";
import heroImage from "@/assets/hero-court.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/556198488037?text=Olá vim pelo site e gostaria de um orçamento', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-primary/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Sua Quadra pronta em{' '}
            < br/><span className="text-yellow-300">48 horas!</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Pisos modulares e emborrachados de alta performance com tecnologia de absorção de impactos. 
            Ideal para quadras poliesportivas, playgrounds, áreas de lazer e espaços corporativos. 
            <span className="text-yellow-300 font-semibold">Garantia de até 10 anos!</span>
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-3 md:px-4 py-2 rounded-full text-sm md:text-base">
              <Clock className="w-4 md:w-5 h-4 md:h-5 text-yellow-300" />
              <span className="font-medium">Instalação em 48h</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-3 md:px-4 py-2 rounded-full text-sm md:text-base">
              <Shield className="w-4 md:w-5 h-4 md:h-5 text-yellow-300" />
              <span className="font-medium">Absorção de Impactos</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-3 md:px-4 py-2 rounded-full text-sm md:text-base">
              <Trophy className="w-4 md:w-5 h-4 md:h-5 text-yellow-300" />
              <span className="font-medium">Garantia 10 anos</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="cta" 
              size="xl" 
              onClick={scrollToContact}
              className="group"
            >
              Solicitar Orçamento Grátis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="whatsapp" 
              size="xl" 
              onClick={openWhatsApp}
            >
              WhatsApp Direto
            </Button>
          </div>

          <p className="text-sm opacity-75 mt-4">
            ✓ Orçamento gratuito ✓ Mais de 20 cores ✓ Superfície antiderrapante ✓ Energia renovável
          </p>
        </div>
      </div>

      {/* Floating Animation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
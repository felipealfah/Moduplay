import { Check, Target, Award, Users } from "lucide-react";
import videoAbout from "../assets/video_about.mp4";

const About = () => {
  const benefits = [
    "Instalação em até 48h (base pronta)",
    "Tecnologia de absorção de impactos",
    "Superfície antiderrapante e drenante",
    "Mais de 20 opções de cores",
    "Garantia de até 10 anos",
    "Fabricação com energia renovável"
  ];

  const stats = [
    { icon: Award, label: "Anos de Experiência", value: "10+" },
    { icon: Users, label: "Projetos Concluídos", value: "100+" },
    { icon: Target, label: "Satisfação", value: "98%" }
  ];

  return (
    <section id="sobre" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Sobre a ModuPlay
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              A ModuPlay oferece pisos modulares e emborrachados de alta performance, com tecnologia de 
              absorção de impactos, ideais para quadras poliesportivas, playgrounds, áreas de lazer e 
              espaços corporativos. Nossos produtos são projetados para oferecer durabilidade, segurança 
              e conforto, com instalação rápida e manutenção simplificada. Comprometidos com a 
              sustentabilidade, fabricamos com energia renovável.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 primary-gradient rounded-lg flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-strong bg-[#30359e]">
              <video
                src={videoAbout}
                className="w-full h-full object-contain"
                controls
                loop
                playsInline
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute top-6 right-6 bg-white p-6 rounded-xl shadow-strong animate-float">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">48h</div>
                <div className="text-sm text-muted-foreground">Instalação Express</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
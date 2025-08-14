import { Shield, Clock, Award, Recycle, Users, Wrench } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Sistema Anti-Impacto",
      description: "Tecnologia avançada de absorção que reduz lesões e proporciona máximo conforto durante as atividades"
    },
    {
      icon: Clock,
      title: "Instalação em 48h",
      description: "Sua quadra pronta rapidamente com base já preparada. Equipe especializada e processo otimizado"
    },
    {
      icon: Award,
      title: "Garantia 10 Anos",
      description: "Materiais premium com alta resistência ao calor, intempéries e uso intenso. Qualidade comprovada"
    },
    {
      icon: Recycle,
      title: "Energia Renovável",
      description: "Fabricação sustentável com energia limpa e compromisso ambiental em todos os processos"
    },
    {
      icon: Users,
      title: "Superfície Inteligente",
      description: "Antiderrapante, drenante e antirreflexo. Segurança total em qualquer condição climática"
    },
    {
      icon: Wrench,
      title: "Personalização Total",
      description: "Mais de 20 opções de cores para criar o visual perfeito do seu espaço esportivo"
    }
  ];

  return (
    <section className="py-20 bg-accent/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Por que escolher a ModuPlay?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas com tecnologia avançada, 
            garantindo qualidade, segurança e durabilidade em cada projeto.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 primary-gradient rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-primary">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-medium">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm md:text-base text-muted-foreground">Projetos Concluídos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">48h</div>
              <div className="text-sm md:text-base text-muted-foreground">Instalação Express</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-sm md:text-base text-muted-foreground">Opções de Cores</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10 anos</div>
              <div className="text-sm md:text-base text-muted-foreground">Garantia Premium</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
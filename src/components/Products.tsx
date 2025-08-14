import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Gamepad2, Users, TreePine, Wrench } from "lucide-react";
import flooringImage from "@/assets/flooring-detail.jpg";
import playgroundImage from "@/assets/playground.jpg";
import grassImage from "@/assets/synthetic-grass.jpg";
import outdoorPerformanceImage from "@/assets/outdor_performance.jpeg";
import outdoorImpactImage from "@/assets/outdoor_impact.jpeg";
import outdoorPlayImage from "@/assets/outdoor_play.jpeg";
import outdoorImpactProImage from "@/assets/outdor_impact_pro.jpeg";

const Products = () => {
  const mainProducts = [
    {
      title: "Outdoor Performance",
      description: "Piso de alta performance para quadras profissionais",
      icon: Zap,
      image: outdoorPerformanceImage
    },
    {
      title: "Outdoor Impact",
      description: "Absorção superior de impactos para máxima segurança",
      icon: Shield,
      image: outdoorImpactImage
    },
    {
      title: "Outdoor Play",
      description: "Ideal para áreas recreativas e poliesportivas",
      icon: Gamepad2,
      image: outdoorPlayImage
    },
    {
      title: "Outdoor Impact Pro",
      description: "Linha premium com tecnologia avançada",
      icon: Zap,
      image: outdoorImpactProImage
    }
  ];

  const services = [
    {
      title: "Piso para Parquinhos",
      description: "Segurança total para áreas infantis",
      icon: Users,
      image: playgroundImage
    },
    {
      title: "Grama Sintética",
      description: "Campos profissionais de futebol e esportes",
      icon: TreePine,
      image: grassImage
    },
    {
      title: "Construção Completa",
      description: "Projetos completos de quadras esportivas",
      icon: Wrench,
      image: flooringImage
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="produtos" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Produtos e Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em pisos emborrachados e construção de quadras esportivas, 
            com tecnologia avançada e instalação profissional.
          </p>
        </div>

        {/* Main Products */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Linha Outdoor</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainProducts.map((product, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 primary-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{product.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="aspect-video rounded-lg overflow-hidden mb-4">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-muted-foreground text-sm">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Outros Serviços</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="aspect-video rounded-lg overflow-hidden mb-4">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 primary-gradient rounded-lg flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-lg">{service.title}</h4>
                  </div>
                  
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            variant="cta" 
            size="lg" 
            onClick={scrollToContact}
            className="group"
          >
            Solicitar Orçamento Personalizado
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/galery/04.jpeg";
import flooringImage from "@/assets/galery/01.jpeg";
import playgroundImage from "@/assets/playground.jpg";
import grassImage from "@/assets/synthetic-grass.jpg";
import recreative from "@/assets/galery/10.jpg";
import tenis from "@/assets/galery/11.jpeg";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('todos');

  const categories = [
    { id: 'todos', label: 'Todos os Projetos' },
    { id: 'quadras', label: 'Quadras Esportivas' },
    { id: 'playgrounds', label: 'Playgrounds' },
    { id: 'grama', label: 'Grama Sintética' }
  ];

  const projects = [
    {
      id: 1,
      title: "Quadra Poliesportiva Premium",
      category: "quadras",
      image: heroImage,
      description: "Instalação completa em condomínio residencial"
    },
    {
      id: 2,
      title: "Piso de Segurança Infantil",
      category: "playgrounds",
      image: playgroundImage,
      description: "Playground com piso absorvente de impactos"
    },
    {
      id: 3,
      title: "Campo de Futebol Society",
      category: "grama",
      image: grassImage,
      description: "Grama sintética profissional FIFA approved"
    },
    {
      id: 4,
      title: "Quadra de Basquete",
      category: "quadras",
      image: flooringImage,
      description: "Piso Outdoor Performance com marcação oficial"
    },
    {
      id: 5,
      title: "Área Recreativa",
      category: "playgrounds",
      image: recreative,
      description: "Espaço infantil seguro e colorido"
    },
    {
      id: 6,
      title: "Quadra de Tênis",
      category: "quadras",
      image: tenis,
      description: "Superfície profissional para alta performance"
    }
  ];

  const filteredProjects = activeCategory === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="galeria" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Galeria de Projetos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos nossos projetos realizados. 
            Cada instalação é feita com máxima qualidade e atenção aos detalhes.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="transition-all duration-300"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/80 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white transform translate-y-4 group-hover:translate-y-0">
                    <Play className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-semibold">Ver Detalhes</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-white p-8 rounded-xl shadow-soft">
          <h3 className="text-2xl font-bold mb-4 text-primary">
            Pronto para seu próximo projeto?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Entre em contato conosco e transforme sua ideia em realidade com a qualidade ModuPlay.
          </p>
          <Button 
            variant="cta" 
            size="lg" 
            onClick={scrollToContact}
            className="group"
          >
            Iniciar Meu Projeto
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
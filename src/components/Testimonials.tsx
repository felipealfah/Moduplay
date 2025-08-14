import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Diretor Esportivo - Colégio São José",
      content: "A ModuPlay transformou nossa quadra em apenas 2 dias! O piso de absorção de impactos fez toda diferença na segurança dos nossos alunos. Excelente qualidade e atendimento.",
      rating: 5,
      location: "Brasília, DF"
    },
    {
      name: "Ana Paula Mendes",
      role: "Proprietária - Academia Fitness Pro",
      content: "Nosso playground infantil ficou perfeito! As crianças adoraram e os pais ficaram mais tranquilos com a segurança. O piso antiderrapante é excelente mesmo molhado.",
      rating: 5,
      location: "Goiânia, GO"
    },
    {
      name: "Roberto Campos",
      role: "Atleta Profissional de Tênis",
      content: "Jogo em várias quadras, mas a qualidade do piso ModuPlay é superior. Absorção perfeita, conforto nos movimentos e zero escorregões. Recomendo para todos!",
      rating: 5,
      location: "São Paulo, SP"
    },
    {
      name: "Mariana Costa",
      role: "Gestora de Condomínio",
      content: "Reformamos a quadra do condomínio com a ModuPlay. Além da rapidez na instalação, o resultado superou nossas expectativas. Moradores estão muito satisfeitos!",
      rating: 5,
      location: "Rio de Janeiro, RJ"
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mais de 100 projetos realizados com satisfação garantida. 
            Confira os depoimentos de quem já transformou seu espaço esportivo conosco.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-white">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Quote className="w-6 h-6 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-primary text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground mt-1">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-medium">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Projetos Concluídos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Satisfação dos Clientes</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">48h</div>
              <div className="text-sm text-muted-foreground">Instalação Express</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10 anos</div>
              <div className="text-sm text-muted-foreground">Garantia Premium</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
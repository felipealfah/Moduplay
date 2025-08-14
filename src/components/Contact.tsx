import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Olá vim pelo site e gostaria de um orçamento
    
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Mensagem: ${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/556198488037?text=${encodedMessage}`, '_blank');
    
    toast({
      title: "Mensagem enviada!",
      description: "Você será redirecionado para o WhatsApp.",
    });

    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/556198488037?text=Olá vim pelo site e gostaria de um orçamento', '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(61) 9848-8037",
      action: () => window.open('tel:+556198488037')
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "moduplaypisos@gmail.com",
      action: () => window.open('mailto:moduplaypisos@gmail.com')
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "R 4 A CHACARA 1 A LT 1 - Centro Empresárial Vicente Pires",
      action: () => window.open('https://maps.google.com/?q=Centro+Empresárial+Vicente+Pires')
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h",
      action: null
    }
  ];

  return (
    <section id="contato" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solicite seu orçamento gratuito e transforme sua ideia em realidade. 
            Nossa equipe está pronta para atender você!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Send className="w-5 h-5" />
                Solicitar Orçamento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(61) 99999-9999"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Conte-nos sobre seu projeto</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Descreva o tipo de quadra/piso que deseja, dimensões aproximadas, localização, etc."
                    rows={4}
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" variant="cta" className="flex-1 group">
                    Enviar via WhatsApp
                    <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </Button>
                  
                  <Button 
                    type="button" 
                    variant="whatsapp" 
                    onClick={openWhatsApp}
                    className="flex-1"
                  >
                    Chat Direto
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className={`p-6 hover:shadow-medium transition-all duration-300 ${
                  info.action ? 'cursor-pointer hover:-translate-y-1' : ''
                }`}
                onClick={info.action || undefined}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 primary-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">{info.title}</h3>
                    <p className="text-muted-foreground">{info.content}</p>
                  </div>
                </div>
              </Card>
            ))}

            {/* Quick Actions */}
            <div className="bg-accent/20 p-6 rounded-xl">
              <h3 className="font-bold text-primary mb-4">Atendimento Rápido</h3>
              <div className="space-y-3">
                <Button 
                  variant="whatsapp" 
                  className="w-full justify-start" 
                  onClick={openWhatsApp}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Direto
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start" 
                  onClick={() => window.open('tel:+556198488037')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Ligar Agora
                </Button>
              </div>
              
              <div className="mt-4 p-4 bg-success/10 rounded-lg">
                <p className="text-sm text-success font-medium">
                  ✓ Orçamento gratuito em até 2 horas
                </p>
                <p className="text-sm text-success font-medium">
                  ✓ Visita técnica sem compromisso
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
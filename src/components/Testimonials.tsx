import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Carlos Silva',
      role: 'Empresário',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'A qualidade das roupas da MOHANA SURF é excepcional. Uso no trabalho e no fim de semana, sempre recebo elogios. O atendimento é impecável!',
    },
    {
      id: 2,
      name: 'Rafael Santos',
      role: 'Designer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Encontrei na MOHANA SURF o equilíbrio perfeito entre conforto e estilo. As peças são versáteis e de excelente qualidade. Recomendo a todos!',
    },
    {
      id: 3,
      name: 'Bruno Costa',
      role: 'Advogado',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Compro na MOHANA SURF a mais de 2 anos. A marca entende perfeitamente o que o homem moderno procura: praticidade sem abrir mão do estilo.',
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de homens que encontraram seu estilo conosco
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`product-card p-8 text-center animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                <Quote className="h-6 w-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-muted-foreground mb-8 leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div className="text-left">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-16 border-t border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Confie em Quem Confia</h3>
            <p className="text-muted-foreground">Milhares de homens já escolheram a MOHANA SURF</p>
          </div>
          
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4.9/5</div>
              <div className="text-sm text-muted-foreground">Avaliação Geral</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">98%</div>
              <div className="text-sm text-muted-foreground">Recomendação</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">1.500+</div>
              <div className="text-sm text-muted-foreground">Avaliações</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
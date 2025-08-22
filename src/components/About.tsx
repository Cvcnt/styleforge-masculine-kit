import { Award, Users, Clock, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Qualidade Premium',
      description: 'Utilizamos apenas os melhores materiais e técnicas de confecção para garantir durabilidade e conforto.',
    },
    {
      icon: Users,
      title: 'Atendimento Personalizado',
      description: 'Nossa equipe está sempre pronta para ajudar você a encontrar o look perfeito para cada ocasião.',
    },
    {
      icon: Clock,
      title: 'Tradição e Inovação',
      description: 'Combinamos anos de experiência em moda masculina com as últimas tendências do mercado.',
    },
    {
      icon: Heart,
      title: 'Paixão pelo que Fazemos',
      description: 'Acreditamos que a moda é uma forma de expressão e autoconfiança para o homem moderno.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-surface">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                Sobre a MOHANA SURF
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Nascida da paixão pelo estilo de vida surf e pela moda masculina casual, 
                  a MOHANA SURF representa mais que uma marca - é um movimento de homens 
                  que valorizam conforto, qualidade e autenticidade.
                </p>
                <p>
                  Desde nossa fundação, acreditamos que cada homem merece roupas que reflitam 
                  sua personalidade única. Nossa coleção é cuidadosamente selecionada para 
                  oferecer peças versáteis que transitam perfeitamente entre o casual e o 
                  elegante.
                </p>
                <p>
                  Com foco na sustentabilidade e responsabilidade social, trabalhamos apenas 
                  com fornecedores que compartilham nossos valores de qualidade e ética.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">10k+</div>
                <div className="text-muted-foreground">Clientes Satisfeitos</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=600&fit=crop&crop=center"
                alt="Loja MOHANA SURF"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-foreground">Certificado de Qualidade</div>
                  <div className="text-sm text-muted-foreground">ISO 9001:2015</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Nossos Valores
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Os pilares que guiam nossa missão de vestir o homem moderno
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`text-center group animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import { ArrowRight } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: 'Camisetas',
      description: 'Conforto para o dia a dia',
      image: 'https://images.unsplash.com/photo-1521567932866-e4e2db5fac97?w=400&h=400&fit=crop&crop=center',
      itemCount: '85+ produtos',
    },
    {
      id: 2,
      name: 'Camisas',
      description: 'Elegância casual',
      image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop&crop=center',
      itemCount: '45+ produtos',
    },
    {
      id: 3,
      name: 'Calças',
      description: 'Conforto e estilo',
      image: 'https://images.unsplash.com/photo-1506629905589-4b9b2ff29d60?w=400&h=400&fit=crop&crop=center',
      itemCount: '60+ produtos',
    },
    {
      id: 4,
      name: 'Bermudas',
      description: 'Para os dias quentes',
      image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=400&fit=crop&crop=center',
      itemCount: '35+ produtos',
    },
    {
      id: 5,
      name: 'Jaquetas',
      description: 'Proteção com estilo',
      image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=400&h=400&fit=crop&crop=center',
      itemCount: '25+ produtos',
    },
    {
      id: 6,
      name: 'Acessórios',
      description: 'Complete seu look',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center',
      itemCount: '40+ produtos',
    },
  ];

  return (
    <section id="categories" className="section-padding bg-gradient-surface">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Nossas Categorias
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Encontre exatamente o que você procura em nossa coleção organizada
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`category-card group h-80 animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="category-overlay group-hover:from-primary/80 transition-all duration-300"></div>
              <div className="category-content">
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-white/90 mb-2">{category.description}</p>
                <p className="text-sm text-accent font-medium mb-4">{category.itemCount}</p>
                <div className="flex items-center text-white group-hover:text-accent transition-colors duration-300">
                  <span className="mr-2">Explorar</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-md">
            <span className="text-primary font-medium">Ver todos os produtos</span>
            <ArrowRight className="h-4 w-4 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="MOHANA SURF - Estilo Masculino"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Estilo Surf para o
          <span className="block text-transparent bg-gradient-to-r from-white via-yellow-200 to-orange-300 bg-clip-text">
            Homem Moderno
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
          Roupas inspiradas no lifestyle surf com qualidade premium. 
          Descubra nossa coleção exclusiva da MOANA SURF.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="btn-hero text-lg px-8 py-4 hover:scale-105 transition-transform duration-300"
          >
            Ver Coleção
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-white text-white hover:bg-white hover:text-coral text-lg px-8 py-4 bg-transparent"
          >
            Nossa História
          </Button>
        </div>

        {/* Stats */}
        <div className="flex justify-center space-x-8 mt-16 pt-8 border-t border-white/20">
          {[
            { number: '500+', label: 'Produtos' },
            { number: '1000+', label: 'Clientes Satisfeitos' },
            { number: '50+', label: 'Marcas Parceiras' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent">{stat.number}</div>
              <div className="text-sm text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
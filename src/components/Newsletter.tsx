import { useState } from 'react';
import { Mail, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: 'Inscrição realizada com sucesso!',
        description: 'Você receberá seu cupom de desconto no email em breve.',
      });
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="section-padding bg-gradient-hero text-white">
      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8">
            <Gift className="h-10 w-10 text-white" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Receba 10% OFF na Primeira Compra
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Inscreva-se em nossa newsletter e seja o primeiro a saber sobre lançamentos, 
            promoções exclusivas e dicas de estilo masculino.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Seu melhor email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="h-12 px-8 bg-white text-primary hover:bg-white/90 font-semibold"
              >
                {isLoading ? 'Enviando...' : 'Garantir Desconto'}
              </Button>
            </div>
          </form>

          {/* Benefits */}
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <Gift className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Ofertas Exclusivas</h3>
              <p className="text-sm text-white/80">Promoções especiais só para assinantes</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Novidades em Primeira Mão</h3>
              <p className="text-sm text-white/80">Seja o primeiro a conhecer nossos lançamentos</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">%</span>
                </div>
              </div>
              <h3 className="font-semibold mb-2">Cupons de Desconto</h3>
              <p className="text-sm text-white/80">Descontos especiais durante o ano todo</p>
            </div>
          </div>

          {/* Privacy Note */}
          <p className="text-xs text-white/60 mt-8 max-w-2xl mx-auto">
            Respeitamos sua privacidade. Você pode cancelar a inscrição a qualquer momento. 
            Não compartilhamos seus dados com terceiros.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
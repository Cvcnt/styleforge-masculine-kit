import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  MapPin, 
  Phone, 
  Mail,
  CreditCard,
  Truck,
  Shield,
  RotateCcw
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const footerLinks = {
    'Institucional': [
      'Sobre Nós',
      'Nossa História',
      'Trabalhe Conosco',
      'Sustentabilidade',
    ],
    'Atendimento': [
      'Central de Ajuda',
      'Trocas e Devoluções',
      'Guia de Tamanhos',
      'Fale Conosco',
    ],
    'Políticas': [
      'Privacidade',
      'Termos de Uso',
      'Cookies',
      'Entrega',
    ],
  };

  const features = [
    {
      icon: Truck,
      title: 'Frete Grátis',
      description: 'Acima de R$ 199',
    },
    {
      icon: RotateCcw,
      title: 'Troca Fácil',
      description: '30 dias para trocar',
    },
    {
      icon: Shield,
      title: 'Compra Segura',
      description: 'Certificado SSL',
    },
    {
      icon: CreditCard,
      title: 'Parcelamento',
      description: 'Em até 12x sem juros',
    },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Features Bar */}
      <div className="border-b border-white/10">
        <div className="container-max px-4 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <feature.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-sm">{feature.title}</div>
                  <div className="text-xs text-white/70">{feature.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-max px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="/lovable-uploads/03b8863e-3471-45a0-9a76-18b7a1f0fd5d.png" 
                  alt="MOANA SURF Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">MOANA SURF</h3>
                <p className="text-xs text-white/70">Wood Boards Surf</p>
              </div>
            </div>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              Lifestyle surf e wood boards artesanais com qualidade premium. 
              Descubra seu estilo com a MOANA SURF.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-white/10 hover:bg-accent hover:scale-110 transition-all duration-300"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-lg mb-6">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-white/80 hover:text-accent transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-1" />
                <div className="text-white/80">
                  <div>Rua das Palmeiras, 123</div>
                  <div>Centro - São Paulo/SP</div>
                  <div>CEP: 01234-567</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <div className="text-white/80">(11) 99999-9999</div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <div className="text-white/80">contato@moanasurf.com</div>
              </div>
            </div>

            {/* WhatsApp */}
            <Button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white">
              <Phone className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-max px-4 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-white/60 text-sm">
              © 2024 MOANA SURF. Todos os direitos reservados.
            </div>
            
            {/* Payment Methods */}
            <div className="flex items-center space-x-4">
              <span className="text-white/60 text-sm">Formas de pagamento:</span>
              <div className="flex space-x-2">
                {['Visa', 'Master', 'Pix', 'Boleto'].map((method, index) => (
                  <div
                    key={index}
                    className="w-8 h-6 bg-white/10 rounded border border-white/20 flex items-center justify-center"
                  >
                    <span className="text-xs text-white/60">{method.slice(0, 2)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
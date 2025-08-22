import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '5511999999999'; // Número do WhatsApp (incluir código do país)
  
  const quickMessages = [
    'Olá! Gostaria de saber mais sobre os produtos.',
    'Preciso de ajuda com tamanhos.',
    'Quero informações sobre entregas.',
    'Tenho dúvidas sobre trocas e devoluções.',
  ];

  const sendMessage = (message: string) => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Widget */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-2xl shadow-xl border border-border p-6 w-80 animate-scale-in">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">MOHANA SURF</h3>
                <p className="text-sm text-green-500">Online - Resposta rápida</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="rounded-full"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <p className="text-muted-foreground mb-4 text-sm">
            Olá! Como posso ajudar você hoje?
          </p>
          
          <div className="space-y-2">
            {quickMessages.map((message, index) => (
              <button
                key={index}
                onClick={() => sendMessage(message)}
                className="w-full text-left p-3 rounded-lg bg-muted hover:bg-muted/80 text-sm transition-colors duration-200"
              >
                {message}
              </button>
            ))}
            
            <button
              onClick={() => sendMessage('Olá! Gostaria de conversar com um atendente.')}
              className="w-full p-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors duration-200"
            >
              Conversar no WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </Button>

      {/* Pulse Animation */}
      {!isOpen && (
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
      )}
    </div>
  );
};

export default WhatsAppFloat;
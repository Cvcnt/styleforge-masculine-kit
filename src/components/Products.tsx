import { useState } from 'react';
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import productTshirt from '@/assets/product-tshirt.jpg';
import productShirt from '@/assets/product-shirt.jpg';
import productJeans from '@/assets/product-jeans.jpg';

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'camisetas', label: 'Camisetas' },
    { id: 'camisas', label: 'Camisas' },
    { id: 'calcas', label: 'Calças' },
    { id: 'promocao', label: 'Promoção' },
  ];

  const products = [
    {
      id: 1,
      name: 'Camiseta Básica Premium',
      price: 89.90,
      originalPrice: 129.90,
      image: productTshirt,
      category: 'camisetas',
      rating: 4.8,
      reviews: 127,
      isNew: true,
      isOnSale: true,
      colors: ['Azul', 'Branco', 'Preto', 'Cinza'],
      sizes: ['P', 'M', 'G', 'GG'],
    },
    {
      id: 2,
      name: 'Camisa Casual Chambray',
      price: 159.90,
      originalPrice: 199.90,
      image: productShirt,
      category: 'camisas',
      rating: 4.9,
      reviews: 89,
      isNew: false,
      isOnSale: true,
      colors: ['Azul Claro', 'Branco', 'Azul Escuro'],
      sizes: ['P', 'M', 'G', 'GG', 'XG'],
    },
    {
      id: 3,
      name: 'Calça Jeans Slim Fit',
      price: 199.90,
      originalPrice: null,
      image: productJeans,
      category: 'calcas',
      rating: 4.7,
      reviews: 203,
      isNew: true,
      isOnSale: false,
      colors: ['Azul Escuro', 'Azul Médio', 'Preto'],
      sizes: ['38', '40', '42', '44', '46'],
    },
    {
      id: 4,
      name: 'Polo Piquet Clássica',
      price: 119.90,
      originalPrice: 149.90,
      image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop&crop=center',
      category: 'camisetas',
      rating: 4.6,
      reviews: 156,
      isNew: false,
      isOnSale: true,
      colors: ['Azul Marinho', 'Branco', 'Preto', 'Verde'],
      sizes: ['P', 'M', 'G', 'GG'],
    },
    {
      id: 5,
      name: 'Bermuda Sarja Comfort',
      price: 139.90,
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=400&fit=crop&crop=center',
      category: 'calcas',
      rating: 4.8,
      reviews: 94,
      isNew: true,
      isOnSale: false,
      colors: ['Bege', 'Azul Marinho', 'Verde Militar'],
      sizes: ['38', '40', '42', '44'],
    },
    {
      id: 6,
      name: 'Moletom Capuz Premium',
      price: 179.90,
      originalPrice: 229.90,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop&crop=center',
      category: 'camisetas',
      rating: 4.9,
      reviews: 78,
      isNew: false,
      isOnSale: true,
      colors: ['Cinza Mescla', 'Preto', 'Azul Marinho'],
      sizes: ['P', 'M', 'G', 'GG'],
    },
  ];

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : activeFilter === 'promocao' 
      ? products.filter(p => p.isOnSale)
      : products.filter(p => p.category === activeFilter);

  return (
    <section id="products" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Produtos em Destaque
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra nossa seleção especial de roupas masculinas com qualidade premium
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter.id 
                  ? 'bg-primary text-primary-foreground shadow-accent' 
                  : 'hover:border-primary hover:text-primary'
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`product-card group animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.isNew && (
                    <Badge className="bg-accent text-accent-foreground">Novo</Badge>
                  )}
                  {product.isOnSale && (
                    <Badge className="bg-destructive text-destructive-foreground">
                      {Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)}% OFF
                    </Badge>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="icon" variant="secondary" className="rounded-full shadow-md">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="rounded-full shadow-md">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>

                {/* Quick Add to Cart */}
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <Button className="w-full btn-primary shadow-md">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Adicionar ao Carrinho
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Colors */}
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">Cores:</span>
                  <div className="flex space-x-1">
                    {product.colors.slice(0, 3).map((color, i) => (
                      <div
                        key={i}
                        className="w-4 h-4 rounded-full border-2 border-gray-200"
                        style={{ 
                          backgroundColor: color === 'Branco' ? '#fff' : 
                                         color === 'Preto' ? '#000' : 
                                         color === 'Azul' ? '#3b82f6' :
                                         color === 'Cinza' ? '#6b7280' : '#3b82f6'
                        }}
                        title={color}
                      />
                    ))}
                    {product.colors.length > 3 && (
                      <span className="text-xs text-muted-foreground">+{product.colors.length - 3}</span>
                    )}
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-primary">
                    R$ {product.price.toFixed(2).replace('.', ',')}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8 py-3">
            Carregar Mais Produtos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
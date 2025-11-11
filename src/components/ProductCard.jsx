import React from 'react';
import { ShoppingCart, Eye } from 'lucide-react';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import useCartStore from '../store/useCartStore';

export default function ProductCard({ product, onViewDetails }) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addItem(product);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
      <div
        onClick={() => onViewDetails(product)}
        className="relative h-48 overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <Badge className="absolute top-2 right-2">
          {product.category}
        </Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-3">
          {product.description}
        </p>
        <p className="text-orange-600 font-bold text-xl">
          {parseInt(product.price).toLocaleString()} so'm
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button
          onClick={handleAddToCart}
          className="flex-1"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Savatga qo'shish
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={(e) => {
            e.stopPropagation();
            onViewDetails(product);
          }}
        >
          <Eye className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}

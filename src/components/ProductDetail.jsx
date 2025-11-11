import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import useCartStore from '../store/useCartStore';

export default function ProductDetail({ product, open, onClose }) {
  const addItem = useCartStore((state) => state.addItem);

  if (!product) return null;

  const handleAddToCart = () => {
    addItem(product);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl" onClose={onClose}>
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
        </DialogHeader>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <Badge className="w-fit">{product.category}</Badge>
            <div>
              <h3 className="font-semibold text-lg mb-2">Ta'rif</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
            <div className="mt-auto">
              <p className="text-sm text-gray-500 mb-2">Narxi:</p>
              <p className="text-orange-600 font-bold text-3xl mb-4">
                {parseInt(product.price).toLocaleString()} so'm
              </p>
              <Button onClick={handleAddToCart} className="w-full" size="lg">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Savatga qo'shish
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

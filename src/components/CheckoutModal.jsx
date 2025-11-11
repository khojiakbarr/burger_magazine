import React from 'react';
import { useForm } from 'react-hook-form';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import useCartStore from '../store/useCartStore';
import useOrderStore from '../store/useOrderStore';
import { useNavigate } from 'react-router-dom';

export default function CheckoutModal({ open, onClose }) {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCartStore();
  const addOrder = useOrderStore((state) => state.addOrder);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const order = {
      ...data,
      items: items,
      total: getTotalPrice(),
    };

    addOrder(order);
    clearCart();
    reset();
    onClose();

    alert('Buyurtmangiz qabul qilindi! Tez orada siz bilan bog\'lanamiz.');
    navigate('/');
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent onClose={onClose}>
        <DialogHeader>
          <DialogTitle>Buyurtmani rasmiylashtirish</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div>
            <Label htmlFor="name">Ism *</Label>
            <Input
              id="name"
              {...register('name', { required: 'Ism kiritish shart' })}
              placeholder="Ismingizni kiriting"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="phone">Telefon raqam *</Label>
            <Input
              id="phone"
              {...register('phone', {
                required: 'Telefon raqam kiritish shart',
                pattern: {
                  value: /^[\d\s+()-]+$/,
                  message: 'Noto\'g\'ri telefon raqam',
                },
              })}
              placeholder="+998 90 123 45 67"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="address">Manzil *</Label>
            <Textarea
              id="address"
              {...register('address', { required: 'Manzil kiritish shart' })}
              placeholder="Yetkazib berish manzilini kiriting"
              rows={3}
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="comment">Izoh (ixtiyoriy)</Label>
            <Textarea
              id="comment"
              {...register('comment')}
              placeholder="Qo'shimcha ma'lumot"
              rows={2}
            />
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between text-lg font-bold mb-4">
              <span>Jami to'lov:</span>
              <span className="text-orange-600">
                {getTotalPrice().toLocaleString()} so'm
              </span>
            </div>
          </div>

          <div className="flex gap-2">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Bekor qilish
            </Button>
            <Button type="submit" className="flex-1">
              Tasdiqlash
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

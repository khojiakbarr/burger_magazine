import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import useProductStore from '../store/useProductStore';

export default function ProductFormModal({ open, onClose, product }) {
  const { addProduct, updateProduct, categories, fetchCategories } = useProductStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  useEffect(() => {
    if (product) {
      setValue('name', product.name);
      setValue('image', product.image);
      setValue('price', product.price);
      setValue('category', product.category);
      setValue('description', product.description);
    } else {
      reset();
    }
  }, [product, setValue, reset]);

  const onSubmit = async (data) => {
    try {
      if (product) {
        await updateProduct(product.id, data);
      } else {
        await addProduct(data);
      }
      reset();
      onClose();
    } catch (error) {
      alert('Xatolik yuz berdi!');
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent onClose={onClose} className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            {product ? 'Mahsulotni tahrirlash' : 'Yangi mahsulot qo\'shish'}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Mahsulot nomi *</Label>
              <Input
                id="name"
                {...register('name', { required: 'Nom kiritish shart' })}
                placeholder="Masalan: Big Burger"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="price">Narx (so'm) *</Label>
              <Input
                id="price"
                type="number"
                {...register('price', {
                  required: 'Narx kiritish shart',
                  min: { value: 0, message: 'Narx 0 dan katta bo\'lishi kerak' },
                })}
                placeholder="25000"
              />
              {errors.price && (
                <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="category">Kategoriya *</Label>
            <select
              id="category"
              {...register('category', { required: 'Kategoriya tanlash shart' })}
              className="flex h-9 w-full rounded-md border border-gray-300 bg-transparent px-3 py-1 text-sm shadow-sm"
            >
              <option value="">Kategoriya tanlang</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.category}>
                  {cat.category}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="image">Rasm URL *</Label>
            <Input
              id="image"
              {...register('image', {
                required: 'Rasm URL kiritish shart',
                pattern: {
                  value: /^https?:\/\/.+/,
                  message: 'To\'g\'ri URL kiriting',
                },
              })}
              placeholder="https://example.com/image.jpg"
            />
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="description">Ta'rif *</Label>
            <Textarea
              id="description"
              {...register('description', { required: 'Ta\'rif kiritish shart' })}
              placeholder="Mahsulot haqida ma'lumot"
              rows={4}
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
            )}
          </div>

          <div className="flex gap-2">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Bekor qilish
            </Button>
            <Button type="submit" className="flex-1">
              {product ? 'Saqlash' : 'Qo\'shish'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

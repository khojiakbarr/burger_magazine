import React, { useEffect, useState } from 'react';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import useProductStore from '../store/useProductStore';
import ProductFormModal from '../components/ProductFormModal';

export default function Admin() {
  const { products, loading, fetchProducts, deleteProduct } = useProductStore();
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Mahsulotni o\'chirmoqchimisiz?')) {
      try {
        await deleteProduct(id);
      } catch (error) {
        alert('Xatolik yuz berdi!');
      }
    }
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingProduct(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Admin Panel</h1>
        <Button onClick={() => setShowForm(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Mahsulot qo'shish
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Mahsulotlar ro'yxati</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Rasm</th>
                  <th className="text-left p-4">Nomi</th>
                  <th className="text-left p-4">Kategoriya</th>
                  <th className="text-left p-4">Narx</th>
                  <th className="text-left p-4">Ta'rif</th>
                  <th className="text-right p-4">Amallar</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </td>
                    <td className="p-4 font-semibold">{product.name}</td>
                    <td className="p-4">
                      <Badge>{product.category}</Badge>
                    </td>
                    <td className="p-4 font-semibold text-orange-600">
                      {parseInt(product.price).toLocaleString()} so'm
                    </td>
                    <td className="p-4 max-w-xs truncate text-gray-600">
                      {product.description}
                    </td>
                    <td className="p-4">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleEdit(product)}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="destructive"
                          size="icon"
                          onClick={() => handleDelete(product.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {products.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">Mahsulotlar yo'q</p>
            </div>
          )}
        </CardContent>
      </Card>

      <ProductFormModal
        open={showForm}
        onClose={handleCloseForm}
        product={editingProduct}
      />
    </div>
  );
}

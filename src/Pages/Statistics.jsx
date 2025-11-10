import React, { useEffect, useMemo } from 'react';
import { Package, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import useOrderStore from '../store/useOrderStore';
import useProductStore from '../store/useProductStore';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const COLORS = ['#ea580c', '#fb923c', '#fdba74', '#fed7aa', '#ffedd5'];

export default function Statistics() {
  const { orders, getOrderStats } = useOrderStore();
  const { fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const stats = getOrderStats();

  const categoryData = useMemo(() => {
    const categoryCounts = {};
    orders.forEach((order) => {
      order.items.forEach((item) => {
        categoryCounts[item.category] = (categoryCounts[item.category] || 0) + item.quantity;
      });
    });
    return Object.entries(categoryCounts).map(([name, value]) => ({
      name,
      value,
    }));
  }, [orders]);


  const topProducts = useMemo(() => {
    const productCounts = {};
    orders.forEach((order) => {
      order.items.forEach((item) => {
        if (!productCounts[item.name]) {
          productCounts[item.name] = {
            name: item.name,
            quantity: 0,
            revenue: 0,
          };
        }
        productCounts[item.name].quantity += item.quantity;
        productCounts[item.name].revenue += item.quantity * parseFloat(item.price);
      });
    });
    return Object.values(productCounts)
      .sort((a, b) => b.quantity - a.quantity)
      .slice(0, 5);
  }, [orders]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Statistika</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Jami buyurtmalar</CardTitle>
            <ShoppingCart className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Kutilayotgan</CardTitle>
            <Package className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.pending}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Bajarilgan</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.completed}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Jami daromad</CardTitle>
            <DollarSign className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {stats.totalRevenue.toLocaleString()} so'm
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* Top Products */}
        <Card>
          <CardHeader>
            <CardTitle>Eng ko'p sotilgan mahsulotlar</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topProducts}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="quantity" fill="#ea580c" name="Soni" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Category Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Kategoriya bo'yicha taqsimot</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle>So'nggi buyurtmalar</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">ID</th>
                  <th className="text-left p-4">Mijoz</th>
                  <th className="text-left p-4">Telefon</th>
                  <th className="text-left p-4">Jami</th>
                  <th className="text-left p-4">Holat</th>
                  <th className="text-left p-4">Sana</th>
                </tr>
              </thead>
              <tbody>
                {orders.slice(-10).reverse().map((order) => (
                  <tr key={order.id} className="border-b hover:bg-gray-50">
                    <td className="p-4 font-mono text-sm">#{order.id.slice(-6)}</td>
                    <td className="p-4">{order.name}</td>
                    <td className="p-4">{order.phone}</td>
                    <td className="p-4 font-semibold text-orange-600">
                      {order.total.toLocaleString()} so'm
                    </td>
                    <td className="p-4">
                      <Badge variant={order.status === 'completed' ? 'default' : 'secondary'}>
                        {order.status === 'pending' ? 'Kutilmoqda' : 'Bajarilgan'}
                      </Badge>
                    </td>
                    <td className="p-4 text-sm text-gray-600">
                      {new Date(order.createdAt).toLocaleString('uz-UZ')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {orders.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">Hozircha buyurtmalar yo'q</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

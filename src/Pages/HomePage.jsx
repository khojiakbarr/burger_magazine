import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Utensils, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export default function HomePage() {
  const features = [
    {
      icon: Utensils,
      title: 'Mazali Taomlar',
      description: 'Eng mazali burgerlar va lavashlar',
    },
    {
      icon: ShoppingBag,
      title: 'Tez Yetkazib Berish',
      description: 'Buyurtmangizni tezkor yetkazib beramiz',
    },
    {
      icon: TrendingUp,
      title: 'Qulay Narxlar',
      description: 'Har bir mijoz uchun qulay narxlar',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Burger Magazine'ga xush kelibsiz!
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Eng yaxshi burgerlar va lavashlar bir joyda. Buyurtma bering va zavqlaning!
          </p>
          <Link to="/products">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Mahsulotlarni ko'rish
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nima uchun biz?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Buyurtma berishga tayormisiz?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Bizning menyumizdagi mazali taomlarni sinab ko'ring
          </p>
          <Link to="/products">
            <Button size="lg" className="text-lg px-8 py-6">
              Hoziroq buyurtma bering
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

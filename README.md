# 🍔 Burger Magazine - E-commerce Platform

Modern burger va lavash buyurtma berish tizimi React.js va shadcn/ui asosida qurilgan.

## ✨ Xususiyatlar

- 🛒 **Shopping Cart** - To'liq funksional savat tizimi
- 👨‍💼 **Admin Panel** - Mahsulotlarni boshqarish (CRUD)
- 📊 **Statistics** - Buyurtmalar va daromad statistikasi
- 📱 **Responsive Design** - Barcha qurilmalarda ishlaydi
- 🎨 **Modern UI** - shadcn/ui komponentlari

## 🛠️ Texnologiyalar

- **Frontend**: React.js 18
- **UI Library**: shadcn/ui
- **State Management**: Zustand
- **Forms**: React Hook Form
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Backend**: JSON Server (mock API)
- **Testing**: Jest + React Testing Library

## 🚀 Ishga Tushirish

### 1. Dependencies ni o'rnatish

```bash
npm install
```

### 2. Backend serverni ishga tushirish

Birinchi terminalda:

```bash
npm run server
```

Server `http://localhost:3001` da ishga tushadi.

### 3. Frontend ilovasini ishga tushirish

Ikkinchi terminalda:

```bash
npm start
```

Ilova `http://localhost:3000` da ochiladi.

## 📁 Loyiha Tuzilishi

```
src/
├── components/          # UI komponentlari
│   ├── ui/             # shadcn/ui komponentlari
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── ProductDetail.jsx
│   └── ...
├── Pages/              # Sahifalar
│   ├── HomePage.jsx
│   ├── Products.jsx
│   ├── Cart.jsx
│   ├── Admin.jsx
│   └── Statistics.jsx
├── store/              # Zustand stores
│   ├── useCartStore.js
│   ├── useProductStore.js
│   └── useOrderStore.js
└── lib/
    └── utils.js
```

## 🧪 Testlar

Testlarni ishga tushirish:

```bash
npm test
```

## 🏗️ Production Build

```bash
npm run build
```

Build fayllari `build/` papkasida yaratiladi.

## 📝 Qo'shimcha Ma'lumot

Batafsil setup va foydalanish bo'yicha yo'riqnoma uchun [SETUP.md](./SETUP.md) faylini ko'ring.

## 📄 License

MIT License - Copyright (c) 2024 Burger Magazine

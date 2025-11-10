# Burger Magazine - E-commerce Application

## Texnologiyalar

- **Frontend Framework**: React.js
- **UI Library**: shadcn/ui
- **Forms**: React Hook Form
- **State Management**: Zustand
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Backend**: JSON Server (mock API)
- **Testing**: React Testing Library & Jest

## Xususiyatlar

### 🍔 Foydalanuvchi Qismi
- Mahsulotlarni ko'rish va qidirish
- Kategoriya bo'yicha filtrlash
- Mahsulot tafsilotlarini ko'rish
- Savatga mahsulot qo'shish
- Buyurtma berish

### 👨‍💼 Admin Panel
- Mahsulot qo'shish (CRUD operatsiyalari)
- Mahsulotlarni tahrirlash
- Mahsulotlarni o'chirish
- Mahsulotlar ro'yxatini ko'rish

### 📊 Statistika
- Jami buyurtmalar soni
- Daromad hisoboti
- Eng ko'p sotilgan mahsulotlar
- Kategoriya bo'yicha taqsimot
- So'nggi buyurtmalar

## O'rnatish va Ishga Tushirish

### 1. Kerakli paketlarni o'rnatish

```bash
npm install
```

### 2. Backend (JSON Server) ni ishga tushirish

Alohida terminalda:

```bash
npm run server
```

Bu server `http://localhost:3001` da ishga tushadi.

### 3. React ilovasini ishga tushirish

Boshqa terminalda:

```bash
npm start
```

Ilova `http://localhost:3000` da ochiladi.

## Testlarni ishga tushirish

```bash
npm test
```

## Build

Production uchun build qilish:

```bash
npm run build
```

## Loyiha Tuzilishi

```
src/
├── components/          # UI komponentlari
│   ├── ui/             # shadcn/ui komponentlari
│   ├── Navbar.jsx      # Navigatsiya
│   ├── ProductCard.jsx # Mahsulot kartasi
│   ├── ProductDetail.jsx
│   ├── ProductFormModal.jsx
│   └── CheckoutModal.jsx
├── Pages/              # Sahifalar
│   ├── HomePage.jsx    # Bosh sahifa
│   ├── Products.jsx    # Mahsulotlar sahifasi
│   ├── Cart.jsx        # Savat
│   ├── Admin.jsx       # Admin panel
│   └── Statistics.jsx  # Statistika
├── store/              # Zustand stores
│   ├── useCartStore.js
│   ├── useProductStore.js
│   └── useOrderStore.js
├── layout/
│   └── MainLayout.jsx
├── lib/
│   └── utils.js        # Utility funksiyalar
└── App.js
```

## API Endpoints

JSON Server endpoints:

- `GET /foods` - Barcha mahsulotlar
- `GET /foods/:id` - Bitta mahsulot
- `POST /foods` - Yangi mahsulot qo'shish
- `PUT /foods/:id` - Mahsulotni yangilash
- `DELETE /foods/:id` - Mahsulotni o'chirish
- `GET /categories` - Kategoriyalar

## Sahifalar

1. **Bosh sahifa** (`/`) - Landing page
2. **Mahsulotlar** (`/products`) - Mahsulotlar katalogi
3. **Savat** (`/cart`) - Shopping cart
4. **Admin** (`/admin`) - Mahsulotlarni boshqarish
5. **Statistika** (`/statistics`) - Buyurtmalar va daromad statistikasi

## Komponentlar

### shadcn/ui Komponentlari
- Button
- Card
- Input
- Label
- Badge
- Textarea
- Dialog

### Custom Komponentlar
- Navbar - Navigatsiya menyu
- ProductCard - Mahsulot kartasi
- ProductDetail - Mahsulot tafsilotlari
- ProductFormModal - Mahsulot qo'shish/tahrirlash forma
- CheckoutModal - Buyurtma berish forma

## State Management

### Cart Store (useCartStore)
- `items` - Savatdagi mahsulotlar
- `addItem()` - Mahsulot qo'shish
- `removeItem()` - Mahsulot o'chirish
- `updateQuantity()` - Miqdorni o'zgartirish
- `clearCart()` - Savatni tozalash
- `getTotalPrice()` - Umumiy narx
- `getTotalItems()` - Umumiy mahsulotlar soni

### Product Store (useProductStore)
- `products` - Mahsulotlar ro'yxati
- `categories` - Kategoriyalar
- `fetchProducts()` - Mahsulotlarni yuklash
- `addProduct()` - Yangi mahsulot qo'shish
- `updateProduct()` - Mahsulotni yangilash
- `deleteProduct()` - Mahsulotni o'chirish

### Order Store (useOrderStore)
- `orders` - Buyurtmalar
- `addOrder()` - Buyurtma qo'shish
- `updateOrderStatus()` - Buyurtma holatini o'zgartirish
- `getOrderStats()` - Statistika

## Testlar

Testlar mavjud:
- Cart store testlari
- ProductCard component testlari
- Navbar component testlari

## Keyingi Qadamlar

- [ ] Real backend integratsiyasi
- [ ] Authentication qo'shish
- [ ] Payment gateway integratsiyasi
- [ ] Order tracking
- [ ] Email notifications
- [ ] PWA support

## Muallif

Burger Magazine E-commerce Application

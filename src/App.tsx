import { useState, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import Menu from './components/sections/Menu';
import Booking from './components/sections/Booking';
import Delivery from './components/sections/Delivery';
import Reviews from './components/sections/Reviews';
import Contacts from './components/sections/Contacts';
import Footer from './components/Footer';

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = useCallback((item: { name: string; price: number }) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.name === item.name);
      if (existing) {
        return prev.map((i) => (i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [...prev, { name: item.name, price: item.price, quantity: 1 }];
    });
  }, []);

  return (
    // Глобальный градиентный фон для всего сайта
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-bordeaux-950 text-coffee-100">
      <Header />
      <main>
        <Hero />
        <Menu onAddToCart={handleAddToCart} />
        <Booking />
        <Delivery cart={cart} />
        <Reviews />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
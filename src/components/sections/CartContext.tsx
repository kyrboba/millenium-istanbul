import { createContext, useState, ReactNode } from 'react';

// Определяем типы для товара
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// Создаем контекст
export const CartContext = createContext<any>(null);

// Создаем провайдер
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: any, quantity: number) => {
    setCart((prev) => [...prev, { ...item, quantity }]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
import { createContext, useState, ReactNode } from 'react';

export interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

interface AddItem {
  name: string;
  price: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: AddItem, quantity: number) => void;
}

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: AddItem, quantity: number) => {
    if (quantity > 0) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
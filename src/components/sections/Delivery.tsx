import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Trash2, Plus, Minus, MapPin, Phone, ArrowRight } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

interface DeliveryProps {
  cart: CartItem[];
  onUpdateCart: (cart: CartItem[]) => void;
}

export default function Delivery({ cart, onUpdateCart }: DeliveryProps) {
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const updateQty = (name: string, delta: number) => {
    const updated = cart
      .map((item) => (item.name === name ? { ...item, quantity: item.quantity + delta } : item))
      .filter((item) => item.quantity > 0);
    onUpdateCart(updated);
  };

  const removeItem = (name: string) => {
    onUpdateCart(cart.filter((item) => item.name !== name));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length > 0 && address && phone && name) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onUpdateCart([]);
        setAddress('');
        setPhone('');
        setName('');
      }, 4000);
    }
  };

  return (
    <section id="delivery" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
      <div className="absolute inset-0 turkish-pattern opacity-20" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-12 bg-gold-400/40" />
              <ShoppingBag size={20} className="text-gold-400" />
              <div className="h-px w-12 bg-gold-400/40" />
            </div>
            <h2 className="section-title">Заказ на дом</h2>
            <p className="section-subtitle">Доставка по Бессарабке</p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Cart */}
          <ScrollReveal delay={0.1} className="lg:col-span-3">
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-coffee-100 mb-4 flex items-center gap-2">
                <ShoppingBag size={18} className="text-gold-400" />
                Ваша корзина
                {cart.length > 0 && (
                  <span className="ml-auto text-sm text-gold-400 font-medium">
                    {cart.reduce((s, i) => s + i.quantity, 0)} {cart.reduce((s, i) => s + i.quantity, 0) === 1 ? 'позиция' : 'позиции'}
                  </span>
                )}
              </h3>

              <AnimatePresence>
                {cart.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-12 text-coffee-500"
                  >
                    <ShoppingBag size={48} className="mx-auto mb-3 text-coffee-700" />
                    <p>Корзина пуста</p>
                    <p className="text-sm mt-1">Выберите блюда в меню</p>
                  </motion.div>
                ) : (
                  <div className="space-y-3">
                    {cart.map((item) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-dark-800/50 border border-gold-400/10"
                      >
                        <div className="flex-1">
                          <p className="text-coffee-100 font-medium">{item.name}</p>
                          <p className="text-gold-400 text-sm">{item.price} лей</p>
                        </div>
                        <div className="flex items-center gap-1 bg-dark-700 rounded-lg border border-gold-400/10">
                          <button
                            onClick={() => updateQty(item.name, -1)}
                            className="p-1.5 text-coffee-400 hover:text-gold-400 transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-6 text-center text-sm text-coffee-100 font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQty(item.name, 1)}
                            className="p-1.5 text-coffee-400 hover:text-gold-400 transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.name)}
                          className="p-2 text-coffee-500 hover:text-bordeaux-400 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </motion.div>
                    ))}

                    <div className="border-t border-gold-400/10 pt-4 mt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-coffee-300">Итого:</span>
                        <span className="text-2xl font-bold gold-text">{total} лей</span>
                      </div>
                    </div>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={0.2} className="lg:col-span-2">
            <div className="glass-card rounded-2xl p-6">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold gold-text mb-2">Заказ отправлен!</h3>
                  <p className="text-coffee-300">Мы перезвоним для подтверждения</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-semibold text-coffee-100 mb-2">Данные доставки</h3>
                  <div>
                    <label className="block text-coffee-200 text-sm font-medium mb-1.5 flex items-center gap-2">
                      <MapPin size={14} className="text-gold-400" />
                      Адрес доставки
                    </label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="ул. Карла Маркса 67, кв. 5"
                      className="input-turkish"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-coffee-200 text-sm font-medium mb-1.5">Ваше имя</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Иван Петров"
                      className="input-turkish"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-coffee-200 text-sm font-medium mb-1.5 flex items-center gap-2">
                      <Phone size={14} className="text-gold-400" />
                      Телефон
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+373 123 456 78"
                      className="input-turkish"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={cart.length === 0}
                    className={`btn-gold w-full ${cart.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    Оформить заказ
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

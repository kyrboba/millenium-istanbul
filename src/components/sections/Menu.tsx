import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Wine, UtensilsCrossed, Flame, Plus, Minus } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

interface MenuItem {
  name: string;
  price: number;
  description?: string;
  special?: boolean;
  image?: string;
}

interface MenuCategory {
  id: string;
  label: string;
  icon: React.ReactNode;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: 'bar',
    label: 'Бар',
    icon: <Wine size={18} />,
    items: [
      { name: 'Чай (ассорти)', price: 20, description: 'Чёрный, зелёный, травяной' },
      { name: 'Американо', price: 25, description: 'Классический американо' },
      { name: 'Капучино', price: 30, description: 'С нежной молочной пенкой' },
      { name: 'Латте', price: 35, description: 'Мягкий кофе с молоком' },
      { name: 'Эспрессо', price: 20, description: 'Крепкий и насыщенный' },
      { name: 'Свежевыжатый сок', price: 20, description: 'Апельсин, яблоко, грейпфрут' },
      { name: 'Пиво на розлив', price: 25, description: 'Светлое, тёмное, крафтовое' },
    ],
  },
  {
    id: 'kitchen',
    label: 'Кухня',
    icon: <UtensilsCrossed size={18} />,
    items: [
      { name: 'Мезе platter', price: 120, description: 'Ассорти турецких закусок', special: true, image: '/images/menu/WhatsApp_Image_2026-06-20_at_19.17.42_(2).jpeg' },
      { name: 'Пиде с сыром', price: 85, description: 'Турецкая лепёшка с сыром', image: '/images/menu/WhatsApp_Image_2026-06-20_at_19.17.42_(3).jpeg' },
      { name: 'Лахмаджун', price: 75, description: 'Тонкая лепёшка с мясом', image: '/images/menu/WhatsApp_Image_2026-06-20_at_19.17.42_(4).jpeg' },
      { name: 'Дёнер кебаб', price: 95, description: 'Сочное мясо с овощами', image: '/images/menu/WhatsApp_Image_2026-06-20_at_19.17.42_(5).jpeg' },
      { name: 'Искендер кебаб', price: 130, description: 'Кебаб с томатным соусом и йогуртом', image: '/images/menu/WhatsApp_Image_2026-06-20_at_19.17.42_(6).jpeg' },
      { name: 'Манты', price: 90, description: 'Турецкие пельмени с мясом' },
      { name: 'Баклава', price: 55, description: 'Сладость с фисташками и мёдом', special: true },
      { name: 'Кунефе', price: 65, description: 'Сырный десерт с сиропом', special: true },
    ],
  },
  {
    id: 'hookah',
    label: 'Кальян',
    icon: <Flame size={18} />,
    items: [
      { name: 'Классический кальян', price: 120, description: 'Традиционный кальян на 1 чашу', special: true },
      { name: 'Премиум кальян', price: 160, description: 'Редкие табаки и экзотические миксы' },
      { name: 'Фруктовый кальян', price: 180, description: 'На апельсине, ананасе или грейпфруте' },
      { name: 'Молочный кальян', price: 150, description: 'Мягкий дым с молочным вкусом' },
      { name: 'Доп. чаша', price: 50, description: 'Вторая чаша для микса' },
    ],
  },
];

interface MenuProps {
  onAddToCart?: (item: MenuItem) => void;
}

export default function Menu({ onAddToCart }: MenuProps) {
  const [activeTab, setActiveTab] = useState('bar');
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const activeCategory = menuData.find((c) => c.id === activeTab)!;

  const qty = (name: string) => quantities[name] || 0;
  const setQty = (name: string, v: number) => {
    if (v < 0) return;
    setQuantities((prev) => ({ ...prev, [name]: v }));
  };

  const handleAddToCart = (item: MenuItem) => {
    const count = qty(item.name);
    if (count > 0 && onAddToCart) {
      for (let i = 0; i < count; i++) onAddToCart(item);
      setQty(item.name, 0);
    }
  };

  return (
    <section id="menu" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
      <div className="absolute inset-0 turkish-pattern opacity-20" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-12 bg-gold-400/40" />
              <Coffee size={20} className="text-gold-400" />
              <div className="h-px w-12 bg-gold-400/40" />
            </div>
            <h2 className="section-title">Наше меню</h2>
            <p className="section-subtitle">Вкус Востока в каждом блюде</p>
          </div>
        </ScrollReveal>

        {/* Tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1 rounded-xl bg-dark-800/80 border border-gold-400/10">
              {menuData.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeTab === cat.id
                      ? 'bg-gold-400/15 text-gold-400 border border-gold-400/20'
                      : 'text-coffee-400 hover:text-coffee-200'
                  }`}
                >
                  {cat.icon}
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-4"
          >
            {activeCategory.items.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className={`glass-card rounded-xl p-5 flex items-start gap-4 group hover:border-gold-400/30 transition-all duration-300 ${
                  item.special ? 'border-gold-400/30' : ''
                }`}
              >
                {/* Image */}
                {item.image ? (
                  <div className="shrink-0 w-20 h-20 rounded-lg border border-gold-400/10 overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                ) : (
                  <div className="shrink-0 w-20 h-20 rounded-lg bg-gradient-to-br from-dark-700 to-dark-600 border border-gold-400/10 flex items-center justify-center">
                    <span className="text-gold-400/40 text-xs text-center leading-tight">фото</span>
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-coffee-100 flex items-center gap-2">
                        {item.name}
                        {item.special && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-gold-400/15 text-gold-400 border border-gold-400/20">
                            {activeTab === 'hookah' ? '★ Хит' : '★ Рекомендуем'}
                          </span>
                        )}
                      </h3>
                      <p className="text-coffee-400 text-sm mt-0.5">{item.description}</p>
                    </div>
                    <span className="text-gold-400 font-bold text-lg shrink-0">
                      {item.price} <span className="text-sm font-normal">лей</span>
                    </span>
                  </div>

                  {/* Quantity controls for delivery */}
                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex items-center gap-1 bg-dark-700 rounded-lg border border-gold-400/10">
                      <button
                        onClick={() => setQty(item.name, qty(item.name) - 1)}
                        className="p-1.5 text-coffee-400 hover:text-gold-400 transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-6 text-center text-sm text-coffee-100 font-medium">
                        {qty(item.name)}
                      </span>
                      <button
                        onClick={() => setQty(item.name, qty(item.name) + 1)}
                        className="p-1.5 text-coffee-400 hover:text-gold-400 transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="text-xs text-gold-400 hover:text-gold-300 font-medium transition-colors"
                    >
                      + в заказ
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

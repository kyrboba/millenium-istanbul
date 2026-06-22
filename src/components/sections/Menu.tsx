export default function Menu({ onAddToCart }: { onAddToCart: (item: any) => void }) {
  const menuItems = [
    { id: 1, name: 'Кебаб', price: 80 },
    { id: 2, name: 'Лахмаджун', price: 60 },
    { id: 3, name: 'Пахлава', price: 40 },
  ];

  return (
    <section 
      id="menu" 
      className="relative py-20 bg-gradient-to-br from-dark-900 via-dark-800 to-bordeaux-950 text-white px-4"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gold-500 mb-8 text-center">Наше Меню</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-dark-800/50 p-6 rounded-2xl border border-gold-500/10 text-center hover:border-gold-500/30 transition-all">
              <h3 className="text-xl font-bold mb-2">{item.name}</h3>
              <p className="text-gold-400 mb-4">{item.price} лей</p>
              <button 
                onClick={() => onAddToCart(item)}
                className="w-full bg-gold-500 py-2 rounded-lg font-bold text-black hover:bg-gold-400 transition"
              >
                В корзину
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
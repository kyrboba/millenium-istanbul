export default function Menu({ onAddToCart }: { onAddToCart: (item: any) => void }) {
  const menuItems = [
    { id: 1, name: 'Кебаб', price: 80 },
    { id: 2, name: 'Лахмаджун', price: 60 },
    { id: 3, name: 'Пахлава', price: 40 },
  ];

  return (
    <section id="menu" className="py-20 bg-gray-950 text-white px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-500 mb-8 text-center">Наше Меню</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-gray-900 p-6 rounded-2xl border border-gray-800 text-center">
              <h3 className="text-xl font-bold mb-2">{item.name}</h3>
              <p className="text-yellow-500 mb-4">{item.price} лей</p>
              <button 
                onClick={() => onAddToCart(item)}
                className="w-full bg-yellow-500 py-2 rounded-lg font-bold text-black hover:bg-yellow-400 transition"
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
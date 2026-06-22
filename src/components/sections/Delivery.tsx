import { useState, useContext, FormEvent } from 'react';
import { CartContext } from '../../context/CartContext';

export default function Delivery() {
  // Безопасно получаем контекст
  const context = useContext(CartContext);
  const [submitted, setSubmitted] = useState(false);

  // Если контекст недоступен, показываем заглушку
  if (!context) {
    return <section className="py-20 text-center text-white">Загрузка корзины...</section>;
  }

  const { cart } = context;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert('Ошибка при отправке: ' + error));
  };

  return (
    <section id="delivery" className="py-20 bg-black text-white px-4">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        
        {/* Блок Корзины */}
        <div className="bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-800">
          <h2 className="text-2xl font-bold text-yellow-500 mb-6">Ваша корзина</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500">Корзина пуста. Выберите блюда в меню.</p>
          ) : (
            <ul className="space-y-4">
              {cart.map((item, i) => (
                <li key={i} className="flex justify-between border-b border-gray-800 pb-2">
                  <span>{item.name} (x{item.quantity})</span>
                  <span>{item.price * item.quantity} лей</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Блок Формы доставки */}
        <div className="bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-800">
          {submitted ? (
            <div className="text-center py-10">
              <h3 className="text-2xl font-bold text-green-500">Заказ принят!</h3>
              <p className="text-gray-400">Мы скоро свяжемся с вами.</p>
            </div>
          ) : (
            <form name="delivery-order" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="form-name" value="delivery-order" />
              {/* Скрытое поле с JSON корзины */}
              <input type="hidden" name="order-details" value={JSON.stringify(cart)} />

              <div>
                <label className="block text-sm text-gray-400 mb-1">Адрес доставки</label>
                <input type="text" name="address" required className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-yellow-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Ваше имя</label>
                <input type="text" name="customer-name" required className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-yellow-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Телефон</label>
                <input type="tel" name="phone" required className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-yellow-500 outline-none" />
              </div>

              <button type="submit" className="w-full bg-yellow-500 py-3 rounded-lg font-bold text-black hover:bg-yellow-400 transition">
                Оформить заказ
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
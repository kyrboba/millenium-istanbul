import { useState } from 'react';
import { FormEvent } from 'react';

export default function Delivery() {
  const [submitted, setSubmitted] = useState(false);

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
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-500 text-center mb-8">Доставка на дом</h2>

        {submitted ? (
          <div className="bg-gray-800 p-10 rounded-2xl border-2 border-green-500 text-center shadow-2xl">
            <h3 className="text-2xl font-bold mb-2">Заказ принят!</h3>
            <p className="text-gray-400">Мы скоро свяжемся с вами для подтверждения.</p>
          </div>
        ) : (
          <form 
            name="delivery-order" 
            method="POST" 
            data-netlify="true" 
            onSubmit={handleSubmit}
            className="space-y-6 bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-800"
          >
            {/* Важно: имя скрытого поля должно совпадать с name формы */}
            <input type="hidden" name="form-name" value="delivery-order" />

            <div className="space-y-1">
              <label className="text-sm text-gray-400">Имя получателя</label>
              <input type="text" name="customer-name" placeholder="Иван Иванов" required className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-yellow-500 outline-none" />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-gray-400">Адрес доставки</label>
              <input type="text" name="address" placeholder="Улица, дом, квартира" required className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-yellow-500 outline-none" />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-gray-400">Что заказать?</label>
              <textarea name="order-details" placeholder="Например: 2 пиццы Маргарита..." required className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 text-white h-24 focus:ring-2 focus:ring-yellow-500 outline-none"></textarea>
            </div>

            <div className="space-y-1">
              <label className="text-sm text-gray-400">Телефон</label>
              <input type="tel" name="phone" placeholder="+373..." required className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-yellow-500 outline-none" />
            </div>

            <button type="submit" className="w-full bg-yellow-500 py-3 rounded-lg font-bold text-black text-lg hover:bg-yellow-400 transition">
              Заказать доставку
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
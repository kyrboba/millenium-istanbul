import { useState } from 'react';
import { FormEvent } from 'react';

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);

  // Обработка отправки формы (AJAX-запрос для Netlify)
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
    <section id="booking" className="py-20 bg-black text-white px-4">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-500 text-center mb-8">Бронирование столика</h2>

        {submitted ? (
          // Красивое сообщение об успехе
          <div className="bg-gray-800 p-10 rounded-2xl border-2 border-green-500 text-center shadow-2xl">
            <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h3 className="text-2xl font-bold mb-2">Столик забронирован!</h3>
            <p className="text-gray-400">Мы свяжемся с вами в ближайшее время.</p>
          </div>
        ) : (
          // Красивая форма
          <form 
            name="cafe-booking" 
            method="POST" 
            data-netlify="true" 
            onSubmit={handleSubmit}
            className="space-y-6 bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-800"
          >
            {/* Скрытое поле для Netlify */}
            <input type="hidden" name="form-name" value="cafe-booking" />

            <div className="space-y-1">
              <label className="text-sm text-gray-400">Ваше имя</label>
              <input type="text" name="name" placeholder="Виктор Максимов" required className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none" />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-gray-400">Телефон</label>
              <input type="tel" name="phone" placeholder="+373..." required className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm text-gray-400">Дата</label>
                <input type="date" name="date" required className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none" />
              </div>
              <div className="space-y-1">
                <label className="text-sm text-gray-400">Время</label>
                <input type="time" name="time" required className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm text-gray-400">Количество гостей</label>
              <select name="guests" className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none">
                {[1,2,3,4,5,6,'6+'].map(num => (
                  <option key={num} value={num} className='bg-gray-800'>{num}</option>
                ))}
              </select>
            </div>

            <button type="submit" className="w-full bg-yellow-500 py-3 rounded-lg font-bold text-black text-lg hover:bg-yellow-400 transition duration-200 transform hover:scale-105">
              Забронировать
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
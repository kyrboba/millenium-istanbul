import { useState } from 'react';
import { FormEvent } from 'react';

export default function Booking() {
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
    <section id="booking" className="py-20 bg-gradient-to-br from-dark-900 via-dark-800 to-bordeaux-950 text-white px-4">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-gold-500 text-center mb-8">Бронирование столика</h2>

        {submitted ? (
          <div className="bg-dark-800/50 p-10 rounded-2xl border border-green-500/50 text-center shadow-2xl">
            <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h3 className="text-2xl font-bold mb-2">Столик забронирован!</h3>
            <p className="text-coffee-200">Мы свяжемся с вами в ближайшее время.</p>
          </div>
        ) : (
          <form 
            name="cafe-booking" 
            method="POST" 
            data-netlify="true" 
            onSubmit={handleSubmit}
            className="space-y-6 bg-dark-800/50 p-8 rounded-2xl shadow-xl border border-gold-500/10"
          >
            <input type="hidden" name="form-name" value="cafe-booking" />

            <div className="space-y-1">
              <label className="text-sm text-coffee-300">Ваше имя</label>
              <input type="text" name="name" placeholder="Виктор Максимов" required className="w-full p-3 bg-dark-900 rounded-lg border border-gold-500/20 text-white placeholder-coffee-600 focus:ring-2 focus:ring-gold-500 outline-none" />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-coffee-300">Телефон</label>
              <input type="tel" name="phone" placeholder="+373..." required className="w-full p-3 bg-dark-900 rounded-lg border border-gold-500/20 text-white placeholder-coffee-600 focus:ring-2 focus:ring-gold-500 outline-none" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm text-coffee-300">Дата</label>
                <input type="date" name="date" required className="w-full p-3 bg-dark-900 rounded-lg border border-gold-500/20 text-white focus:ring-2 focus:ring-gold-500 outline-none" />
              </div>
              <div className="space-y-1">
                <label className="text-sm text-coffee-300">Время</label>
                <input type="time" name="time" required className="w-full p-3 bg-dark-900 rounded-lg border border-gold-500/20 text-white focus:ring-2 focus:ring-gold-500 outline-none" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm text-coffee-300">Количество гостей</label>
              <select name="guests" className="w-full p-3 bg-dark-900 rounded-lg border border-gold-500/20 text-white focus:ring-2 focus:ring-gold-500 outline-none">
                {[1,2,3,4,5,6,'6+'].map(num => (
                  <option key={num} value={num} className='bg-dark-900'>{num}</option>
                ))}
              </select>
            </div>

            <button type="submit" className="w-full bg-gold-500 py-3 rounded-lg font-bold text-black text-lg hover:bg-gold-400 transition duration-200 transform hover:scale-105">
              Забронировать
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Phone, Check, Sparkles } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

const timeSlots = [
  '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
  '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30',
];

export default function Booking() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('2');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (date && time && name && phone) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setDate('');
        setTime('');
        setName('');
        setPhone('');
      }, 4000);
    }
  };

  return (
    <section id="booking" className="py-20 md:py-28 relative">
      {/* Скрытая форма для Netlify (она помогает системе распознать поля) */}
      <form name="cafe-booking" data-netlify="true" hidden>
        <input type="hidden" name="form-name" value="cafe-booking" />
        <input type="date" name="date" />
        <input type="text" name="name" />
        <input type="tel" name="phone" />
        <input type="text" name="guests" />
        <input type="text" name="time" />
      </form>

      <div className="absolute inset-0 bg-gradient-to-b from-dark-800 via-bordeaux-950/20 to-dark-900" />
      <div className="absolute inset-0 turkish-pattern opacity-15" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="section-title">Бронирование столика</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="glass-card rounded-2xl p-6 md:p-10">
            {submitted ? (
              <div className="text-center py-10">
                <Check className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold gold-text">Столик забронирован!</h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} name="cafe-booking" method="POST" data-netlify="true" className="space-y-6">
                <input type="hidden" name="form-name" value="cafe-booking" />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-coffee-200 text-sm font-medium mb-2">Дата</label>
                    <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} className="input-turkish" required />
                  </div>
                  <div>
                    <label className="block text-coffee-200 text-sm font-medium mb-2">Количество гостей</label>
                    <select name="guests" value={guests} onChange={(e) => setGuests(e.target.value)} className="input-turkish">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((n) => <option key={n} value={n}>{n} гостей</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-coffee-200 text-sm font-medium mb-2">Время</label>
                  <input type="hidden" name="time" value={time} />
                  <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                    {timeSlots.map((slot) => (
                      <button key={slot} type="button" onClick={() => setTime(slot)} className={`py-2 rounded ${time === slot ? 'bg-gold-400' : 'bg-dark-800'}`}>
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ваше имя" className="input-turkish" required />
                  <input type="tel" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Телефон" className="input-turkish" required />
                </div>

                <button type="submit" className="btn-gold w-full">Забронировать</button>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
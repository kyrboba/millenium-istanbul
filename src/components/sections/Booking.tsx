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
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800 via-bordeaux-950/20 to-dark-900" />
      <div className="absolute inset-0 turkish-pattern opacity-15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-400/3 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-12 bg-gold-400/40" />
              <Sparkles size={20} className="text-gold-400" />
              <div className="h-px w-12 bg-gold-400/40" />
            </div>
            <h2 className="section-title">Бронирование столика</h2>
            <p className="section-subtitle">Забронируйте место заранее</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="glass-card rounded-2xl p-6 md:p-10">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold gold-text mb-2">Столик забронирован!</h3>
                <p className="text-coffee-300">Мы свяжемся с вами для подтверждения</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Date */}
                  <div>
                    <label className="block text-coffee-200 text-sm font-medium mb-2 flex items-center gap-2">
                      <Calendar size={16} className="text-gold-400" />
                      Дата
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="input-turkish"
                      required
                    />
                  </div>

                  {/* Guests */}
                  <div>
                    <label className="block text-coffee-200 text-sm font-medium mb-2 flex items-center gap-2">
                      <Users size={16} className="text-gold-400" />
                      Количество гостей
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="input-turkish"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((n) => (
                        <option key={n} value={n}>{n} {n === 1 ? 'гость' : n < 5 ? 'гостя' : 'гостей'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Time */}
                <div>
                  <label className="block text-coffee-200 text-sm font-medium mb-2 flex items-center gap-2">
                    <Clock size={16} className="text-gold-400" />
                    Время
                  </label>
                  <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setTime(slot)}
                        className={`py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${
                          time === slot
                            ? 'bg-gold-400/15 border-gold-400/40 text-gold-400'
                            : 'bg-dark-800 border-coffee-700/50 text-coffee-300 hover:border-gold-400/20'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-coffee-200 text-sm font-medium mb-2">Ваше имя</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Иван Петров"
                      className="input-turkish"
                      required
                    />
                  </div>
                  {/* Phone */}
                  <div>
                    <label className="block text-coffee-200 text-sm font-medium mb-2 flex items-center gap-2">
                      <Phone size={16} className="text-gold-400" />
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
                </div>

                <button type="submit" className="btn-gold w-full">
                  Забронировать столик
                </button>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

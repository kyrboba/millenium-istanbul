import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Send, MessageSquare, User, X } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
}

const initialReviews: Review[] = [
  { id: 1, name: 'Анна М.', rating: 5, text: 'Невероятная атмосфера! Кофе просто божественный, а кальян — лучший в Бессарабке. Обязательно придём ещё!', date: '2026-06-15' },
  { id: 2, name: 'Сергей К.', rating: 5, text: 'Отличное место для вечернего отдыха. Персонал вежливый, баклава восхитительна. Рекомендую!', date: '2026-06-10' },
  { id: 3, name: 'Елена В.', rating: 4, text: 'Красивый интерьер, приятная музыка. Кухня вкусная, цены адекватные. Кальян немного долго готовили, но это мелочь.', date: '2026-06-05' },
  { id: 4, name: 'Дмитрий П.', rating: 5, text: 'Лучший турецкий кофе в городе! Заказывал доставку — всё привезли быстро и горячим. Спасибо!', date: '2026-05-28' },
];

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && text) {
      const newReview: Review = {
        id: Date.now(),
        name,
        rating,
        text,
        date: new Date().toISOString().split('T')[0],
      };
      setReviews([newReview, ...reviews]);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setName('');
        setText('');
        setRating(5);
      }, 3000);
    }
  };

  return (
    <section id="reviews" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
      <div className="absolute inset-0 turkish-pattern opacity-20" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-12 bg-gold-400/40" />
              <MessageSquare size={20} className="text-gold-400" />
              <div className="h-px w-12 bg-gold-400/40" />
            </div>
            <h2 className="section-title">Отзывы и пожелания</h2>
            <p className="section-subtitle">Ваше мнение важно для нас</p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Reviews list */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-4">
              <AnimatePresence>
                {reviews.map((review, idx) => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: idx * 0.05 }}
                    className="glass-card rounded-xl p-5"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400/20 to-turquoise-500/20 flex items-center justify-center shrink-0 border border-gold-400/20">
                        <User size={18} className="text-gold-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-coffee-100">{review.name}</span>
                          <span className="text-xs text-coffee-500">{review.date}</span>
                        </div>
                        <div className="flex gap-0.5 mb-2">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star
                              key={s}
                              size={14}
                              className={s <= review.rating ? 'text-gold-400 fill-gold-400' : 'text-coffee-700'}
                            />
                          ))}
                        </div>
                        <p className="text-coffee-300 text-sm leading-relaxed">{review.text}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </ScrollReveal>

          {/* Feedback form */}
          <ScrollReveal delay={0.2}>
            <div className="glass-card rounded-2xl p-6">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-gold-400/15 border border-gold-400/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-gold-400" />
                  </div>
                  <h3 className="text-xl font-bold gold-text mb-2">Спасибо за отзыв!</h3>
                  <p className="text-coffee-300">Мы ценим ваше мнение</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-semibold text-coffee-100 mb-2">Оставить отзыв</h3>
                  <div>
                    <label className="block text-coffee-200 text-sm font-medium mb-1.5">Ваше имя</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ваше имя"
                      className="input-turkish"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-coffee-200 text-sm font-medium mb-1.5">Оценка</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setRating(s)}
                          className="transition-transform hover:scale-110"
                        >
                          <Star
                            size={24}
                            className={s <= rating ? 'text-gold-400 fill-gold-400' : 'text-coffee-700'}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-coffee-200 text-sm font-medium mb-1.5">Ваш отзыв</label>
                    <textarea
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      placeholder="Расскажите о вашем опыте..."
                      rows={4}
                      className="input-turkish resize-none"
                      required
                    />
                  </div>
                  <button type="submit" className="btn-gold w-full">
                    Отправить отзыв
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

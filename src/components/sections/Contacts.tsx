import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

export default function Contacts() {
  return (
    <section id="contacts" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800 via-bordeaux-950/15 to-dark-900" />
      <div className="absolute inset-0 turkish-pattern opacity-15" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-12 bg-gold-400/40" />
              <MapPin size={20} className="text-gold-400" />
              <div className="h-px w-12 bg-gold-400/40" />
            </div>
            <h2 className="section-title">Контакты</h2>
            <p className="section-subtitle">Мы ждём вас</p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Info cards */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-4">
              <div className="glass-card rounded-xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold-400/10 border border-gold-400/20 flex items-center justify-center shrink-0">
                  <MapPin size={22} className="text-gold-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-coffee-100 mb-1">Адрес</h3>
                  <p className="text-coffee-300">ул. Карла Маркса 67</p>
                  <p className="text-coffee-400 text-sm">Бессарабка, Молдова</p>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold-400/10 border border-gold-400/20 flex items-center justify-center shrink-0">
                  <Phone size={22} className="text-gold-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-coffee-100 mb-1">Телефон</h3>
                  <a href="tel:+37312345678" className="text-gold-400 hover:text-gold-300 transition-colors">
                    +373 123 456 78
                  </a>
                  <p className="text-coffee-400 text-sm mt-1">Для бронирования и заказов</p>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold-400/10 border border-gold-400/20 flex items-center justify-center shrink-0">
                  <Clock size={22} className="text-gold-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-coffee-100 mb-1">Часы работы</h3>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between text-coffee-300">
                      <span>Понедельник — Пятница</span>
                      <span className="text-gold-400">10:00 — 23:00</span>
                    </div>
                    <div className="flex justify-between text-coffee-300">
                      <span>Суббота — Воскресенье</span>
                      <span className="text-gold-400">10:00 — 00:00</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold-400/10 border border-gold-400/20 flex items-center justify-center shrink-0">
                  <Mail size={22} className="text-gold-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-coffee-100 mb-1">Email</h3>
                  <a href="mailto:info@millenium.md" className="text-gold-400 hover:text-gold-300 transition-colors">
                    info@millenium.md
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Map placeholder */}
          <ScrollReveal delay={0.2}>
            <div className="glass-card rounded-2xl p-1 h-full min-h-[300px] lg:min-h-0">
              <div className="w-full h-full min-h-[300px] rounded-xl bg-dark-800 border border-gold-400/10 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 turkish-pattern opacity-10" />
                <MapPin size={48} className="text-gold-400/40 mb-3" />
                <p className="text-coffee-400 font-medium">Интерактивная карта</p>
                <p className="text-coffee-600 text-sm mt-1">ул. Карла Маркса 67, Бессарабка</p>
                <p className="text-coffee-700 text-xs mt-4">(заглушка для карты)</p>
                <div className="absolute bottom-4 left-4 right-4">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Бессарабка,+ул.+Карла+Маркса+67"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline w-full text-center text-sm inline-block"
                  >
                    Открыть в Google Maps
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

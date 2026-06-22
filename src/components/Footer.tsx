import { Coffee, Instagram, Facebook, Phone } from 'lucide-react';

export default function Footer() {
  return (
    // Убрали bg-dark-900, теперь футер прозрачный
    <footer className="relative border-t border-gold-400/10">
      <div className="absolute inset-0 turkish-pattern opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <Coffee className="text-gold-400" size={24} />
              <span className="text-xl font-bold text-gold-500 font-display tracking-wider">MILLENIUM</span>
            </div>
            <p className="text-coffee-400 text-sm leading-relaxed">
              Аутентичный турецкий кофе и кальяны в атмосфере восточного гостеприимства.
            </p>
          </div>

          {/* Quick links */}
          <div className="text-center">
            <h4 className="text-coffee-100 font-semibold mb-3">Навигация</h4>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              <a href="#menu" className="text-coffee-400 hover:text-gold-400 text-sm transition-colors">Меню</a>
              <a href="#booking" className="text-coffee-400 hover:text-gold-400 text-sm transition-colors">Бронирование</a>
              <a href="#delivery" className="text-coffee-400 hover:text-gold-400 text-sm transition-colors">Доставка</a>
              <a href="#reviews" className="text-coffee-400 hover:text-gold-400 text-sm transition-colors">Отзывы</a>
              <a href="#contacts" className="text-coffee-400 hover:text-gold-400 text-sm transition-colors">Контакты</a>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="text-center md:text-right">
            <h4 className="text-coffee-100 font-semibold mb-3">Связаться</h4>
            <a href="tel:+37368796105" className="flex items-center justify-center md:justify-end gap-2 text-gold-400 hover:text-gold-300 text-sm mb-3 transition-colors">
              <Phone size={14} />
              +373 687 96 105
            </a>
            <div className="flex items-center justify-center md:justify-end gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-dark-800/50 border border-gold-400/20 flex items-center justify-center text-coffee-400 hover:text-gold-400 hover:border-gold-400/40 transition-all">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-dark-800/50 border border-gold-400/20 flex items-center justify-center text-coffee-400 hover:text-gold-400 hover:border-gold-400/40 transition-all">
                <Facebook size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gold-400/10 pt-6 text-center">
          <p className="text-coffee-600 text-sm">
            © {new Date().getFullYear()} MILLENIUM ISTANBUL. Все права защищены.
          </p>
          <p className="text-coffee-700 text-xs mt-1">
            Бессарабка, ул. Карла Маркса 67, Молдова
          </p>
        </div>
      </div>
    </footer>
  );
}
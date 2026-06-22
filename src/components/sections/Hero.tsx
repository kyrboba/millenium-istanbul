import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToMenu = () => {
    const el = document.querySelector('#menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-bordeaux-950" />
      <div className="absolute inset-0 turkish-pattern opacity-30" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-turquoise-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-turquoise-400 text-sm tracking-[0.3em] uppercase mb-4 font-semibold">
                Добро пожаловать в атмосферу Востока
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-display gold-text text-shadow-gold mb-4"
            >
              MILLENIUM
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl md:text-3xl font-display text-gold-300 mb-6 tracking-wider"
            >
              ISTANBUL
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-coffee-200 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Аутентичный турецкий кофе, ароматные кальяны и восточная кухня в самом сердце Бессарабки
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button onClick={scrollToMenu} className="btn-gold">
                Посмотреть меню
              </button>
              <a href="#booking" className="btn-outline inline-block text-center">
                Забронировать стол
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-8 text-coffee-400 text-sm"
            >
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              Открыто сегодня: 10:00 — 23:00
            </motion.div>
          </div>

          {/* Место для 3D модели закомментировано, чтобы не было ошибки */}
          <div className="hidden lg:block">
            {/* 3D модель временно отключена для исправления ошибки отображения */}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer"
          onClick={scrollToMenu}
        >
          <ChevronDown className="w-8 h-8 text-gold-400/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
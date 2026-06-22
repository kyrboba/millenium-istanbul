import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToMenu = () => {
    const el = document.querySelector('#menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden px-4">
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-turquoise-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto w-full pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-display">
            MILLENIUM <span className="text-gold-500">ISTANBUL</span>
          </h1>
          <p className="text-lg md:text-xl text-coffee-300 max-w-2xl mx-auto mb-10">
            Погрузитесь в атмосферу восточного гостеприимства. Аутентичный турецкий кофе, изысканные кальяны и уют, созданный для вас.
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={scrollToMenu} 
              className="bg-gold-500 text-black px-8 py-3 rounded-lg font-bold hover:bg-gold-400 transition transform hover:scale-105"
            >
              Смотреть меню
            </button>
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          onClick={scrollToMenu}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold-400 animate-bounce cursor-pointer"
        >
          <ChevronDown size={32} />
        </motion.button>
      </div>
    </section>
  );
}
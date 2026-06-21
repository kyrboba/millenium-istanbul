import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Главная', href: '#hero' },
  { label: 'Меню', href: '#menu' },
  { label: 'Бронирование', href: '#booking' },
  { label: 'Доставка', href: '#delivery' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Контакты', href: '#contacts' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-dark-900/90 backdrop-blur-xl border-b border-gold-400/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button onClick={() => scrollTo('#hero')} className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-bold gold-text font-display tracking-wider">
              MILLENIUM
            </span>
            <span className="hidden sm:inline text-xs text-turquoise-400 tracking-widest uppercase font-semibold">
              Istanbul
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'text-gold-400 bg-gold-400/10'
                    : 'text-coffee-200 hover:text-gold-300 hover:bg-gold-400/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA & Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+37312345678"
              className="hidden md:flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors text-sm font-medium"
            >
              <Phone size={16} />
              <span>+373 123 456 78</span>
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-gold-400 hover:bg-gold-400/10 rounded-lg transition-colors"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark-900/95 backdrop-blur-xl border-b border-gold-400/20 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.href.slice(1)
                      ? 'text-gold-400 bg-gold-400/10'
                      : 'text-coffee-200 hover:text-gold-300 hover:bg-gold-400/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="tel:+37312345678"
                className="flex items-center gap-2 px-4 py-3 text-gold-400 text-sm font-medium"
              >
                <Phone size={16} />
                +373 123 456 78
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

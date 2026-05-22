import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'awards', label: 'Awards' },
  { id: 'research', label: 'Research' },
  { id: 'portfolio', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-2xl border-b border-gray-200/50 shadow-[0_1px_3px_rgba(0,0,0,0.03)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button onClick={() => scrollTo('home')} className="font-display text-xl font-bold text-gray-900 tracking-tight hover:opacity-70 transition-opacity">
            RB<span className="text-teal-600">.</span>
          </button>

          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="px-3.5 py-2 text-[13px] font-medium text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-100/80 transition-all"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://drive.google.com/drive/u/3/my-drive"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-5 py-2 text-[13px] font-semibold text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Resume
            </a>
          </nav>

          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-white/95 backdrop-blur-2xl border-t border-gray-100 overflow-hidden"
          >
            <nav className="flex flex-col px-5 py-4 gap-0.5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-left px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all font-medium text-[15px]"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://drive.google.com/drive/u/3/my-drive"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 mt-3 px-4 py-3 text-center text-white bg-gray-900 rounded-full font-medium text-[15px]"
              >
                Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

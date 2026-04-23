import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'awards', label: 'Awards' },
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
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/50 shadow-lg shadow-slate-950/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button onClick={() => scrollTo('home')} className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-slate-700 group-hover:border-sky-500/50 transition-colors shadow-lg shadow-slate-950/50">
              <img
                src="https://i.postimg.cc/0N5fkdwD/Whats-App-Image-2025-10-23-at-9-19-25-AM.jpg"
                alt="Ramu Battu"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors">
              Ramu Battu
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-all"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://drive.google.com/file/d/1nxVLeJKD__B8qmdPHxzCYlaAoLzkDb-j/view"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2 text-sm font-semibold text-sky-400 rounded-lg border border-sky-500/30 hover:bg-sky-500/10 transition-all"
            >
              Resume
            </a>
          </nav>

          <button
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-slate-800/50 overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-left px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all font-medium"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://drive.google.com/file/d/1nxVLeJKD__B8qmdPHxzCYlaAoLzkDb-j/view"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 text-sky-400 hover:bg-sky-500/10 rounded-lg transition-all font-medium"
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

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          <div className="flex items-center">
            <h1 className={`text-2xl font-bold transition-all duration-300 ${
              isScrolled
                ? 'text-slate-800'
                : 'text-white drop-shadow-lg'
            }`}>
              <span className={isScrolled ? '' : 'bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'}>
                Ramu Battu
              </span>
            </h1>
          </div>

          <nav className="hidden md:flex space-x-1">
            {['home', 'about'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                  isScrolled
                    ? 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {item}
              </button>
            ))}
            <a
              href="https://drive.google.com/file/d/1nxVLeJKD__B8qmdPHxzCYlaAoLzkDb-j/view"
              target="_blank"
              rel="noopener noreferrer"
              className={`capitalize font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              Resume
            </a>
            {['skills', 'certifications', 'awards', 'portfolio', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                  isScrolled
                    ? 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {item === 'portfolio' ? 'projects' : item}
              </button>
            ))}
          </nav>

          <button
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled
                ? 'text-slate-800 hover:bg-slate-100'
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t shadow-lg">
          <nav className="flex flex-col space-y-1 px-4 py-4">
            {['home', 'about'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="capitalize text-left font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg transition-all"
              >
                {item}
              </button>
            ))}
            <a
              href="https://drive.google.com/file/d/1nxVLeJKD__B8qmdPHxzCYlaAoLzkDb-j/view"
              target="_blank"
              rel="noopener noreferrer"
              className="capitalize text-left font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg transition-all"
            >
              Resume
            </a>
            {['skills', 'certifications', 'awards', 'portfolio', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="capitalize text-left font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg transition-all"
              >
                {item === 'portfolio' ? 'projects' : item}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

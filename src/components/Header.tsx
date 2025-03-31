import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <Briefcase size={32} className="text-secondary" />
            <span className="text-white font-chivo text-xl font-bold">Durães Promotora</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white hover:text-secondary transition-colors"
            >
              Início
            </Link>
            <Link
              to="/termos"
              className="text-white hover:text-secondary transition-colors"
            >
              Termos de Uso
            </Link>
            <Link
              to="/privacidade"
              className="text-white hover:text-secondary transition-colors"
            >
              Privacidade
            </Link>
            <a
              href="https://wa.me/5561986785809?text=Olá%20Durães,%20vim%20pelo%20site"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Fale Conosco
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-primary"
            >
              <nav className="flex flex-col space-y-4 py-4">
                <Link
                  to="/"
                  className="text-white hover:text-secondary transition-colors px-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Início
                </Link>
                <Link
                  to="/termos"
                  className="text-white hover:text-secondary transition-colors px-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Termos de Uso
                </Link>
                <Link
                  to="/privacidade"
                  className="text-white hover:text-secondary transition-colors px-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Privacidade
                </Link>
                <div className="px-4">
                  <a
                    href="https://wa.me/5561986785809?text=Olá!%20Vim%20através%20do%20site.%20Quero%20tirar%20algumas%20dúvidas!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary block text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Fale Conosco
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
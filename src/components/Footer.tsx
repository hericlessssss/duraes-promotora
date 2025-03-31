import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Briefcase } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white border-t-2 border-secondary">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Informações */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Briefcase size={32} className="text-secondary" />
              <span className="text-white font-chivo text-xl font-bold">Durães Promotora</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Excelência em gestão de cobranças e informações cadastrais.
            </p>
            <p className="text-gray-400 text-sm">
              Serviços especializados de apoio administrativo para o seu negócio.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-chivo">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-secondary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/termos" className="text-gray-400 hover:text-secondary transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/privacidade" className="text-gray-400 hover:text-secondary transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-chivo">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-secondary mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  QSC 19 Chac. 28B QD 02 NÚMERO 33
                  Taguatinga Sul - Brasília/DF
                  CEP: 72.017-446
                </span>
              </li>
              <li>
                <a
                  href="mailto:camilaabdallahc6bank@gmail.com"
                  className="flex items-center text-gray-400 hover:text-secondary transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  camilaabdallahc6bank@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5561986785809"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-secondary transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (61) 98678-5809
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Durães Promotora. Todos os direitos reservados.</p>
          <p className="mt-2">
            Desenvolvido por{' '}
            <a
              href="https://labora-tech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-secondary/80 transition-colors"
            >
              Labora Tech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
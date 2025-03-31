import { motion } from 'framer-motion';
import { MessageSquare, FileText, Database, UserPlus, Calendar, UserCheck, Trophy, Mail, MapPin } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
  >
    <div className="flex flex-col items-center text-center">
      <div className="bg-secondary/10 p-4 rounded-full mb-4">
        <Icon className="w-8 h-8 text-secondary" />
      </div>
      <h3 className="text-xl font-bold mb-2 font-chivo">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

const StatCard = ({ icon: Icon, value, label }: { icon: any, value: string, label: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md"
  >
    <Icon className="w-8 h-8 text-secondary mb-3" />
    <span className="text-3xl font-bold text-primary mb-1">{value}</span>
    <span className="text-gray-600 text-center">{label}</span>
  </motion.div>
);

const ContactCard = ({ icon: Icon, title, children }: { icon: any, title: string, children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white rounded-xl shadow-lg p-8"
  >
    <div className="flex items-center mb-4">
      <div className="bg-secondary/10 p-3 rounded-full mr-4">
        <Icon className="w-6 h-6 text-secondary" />
      </div>
      <h3 className="text-xl font-bold font-chivo">{title}</h3>
    </div>
    {children}
  </motion.div>
);

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/90"></div>
        </div>

        <div className="container relative z-10 px-4 py-32 md:py-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-chivo">
              Recuperação de Crédito com Excelência
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Maximizando seus resultados financeiros com estratégias inteligentes e personalizadas
            </p>
            <motion.a
              href="https://wa.me/5561986785809?text=Olá%20Durães,%20vim%20pelo%20site"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center btn btn-primary text-lg px-8 py-4 gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageSquare className="w-6 h-6" />
              Fale Conosco
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-chivo">
              Nossos Serviços
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções completas em gestão de cobranças e serviços administrativos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={Database}
              title="Gestão de Dados"
              description="Administração eficiente de informações cadastrais com segurança e precisão."
            />
            <ServiceCard
              icon={MessageSquare}
              title="Cobrança Personalizada"
              description="Estratégias especializadas de cobrança com foco em resultados."
            />
            <ServiceCard
              icon={FileText}
              title="Suporte Administrativo"
              description="Apoio completo em processos e documentação administrativa."
            />
            <ServiceCard
              icon={UserPlus}
              title="Análise de Crédito"
              description="Avaliação criteriosa para decisões seguras e eficientes."
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-chivo">
                Durães Promotora
              </h2>
              <p className="text-gray-600 mb-12">
                Com uma abordagem moderna e eficiente, somos especialistas em transformar desafios em soluções. Nossa equipe altamente qualificada utiliza tecnologia avançada e processos inovadores para oferecer serviços excepcionais em gestão de cobranças e informações cadastrais.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StatCard
                icon={Calendar}
                value="1+"
                label="Anos de experiência"
              />
              <StatCard
                icon={UserCheck}
                value="500+"
                label="Clientes satisfeitos"
              />
              <StatCard
                icon={Trophy}
                value="95%"
                label="Taxa de sucesso"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-chivo">
              Entre em Contato
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nossa equipe está pronta para atender suas necessidades
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ContactCard icon={MessageSquare} title="WhatsApp">
              <div className="space-y-4">
                <motion.a
                  href="https://wa.me/5561986785809?text=Olá%20Durães,%20vim%20pelo%20site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center btn btn-primary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  (61) 98678-5809
                </motion.a>
              </div>
            </ContactCard>

            <ContactCard icon={MapPin} title="Informações">
              <div className="space-y-4">
                <p className="text-gray-600">
                  <strong>Endereço:</strong><br />
                  QSC 19 Chac. 28B QD 02 NÚMERO 33<br />
                  Taguatinga Sul - Brasília/DF<br />
                  CEP: 72.017-446
                </p>
                <a
                  href="mailto:camilaabdallahc6bank@gmail.com"
                  className="flex items-center text-secondary hover:underline"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  camilaabdallahc6bank@gmail.com
                </a>
              </div>
            </ContactCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
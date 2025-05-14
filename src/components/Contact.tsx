"use client";

import { FaMapMarkerAlt, FaClock, FaPhone, FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { motion } from 'framer-motion';

const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    title: 'Endereço',
    content: 'Rua Jaguaraiva, 1385 - Santa Terezinha, Fazenda Rio Grande - PR',
    link: 'https://maps.google.com/?q=Rua+Jaguaraiva,1385,Fazenda+Rio+Grande,PR',
  },
  {
    icon: FaClock,
    title: 'Horário de Funcionamento',
    content: 'Segunda à Sexta: 9h às 19h\nSábado: 9h às 18h',
  },
  {
    icon: FaPhone,
    title: 'Telefone',
    content: '(41) 98720-3046',
    link: 'tel:+5541987203046',
  },
];

const socialLinks = [
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    href: 'https://wa.me/5541987203046?text=Olá%2C%20gostaria%20de%20agendar%20um%20horário%20na%20Lírio%20Barbearia.',   
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/liriocabelereiro_barbearia/',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    icon: FaFacebookF,
    label: 'Facebook',
    href: 'https://www.facebook.com/lirio.cabelereiro',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
];

export default function Contact() {
  return (
    <section id="contato" className="min-h-screen py-24 bg-secondary relative overflow-hidden">
      {/* Efeito de fundo */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-secondary to-black opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Agende seu horário ou tire suas dúvidas através dos nossos canais de atendimento
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
          {/* Informações de Contato */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex items-center gap-6 p-6 bg-secondary-dark hover:bg-secondary-light rounded-2xl transition-all duration-300 border border-gray-800/50 hover:border-primary/30"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-all duration-300">
                  <info.icon className="text-primary text-2xl group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary transition-colors">
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary transition-colors whitespace-pre-line"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-400 whitespace-pre-line">{info.content}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Redes Sociais */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex gap-4 pt-4"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.target}
                  rel={social.rel}
                  className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-all duration-300 hover:scale-105"
                >
                  <social.icon className="text-2xl" />
                  <span className="sr-only">{social.label}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.3)] border border-gray-800/50"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.8088304917396!2d-49.31126792374868!3d-25.655435277772583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfb2caa9d2f93%3A0x18c06f34f6e89a3f!2sL%C3%ADrio%20Cabeleireiro%20%26%20Barbearia!5e0!3m2!1spt-BR!2sbr!4v1709842144990!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
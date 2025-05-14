"use client";

import Link from 'next/link';
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaClock, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    href: 'https://wa.me/5541987203046',
    icon: FaWhatsapp,
    label: 'WhatsApp',
  },
  {
    href: 'https://www.instagram.com/liriocabelereiro_barbearia/',
    icon: FaInstagram,
    label: 'Instagram',
  },
];

const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    text: 'Rua Jaguaraiva, 1385 - Santa Terezinha, Fazenda Rio Grande - PR',
  },
  {
    icon: FaClock,
    text: 'Segunda à Sexta: 9h às 19h • Sábado: 9h às 18h',
  },
  {
    icon: FaPhone,
    text: '(41) 98720-3046',
  },
];

export default function Footer() {
  return (
    <footer className="bg-secondary relative overflow-hidden">
      {/* Efeito de gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo e Descrição */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gradient">LÍRIO CABELEIREIRO</h3>
            <p className="text-gray-400">
              Transformando seu visual com expertise e dedicação. Venha conhecer nossa barbearia premium em Fazenda Rio Grande.
            </p>
          </motion.div>

          {/* Links Rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold text-white">Links Rápidos</h4>
            <ul className="space-y-2">
              {['Início', 'Sobre', 'Serviços', 'Galeria', 'Contato'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold text-white">Contato</h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-400">
                  <info.icon className="text-primary mt-1 flex-shrink-0" />
                  <span>{info.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Redes Sociais */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold text-white">Redes Sociais</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="w-12 h-12 rounded-full bg-secondary-light flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Direitos Autorais */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400"
        >
          <p>
            © {new Date().getFullYear()} Lírio Cabeleireiro. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
} 
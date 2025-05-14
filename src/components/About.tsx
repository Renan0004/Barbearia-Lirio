"use client";

import Image from 'next/image';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { FaCheck, FaCut, FaUsers, FaStar } from 'react-icons/fa';
import { useEffect, useRef } from 'react';

const features = [
  'Ambiente climatizado e acolhedor',
  'Profissionais altamente qualificados',
  'Produtos de primeira linha',
  'Atendimento personalizado',
  'Chopp gelado durante o atendimento',
  'Wi-Fi gratuito',
];

const stats = [
  {
    icon: FaUsers,
    value: '5000+',
    label: 'Clientes Satisfeitos',
  },
  {
    icon: FaCut,
    value: '10+',
    label: 'Anos de Experiência',
  },
  {
    icon: FaStar,
    value: '4.9',
    label: 'Avaliação Média',
  },
];

// Componente para animar números
function AnimatedCounter({ value, label, icon: Icon }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const [numberValue] = value.split('+');

  useEffect(() => {
    if (isInView) {
      motionValue.set(parseInt(numberValue));
    }
  }, [isInView, motionValue, numberValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + (value.includes('+') ? '+' : '');
      }
    });
  }, [springValue, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center group"
    >
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
        <Icon className="text-primary text-2xl group-hover:scale-110 transition-transform" />
      </div>
      <div className="text-3xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{value}</div>
      <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{label}</div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-secondary relative overflow-hidden">
      {/* Efeito de fundo */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-secondary to-black opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Cabeçalho da seção */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Sobre a <span className="text-gradient">Barbearia</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Mais que uma barbearia, um espaço de transformação e bem-estar
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-2xl overflow-hidden group"
          >
            {/* Efeito de brilho */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <Image
              src="/gallery/images/lirio.png"
              alt="Lírio - Proprietário da Barbearia"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">
              Tradição e Modernidade em Perfeita Harmonia
            </h3>
            
            <p className="text-gray-400">
              Desde 2013, a Lírio Cabeleireiro tem sido referência em cortes masculinos em Fazenda Rio Grande.
              Nossa missão é proporcionar uma experiência única de cuidado pessoal, combinando técnicas
              tradicionais com as últimas tendências em estilo masculino.
            </p>

            {/* Estatísticas */}
            <div className="grid grid-cols-3 gap-6 py-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="text-primary text-2xl" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <FaCheck className="text-primary text-sm" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <a
                href="https://wa.me/5541987203046"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                Agende seu Horário
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
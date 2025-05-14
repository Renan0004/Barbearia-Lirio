'use client';

import React from 'react';
import { BsScissors, BsPerson, BsPalette, BsDroplet } from "react-icons/bs";
import { motion } from "framer-motion";

const services = [
  {
    icon: <BsScissors className="text-4xl text-primary" />,
    title: "Cortes Modernos",
    description: "Cortes masculinos modernos e clássicos, executados com precisão e atenção aos detalhes.",
    price: "A partir de R$ 35",
  },
  {
    icon: <BsPerson className="text-4xl text-primary" />,
    title: "Barba",
    description: "Modelagem e acabamento de barba com produtos premium e técnicas tradicionais.",
    price: "A partir de R$ 25",
  },
  {
    icon: <BsPalette className="text-4xl text-primary" />,
    title: "Desenhos",
    description: "Arte personalizada no cabelo, criando designs únicos que expressam sua personalidade.",
    price: "A partir de R$ 15",
  },
  {
    icon: <BsDroplet className="text-4xl text-primary" />,
    title: "Química",
    description: "Tratamentos químicos profissionais para coloração, relaxamento e hidratação.",
    price: "Sob consulta",
  },
];

const Services: React.FC = () => {
  return (
    <section id="servicos" className="min-h-screen flex flex-col justify-center items-center bg-secondary py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Oferecemos uma experiência premium de barbearia com serviços personalizados
            para cada cliente
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary-dark rounded-lg p-8 hover:bg-secondary-light transition-colors duration-300 flex flex-col justify-between h-full"
            >
              <div>
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
              </div>
              <p className="text-primary font-semibold">{service.price}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-primary text-black font-semibold rounded-full hover:bg-primary/90 transition-colors duration-300"
          >
            Agendar Horário →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 
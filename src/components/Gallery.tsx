"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const images = [
  {
    src: '/gallery/images/CorteMordernoDegrade.jpeg',
    alt: 'Corte Degradê Moderno',
    category: 'Cortes',
  },
  {
    src: '/gallery/images/CorteSocial.jpeg',
    alt: 'Corte Social Clássico',
    category: 'Cortes',
  },
  {
    src: '/gallery/images/BarbaBemFeita.jpeg',
    alt: 'Barba bem feita',
    category: 'Barbas',
  },
  {
    src: '/gallery/images/DesenhoLateralCabelo.jpeg',
    alt: 'Desenho na lateral',
    category: 'Desenhos',
  },
  {
    src: '/gallery/images/CorteModerno.jpeg',
    alt: 'Corte moderno',
    category: 'Cortes',
  },
  {
    src: '/gallery/images/BarbaEstilizada.jpeg',
    alt: 'Barba estilizada',
    category: 'Barbas',
  },
];

const categories = ['Todos', 'Cortes', 'Barbas', 'Desenhos'];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredImages = selectedCategory === 'Todos'
    ? images
    : images.filter(img => img.category === selectedCategory);

  return (
    <section id="galeria" className="py-20 bg-secondary-dark relative overflow-hidden">
      {/* Efeito de fundo */}
      <div className="absolute inset-0">
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
            Nossa <span className="text-gradient">Galeria</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Confira alguns dos nossos melhores trabalhos e inspire-se para sua próxima transformação
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-black'
                  : 'bg-secondary text-gray-400 hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Grid de imagens */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.src}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={90}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-lg font-semibold mb-1">{image.alt}</p>
                  <p className="text-primary font-medium">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal de visualização */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <FaTimes size={24} />
              </button>
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative w-full max-w-4xl aspect-square"
              >
                <Image
                  src={selectedImage}
                  alt="Imagem ampliada"
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
} 
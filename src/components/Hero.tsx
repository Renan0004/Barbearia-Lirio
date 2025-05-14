"use client";

import Link from 'next/link';
import { FaWhatsapp, FaCut, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Efeito de gradiente animado */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1a1a] to-black" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.3),transparent_70%)]" />
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 -top-48 -left-48 bg-[#d4af37]/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-[#d4af37]/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        </div>
      </div>

      {/* Linhas decorativas */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
        <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-transparent via-[#d4af37]/20 to-transparent" />
        <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-transparent via-[#d4af37]/20 to-transparent" />
      </div>

      {/* Container principal */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Coluna da esquerda - Conteúdo principal */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mb-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <FaCut className="text-[#d4af37] text-5xl transform -rotate-45" />
                  <div className="h-1 flex-grow bg-gradient-to-r from-[#d4af37] to-transparent" />
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wider">
                  <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">LÍRIO</span>{" "}
                  <span className="text-[#d4af37] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-extrabold block mt-2">
                    CABELEIREIRO
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 font-medium tracking-wide max-w-xl">
                  Transforme seu visual em uma obra de arte. 
                  <span className="text-[#d4af37]"> Expertise</span> em cortes modernos e 
                  <span className="text-[#d4af37]"> experiência premium</span>.
                </p>
              </motion.div>

              {/* Botões de Ação */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <Link 
                  href="https://wa.me/5541987203046?text=Olá%2C%20gostaria%20de%20agendar%20um%20horário%20na%20Lírio%20Barbearia." 
                  target="_blank"
                  className="bg-[#d4af37] hover:bg-[#c09b30] text-black px-8 py-4 rounded-xl font-semibold text-xl flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
                >
                  <FaWhatsapp size={28} className="group-hover:rotate-12 transition-transform" />
                  <span>Agendar Agora</span>
                </Link>
                
                <Link 
                  href="https://www.instagram.com/liriocabelereiro_barbearia/"
                  target="_blank"
                  className="bg-gradient-to-r from-black/40 to-black/60 hover:from-black/60 hover:to-black/80 border-2 border-[#d4af37] text-[#d4af37] px-8 py-4 rounded-xl font-semibold text-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3 group"
                >
                  <FaInstagram size={28} className="group-hover:rotate-12 transition-transform" />
                  <span>Instagram</span>
                </Link>
              </motion.div>

              {/* Informações */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="space-y-4 text-gray-400"
              >
                <div className="flex items-center gap-4">
                  <span className="w-8 h-8 rounded-lg bg-[#d4af37]/10 flex items-center justify-center">
                    <span className="w-2 h-2 bg-[#d4af37] rounded-full"></span>
                  </span>
                  <span>Seg-Sex: 9h às 19h • Sáb: 9h às 18h</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-8 h-8 rounded-lg bg-[#d4af37]/10 flex items-center justify-center">
                    <span className="w-2 h-2 bg-[#d4af37] rounded-full"></span>
                  </span>
                  <span>Santa Terezinha, Rua Jaguaraiva, 1385 - FRG</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-8 h-8 rounded-lg bg-[#d4af37]/10 flex items-center justify-center">
                    <span className="w-2 h-2 bg-[#d4af37] rounded-full"></span>
                  </span>
                  <span>(41) 98720-3046</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Coluna da direita - Cards flutuantes */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] hidden md:block"
            >
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-20, 20, -20] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-72 h-96 rounded-2xl bg-gradient-to-br from-[#d4af37]/20 to-black/60 backdrop-blur-lg border border-[#d4af37]/20 p-6 transform -rotate-6"
              >
                <div className="w-16 h-16 rounded-xl bg-[#d4af37]/20 flex items-center justify-center mb-4">
                  <FaCut className="text-[#d4af37] text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Cortes Modernos</h3>
                <p className="text-gray-400">Expertise em cortes masculinos modernos e clássicos.</p>
              </motion.div>

              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [20, -20, 20] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute top-40 right-0 w-72 h-96 rounded-2xl bg-gradient-to-br from-[#d4af37]/20 to-black/60 backdrop-blur-lg border border-[#d4af37]/20 p-6 transform rotate-6"
              >
                <div className="w-16 h-16 rounded-xl bg-[#d4af37]/20 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-[#d4af37]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 14c1.1 0 2-.9 2-2s-.9-2-2-2h-2V8c0-1.1-.9-2-2-2H9V4c0-1.1-.9-2-2-2S5 2.9 5 4v2H3c-1.1 0-2 .9-2 2s.9 2 2 2h2v2c0 1.1.9 2 2 2h2v2c0 1.1.9 2 2 2s2-.9 2-2v-2h2c1.1 0 2-.9 2-2s-.9-2-2-2h-2V8h2v2h2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Desenhos Exclusivos</h3>
                <p className="text-gray-400">Arte personalizada que destaca sua personalidade.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Seta de rolagem */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <Link 
          href="#sobre" 
          className="text-[#d4af37] hover:text-white transition-colors"
          aria-label="Rolar para seção Sobre"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </motion.div>
    </section>
  );
} 
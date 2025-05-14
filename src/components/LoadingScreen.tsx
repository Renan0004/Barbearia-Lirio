"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function LoadingScreen({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Garante que a animação só começa depois que o componente é montado
    setIsReady(true);
    
    const timer = setTimeout(onLoadingComplete, 2800);
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isReady) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-secondary"
    >
      <div className="relative flex flex-col items-center">
        {/* Logo com animação de pulso */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ 
            scale: [0.5, 1.1, 1],
            opacity: 1
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            times: [0, 0.7, 1]
          }}
          className="mb-8 relative w-40 h-40"
        >
          <Image
            src="/gallery/images/LogoBarbearia.png"
            alt="Lírio Barbearia"
            fill
            sizes="160px"
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Texto LÍRIO com fade in */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-5xl font-bold text-gradient mb-6"
        >
          LÍRIO
        </motion.h1>

        {/* Barra de progresso */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="h-1 bg-primary rounded-full w-56"
        />

        {/* Texto de carregando */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="mt-4 text-gray-400"
        >
          Carregando...
        </motion.p>
      </div>
    </motion.div>
  );
} 
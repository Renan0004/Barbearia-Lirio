"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Função para rolar para o topo
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    // Executa o scroll quando o componente é montado
    scrollToTop();

    // Adiciona o evento para capturar o refresh da página
    window.addEventListener('beforeunload', scrollToTop);

    // Cleanup
    return () => {
      window.removeEventListener('beforeunload', scrollToTop);
    };
  }, [pathname]); // Executa quando a rota muda

  // Adiciona evento para capturar o clique no logo/início
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#inicio') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return null;
} 
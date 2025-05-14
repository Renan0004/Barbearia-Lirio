"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";
import ScrollToTop from "./ScrollToTop";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showLoading, setShowLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  // Este useEffect garante que o componente só será renderizado no cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Se não estiver no cliente, renderiza um placeholder para evitar problemas de hidratação
  if (!isClient) {
    return (
      <div className="fixed inset-0 bg-secondary flex items-center justify-center">
        <div className="w-20 h-20"></div>
      </div>
    );
  }

  return (
    <>
      {showLoading && (
        <LoadingScreen onLoadingComplete={() => setShowLoading(false)} />
      )}
      <ScrollToTop />
      <div style={{ visibility: showLoading ? "hidden" : "visible" }}>
        {children}
      </div>
    </>
  );
} 
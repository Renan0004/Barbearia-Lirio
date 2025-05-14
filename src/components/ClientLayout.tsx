"use client";

import { useState } from "react";
import LoadingScreen from "./LoadingScreen";
import ScrollToTop from "./ScrollToTop";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showLoading, setShowLoading] = useState(true);

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
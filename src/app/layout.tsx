import { Poppins } from "next/font/google";
import "./globals.css";
import { metadata } from './metadata';
import dynamic from 'next/dynamic';

// Importação dinâmica do ClientLayout para garantir que seja renderizado apenas no cliente
const ClientLayout = dynamic(() => import("@/components/ClientLayout"), {
  ssr: false,
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap',
  variable: "--font-poppins",
});

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} scroll-smooth`}>
      <body className="min-h-screen bg-secondary font-sans antialiased">
        <ClientLayout>
          <main className="flex min-h-screen flex-col">
            {children}
          </main>
        </ClientLayout>
      </body>
    </html>
  );
}

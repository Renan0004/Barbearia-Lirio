import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Lírio Cabeleireiro | Barbearia Premium em Fazenda Rio Grande',
  description: 'Transforme seu visual com os melhores profissionais em cortes masculinos, barbas e desenhos. Ambiente premium e atendimento personalizado em Fazenda Rio Grande.',
  keywords: 'barbearia, corte masculino, barba, degradê, desenho no cabelo, Fazenda Rio Grande, Lírio Cabeleireiro',
  authors: [{ name: 'Lírio Cabeleireiro' }],
  creator: "Lírio Cabeleireiro",
  openGraph: {
    title: 'Lírio Cabeleireiro | Barbearia Premium',
    description: 'Transforme seu visual com os melhores profissionais em cortes masculinos, barbas e desenhos.',
    url: 'https://liriocabeleireiro.com.br',
    siteName: 'Lírio Cabeleireiro',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verificação-google',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: 'cover',
  },
  themeColor: '#1a1a1a',
}; 
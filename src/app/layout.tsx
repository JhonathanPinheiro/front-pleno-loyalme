import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import './globals.css';
import { ReactQueryProvider } from '@/providers/ReactQueryProvider';

const getMontserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Cupons',
  description: 'Teste Front End pleno Loyalme',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${getMontserrat.variable} antialiased`}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}

import Navbar from './Navbar';
import './globals.css';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={montserrat.className}>
        <Navbar />
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        {children}
      </body>
    </html>
  );
}

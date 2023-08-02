import Navbar from './Navbar'
import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        {children}
      </body>
    </html>
  )
}

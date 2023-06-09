import { ReactNode } from 'react'
import './globals.css'
import { Roboto } from 'next/font/google'
import igniteLogo from '../assets/logo.svg'
import Image from 'next/image'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})

export const metadata = {
  title: 'Ignite Shop',
  description: 'Compre as melhores camisetas sobre tecnologia',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} bg-gray-900 font-sans text-gray-100`}
      >
        <div className="flex min-h-screen flex-col items-center justify-center">
          <header className="mx-auto w-full max-w-[1180px] py-8">
            <Image src={igniteLogo} alt="" />
          </header>

          {children}
        </div>
      </body>
    </html>
  )
}

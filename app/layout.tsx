import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UK Capital Gains Tax Calculator 2024/25 | Property, Shares & Crypto',
  description: 'Free HMRC-aligned capital gains tax calculator for UK property, shares, crypto & more. Calculate CGT on property sales, inheritances, and investments for 2024/25.',
  keywords: [
    'capital gains tax calculator uk',
    'hmrc capital gains tax calculator',
    'property capital gains tax calculator',
    'capital gains tax calculator shares',
    'crypto capital gains tax calculator',
    'capital gains tax calculator 2024/25'
  ].join(', '),
  openGraph: {
    title: 'UK Capital Gains Tax Calculator 2024/25',
    description: 'Calculate your UK capital gains tax for property, shares, and crypto',
    url: 'https://calculateyourcapitalgainstax.co.uk',
    siteName: 'UK Capital Gains Tax Calculator',
    locale: 'en_GB',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 
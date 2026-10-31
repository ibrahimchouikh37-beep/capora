// app/layout.tsx
import type { Metadata } from 'next'
import { Inter_Tight } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'react-hot-toast'
import './globals.css'
import { Providers } from './providers'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

const interTight = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter-tight',
})

export const metadata: Metadata = {
  title: 'Capora MA | Premium Caps Since 2026',
  description: 'Luxury cap brand redefining urban elegance. Discover exclusive collections and premium craftsmanship.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-[#0A0A0A]">
      <body className="font-sans antialiased">
        <Providers>
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: '#1A1A1A',
                color: '#FFFFFF',
                borderRadius: '12px',
                padding: '16px',
                fontFamily: 'Inter Tight, sans-serif',
              },
              success: {
                iconTheme: {
                  primary: '#FDB813',
                  secondary: '#000000',
                },
                style: {
                  background: '#1A1A1A',
                  color: '#FFFFFF',
                  border: '1px solid rgba(253, 184, 19, 0.2)',
                },
              },
              error: {
                style: {
                  background: '#1A1A1A',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255, 0, 0, 0.2)',
                },
              },
            }}
          />
          <Header />
          {children}
          <Footer />
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </Providers>
      </body>
    </html>
  )
}
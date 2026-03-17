import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const raleway = Raleway({ 
  subsets: ["latin", "cyrillic"],
  variable: '--font-raleway'
});

export const metadata: Metadata = {
  title: 'Плиточник в Минске | Профессиональная укладка плитки',
  description: 'Профессиональные услуги по укладке плитки в Минске. Ванные комнаты, кухни, полы. Опыт более 10 лет. Гарантия качества.',
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
    <html lang="ru" className={raleway.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

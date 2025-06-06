import './globals.css'
import { Inter, Roboto } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'CoryMotion - Creative Portfolio 2025',
  description: 'Creative portfolio showcasing motion design, web development, and visual arts by Cory Motion',
  keywords: 'motion design, portfolio, creative, web development, visual arts, animation',
  authors: [{ name: 'Cory Motion' }],
  creator: 'Cory Motion',
  openGraph: {
    title: 'CoryMotion - Creative Portfolio 2025',
    description: 'Creative portfolio showcasing motion design, web development, and visual arts',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CoryMotion - Creative Portfolio 2025',
    description: 'Creative portfolio showcasing motion design, web development, and visual arts',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={`${inter.className} ${roboto.className}`}>{children}</body>
    </html>
  )
}

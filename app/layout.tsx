import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import './globals.css'
//import '@/devlink/global.css'

//const inter = Inter({ subsets: ['latin'] }) //className={inter.className}

export const metadata: Metadata = {
  title: "Mar's - Honest Food, Good Spirits, and A Place to Gather",
  description: "life at mar's",
  icons: {
    icon: '/Mars_Logo.png',
    apple: '/Mars_Logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}

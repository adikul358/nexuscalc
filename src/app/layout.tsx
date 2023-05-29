import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <title>NexusCalc — Project by Aditya Kulshrestha</title>
      <meta name="title" content="NexusCalc — Project by Aditya Kulshrestha" />
      <meta name="description" content="NexusCalc — Project by Aditya Kulshrestha" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://nexuscalc.adikul.dev/" />
      <meta property="og:title" content="NexusCalc — Project by Aditya Kulshrestha" />
      <meta property="og:description" content="NexusCalc — Project by Aditya Kulshrestha" />
      <meta property="og:image" content="https://nexuscalc.adikul.dev/banner.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://nexuscalc.adikul.dev/" />
      <meta property="twitter:title" content="NexusCalc — Project by Aditya Kulshrestha" />
      <meta property="twitter:description" content="NexusCalc — Project by Aditya Kulshrestha" />
      <meta property="twitter:image" content="https://nexuscalc.adikul.dev/banner.png" />

        <link rel="icon" type="image/x-icon" href="/favicon.png"/>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

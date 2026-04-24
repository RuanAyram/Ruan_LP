import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ruan Kaylo | Full Stack Developer",
  description:
    "Desenvolvedor Full Stack apaixonado por tecnologia e programação. Especializado em Ruby on Rails e NextJS/TypeScript.",
  keywords: ["Full Stack Developer", "Ruby on Rails", "NextJS", "Ruan Kaylo", "Web Developer"],
  authors: [{ name: "Ruan Kaylo" }],
  icons: {
    icon: "/fav_one.png",
  },
  openGraph: {
    title: "Ruan Kaylo | Full Stack Developer",
    description: "Desenvolvedor Full Stack apaixonado por tecnologia e programação.",
    type: "website",
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-JCJFL59HSK"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JCJFL59HSK');
            `,
          }}
        />
      </body>
    </html>
  )
}

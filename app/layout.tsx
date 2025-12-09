import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DishIs Technologies - Developer APIs & Email Services",
  description:
    "2M+ API calls processed. Powerful APIs for image hosting, video hosting, code execution, temporary emails, and professional email services. Built for developers.",
  generator: "v0.app",
  icons: {
    icon: "https://avatars.githubusercontent.com/u/120817762?s=200&v=4",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased bg-white text-black`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
